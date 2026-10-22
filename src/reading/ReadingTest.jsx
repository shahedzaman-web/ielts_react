import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { HighlightBar } from '../components/HighlightBar';
import { QuestionGroup } from './ReadingBlocks';
import { useTimer } from '../hooks/useTimer';
import { useHighlight } from '../hooks/useHighlight';
import { useTestState, estimateBand } from '../hooks/useTestState';

export default function ReadingTest({ test }) {
  const { ANSWER_KEY, CHECKBOX_GROUPS = {} } = test;
  const [currentPart, setCurrentPart] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const { formatted } = useTimer({ duration: 3600, countdown: true });
  const refs = useRef([]);
  const hl = useHighlight(refs, `rl-${test.title}`);

  const checkboxMap = Object.fromEntries(
    Object.entries(CHECKBOX_GROUPS).map(([q, v]) => [q, { name: v.name, correct: v.correct }])
  );

  const storageKey = `ielts:reading:${test.title}`;
  const state = useTestState({
    KEY: ANSWER_KEY,
    CHECKBOX: checkboxMap,
    storageKey,
    onGraded: () => setShowResult(true),
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      const count = Object.keys(parsed || {}).length;
      if (count > 0) {
        setSavedCount(count);
        setShowResume(true);
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    document.addEventListener('mouseup', hl.handleMouseUp);
    document.addEventListener('scroll', hl.hide, { passive: true });
    return () => {
      document.removeEventListener('mouseup', hl.handleMouseUp);
      document.removeEventListener('scroll', hl.hide);
    };
  }, [hl]);

  const allQ = (part) => {
    const s = test.sections.find(x => x.part === part);
    if (!s) return [];
    const out = [];
    s.groups.forEach(g => (g.items || []).forEach(it => out.push(it.q)));
    return out;
  };
  const partQ = allQ(currentPart);
  const ctx = { ...state, KEY: ANSWER_KEY, CHECKBOX: checkboxMap };

  const reset = () => {
    state.reset();
    setCurrentPart(1);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header title={test.title} band={state.graded ? estimateBand(state.score) : ''} timer={formatted} onReset={reset} />

      {showResume && (
        <div className="resume-modal" role="dialog" aria-modal="true">
          <div className="resume-card">
            <h3>Resume previous attempt?</h3>
            <p>
              We found <strong>{savedCount}</strong> saved {savedCount === 1 ? 'answer' : 'answers'} for this test.
              Would you like to continue where you left off, or start fresh?
            </p>
            <div className="resume-actions">
              <button
                type="button"
                onClick={() => {
                  state.clearStorage();
                  state.reset();
                  setShowResume(false);
                }}
              >
                Start fresh
              </button>
              <button
                type="button"
                className="primary"
                onClick={() => {
                  state.loadFromStorage();
                  setShowResume(false);
                }}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="reading-split">
        <div className="reading-pane reading-passages" ref={el => { if (el) { el.dataset.hlId = 'passage'; refs.current[0] = el; } }}>
          {test.passages.map(p => (
            <div key={p.part} className={`reading-passage ${p.part === currentPart ? 'active' : ''}`} style={{ display: p.part === currentPart ? 'block' : 'none' }}>
              <span style={{ display: 'inline-block', background: '#ccfbf1', color: 'var(--brand)', fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 999, marginBottom: 10 }}>Part {p.part}</span>
              <h2>{p.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: p.html }} />
            </div>
          ))}
        </div>

        <div className="reading-pane reading-questions" ref={el => { if (el) { el.dataset.hlId = 'questions'; refs.current[1] = el; } }}>
          {test.sections.map(s => (
            <div key={s.part} className={`q-section ${s.part === currentPart ? 'active' : ''}`} style={{ display: s.part === currentPart ? 'block' : 'none' }}>
              {s.groups.map((g, i) => <QuestionGroup key={i} group={g} ctx={ctx} />)}
            </div>
          ))}
        </div>
      </div>

      <div className="reading-bottom">
        <div className="reading-bottom-inner">
          <div className="part-tabs">
            {test.passages.map(p => {
              const qs = allQ(p.part);
              return (
                <button key={p.part} className={`part-tab ${p.part === currentPart ? 'active' : ''}`} onClick={() => setCurrentPart(p.part)}>
                  <span className="tab-part-name">Part {p.part}</span>
                  <span className="tab-qcount">Questions {qs[0]}–{qs[qs.length - 1]}</span>
                </button>
              );
            })}
          </div>
          <div className="palette">
            <div className="palette-section">
              <strong className="palette-label">Part {currentPart}:</strong>
              {partQ.map(q => {
                let cls = '';
                if (state.graded) cls = state.isCorrect(q) ? 'correct' : 'wrong';
                else if (state.hasAnswer(q)) cls = 'answered';
                return <button key={q} className={`palette-item ${cls}`} onClick={() => document.querySelector(`input[name="q${q}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>{q}</button>;
              })}
            </div>
          </div>
          <div className="bottom-controls">
            <div className="nav-buttons">
              <button disabled={currentPart === 1} onClick={() => setCurrentPart(p => p - 1)}>←</button>
              <button disabled={currentPart === test.passages.length} onClick={() => setCurrentPart(p => p + 1)}>→</button>
            </div>
            <div className="test-buttons">
              <button className="review-btn" onClick={() => setShowReview(true)}>📋 Review</button>
              <button className="submit-btn" onClick={state.submit}>Submit ✈</button>
            </div>
          </div>
        </div>
      </div>

      {showResult && (
        <div className="overlay" onClick={e => { if (e.target.className === 'overlay') setShowResult(false); }}>
          <div className="overlay-card">
            <div className="overlay-head"><h3>Your Results</h3><button className="close-x" onClick={() => setShowResult(false)}>×</button></div>
            <div className="overlay-body">
              <div className="score-summary">
                <div className="big">{state.score} / 40</div>
                <div className="sub">Band estimate: {estimateBand(state.score)}</div>
              </div>
              <table className="result-tbl">
                <thead><tr><th>#</th><th>Your Answer</th><th>Correct</th></tr></thead>
                <tbody>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map(q => {
                    const ua = state.getUserAnswer(q);
                    const ok = state.isCorrect(q);
                    return (
                      <tr key={q}>
                        <td>{q}</td>
                        <td className={ua ? (ok ? 'correct' : 'wrong') : ''}>{ua || '—'}</td>
                        <td>{state.correctLabel(q)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {showReview && (
        <div className="overlay" onClick={e => { if (e.target.className === 'overlay') setShowReview(false); }}>
          <div className="overlay-card">
            <div className="overlay-head"><h3>Review Your Answers</h3><button className="close-x" onClick={() => setShowReview(false)}>×</button></div>
            <div className="overlay-body">
              <table className="result-tbl">
                <thead><tr><th>#</th><th>Your Answer</th></tr></thead>
                <tbody>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map(q => (
                    <tr key={q}><td>{q}</td><td>{state.getUserAnswer(q) || '—'}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <HighlightBar bar={hl.bar} onHighlight={hl.applyHighlight} onClear={hl.clearAll} />
    </>
  );
}
