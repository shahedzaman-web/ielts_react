import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { HighlightBar } from '../components/HighlightBar';
import { ListeningBlock } from './ListeningBlocks';
import { useTimer } from '../hooks/useTimer';
import { useHighlight } from '../hooks/useHighlight';
import { useTestState, estimateBand } from '../hooks/useTestState';

export default function ListeningTest({ test }) {
  const { KEY, CHECKBOX = {}, PAIRED = {} } = test;
  const [currentPart, setCurrentPart] = useState(1);
  const [barHidden, setBarHidden] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  // Countdown timer — listening tests default to 30 minutes (can be overridden via test.duration)
  const duration = test.duration || 1800;
  const { formatted } = useTimer({ duration, countdown: true });

  const refs = useRef([]);
  const hl = useHighlight(refs, `hl-${test.title}`);
  const storageKey = `ielts:listening:${test.title}`;

  const state = useTestState({
    KEY,
    CHECKBOX,
    PAIRED,
    storageKey,
    onGraded: () => setShowResult(true),
  });

  // Detect saved answers and offer to resume
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

  // Highlight listeners
  useEffect(() => {
    document.addEventListener('mouseup', hl.handleMouseUp);
    document.addEventListener('scroll', hl.hide, { passive: true });
    return () => {
      document.removeEventListener('mouseup', hl.handleMouseUp);
      document.removeEventListener('scroll', hl.hide);
    };
  }, [hl]);

  // Progress counter (honours CHECKBOX group aggregation and PAIRED pairing)
  const answeredCount = () => {
    let n = 0;
    const counted = {};
    for (let q = 1; q <= 40; q++) {
      const g = CHECKBOX[q]?.name || PAIRED[q];
      if (g) {
        if (counted[g]) continue;
        counted[g] = true;
      }
      if (state.hasAnswer(q)) n++;
    }
    return n;
  };

  const reset = () => {
    state.reset();
    setCurrentPart(1);
    setShowResult(false);
    setShowReview(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQList =
    test.parts.find(p => p.n === currentPart) || test.parts[0];
  const ctx = { ...state, KEY, CHECKBOX, PAIRED };

  // Palette navigation: text inputs use aria-label, radios use name.
  const jumpToQuestion = (q) => {
    const el = document.querySelector(
      `[aria-label="Question ${q}"], [name="q${q}"]`
    );
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    try { el.focus({ preventScroll: true }); } catch {}
  };

  return (
    <>
      <style>{`
        .ielts-drag-instructions{display:flex;align-items:flex-start;gap:10px;margin:10px 0 16px;padding:10px 12px;border:1px solid #dbe3ef;border-left:3px solid #2563eb;border-radius:4px;background:#f8fafc;color:#475569;font-size:13px;line-height:1.5}
        .ielts-drag-instructions strong{flex:0 0 auto;color:#1e293b;font-size:12px;text-transform:uppercase;letter-spacing:.035em}
        @media(max-width:600px){.ielts-drag-instructions{display:block}.ielts-drag-instructions strong{display:block;margin-bottom:3px}}
      `}</style>
      <Header
        title={test.title}
        band={state.graded ? estimateBand(state.score) : ''}
        timer={formatted}
        onReset={reset}
      />

      {showResume && (
        <div className="resume-modal" role="dialog" aria-modal="true">
          <div className="resume-card">
            <h3>Resume previous attempt?</h3>
            <p>
              We found <strong>{savedCount}</strong> saved{' '}
              {savedCount === 1 ? 'answer' : 'answers'} for this test. Would you
              like to continue where you left off, or start fresh?
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

      <main className="wrap ielts-listening-main">
        {test.parts.map(part => (
          <section
            key={part.n}
            className="card"
            style={{ display: part.n === currentPart ? 'block' : 'none' }}
            ref={el => {
              if (el) {
                el.dataset.hlId = `part-${part.n}`;
                refs.current[part.n - 1] = el;
              }
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                paddingBottom: 10,
                borderBottom: '1px solid #e2e8f0',
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  background: 'var(--brand)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 13,
                  padding: '4px 12px',
                  borderRadius: 999,
                }}
              >
                Part {part.n}
              </span>
              <span style={{ color: '#64748b', fontSize: 14, fontWeight: 600 }}>
                {part.desc}
              </span>
            </div>
            <audio
              controls
              preload="none"
              src={part.audio}
              aria-label={`Listening audio, Part ${part.n}`}
              style={{ width: '100%', margin: '10px 0 6px' }}
            />
            {part.blocks.some(block =>
              block.type === 'drag-match' ||
              (block.type === 'select-match' && block.mode !== 'select') ||
              (block.type === 'word-bank' && block.mode !== 'select')
            ) && (
              <div className="ielts-drag-instructions" role="note">
                <strong>Drag and drop</strong>
                <span>Move an option into the answer box. You can also select an option and then select a box. Select a filled box to clear it.</span>
              </div>
            )}
            {part.blocks.map((b, i) => (
              <ListeningBlock key={i} block={b} ctx={ctx} />
            ))}
          </section>
        ))}
      </main>

      <div className={`bottombar ${barHidden ? 'off' : ''}`}>
        <div className="bb-inner">
          <div className="bb-top">
            <div className="bb-tabs">
              {test.parts.map(p => (
                <button
                  key={p.n}
                  className={`bb-tab ${p.n === currentPart ? 'current' : ''}`}
                  onClick={() => setCurrentPart(p.n)}
                >
                  Part {p.n}
                </button>
              ))}
            </div>
            <div className="bb-palette">
              {Array.from(
                { length: currentQList.to - currentQList.from + 1 },
                (_, i) => currentQList.from + i
              ).map(q => {
                let cls = '';
                if (state.graded) cls = state.isCorrect(q) ? 'ok' : 'no';
                else if (state.hasAnswer(q)) cls = 'answered';
                return (
                  <button
                    key={q}
                    className={`chip ${cls}`}
                    onClick={() => jumpToQuestion(q)}
                  >
                    {q}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="bb-bottom">
            <span className="bb-progress">
              {answeredCount()} / 40 answered
            </span>
            <div className="bb-actions">
              <button
                className="btn small"
                onClick={() => setShowReview(true)}
              >
                📋 Review
              </button>
              <button
                className="btn primary small"
                onClick={state.submit}
              >
                Submit ✈
              </button>
              <button
                className="bb-hide"
                onClick={() => setBarHidden(true)}
                aria-label="Hide question bar"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      {barHidden && (
        <button id="bbShow" onClick={() => setBarHidden(false)}>
          Show question bar
        </button>
      )}

      {showResult && (
        <div
          className="overlay"
          onClick={e => {
            if (e.target.className === 'overlay') setShowResult(false);
          }}
        >
          <div className="overlay-card">
            <div className="overlay-head">
              <h3>Your Results</h3>
              <button
                className="close-x"
                onClick={() => setShowResult(false)}
              >
                ×
              </button>
            </div>
            <div className="overlay-body">
              <div className="score-summary">
                <div className="big">{state.score} / 40</div>
                <div className="sub">
                  Band estimate: {estimateBand(state.score)}
                </div>
              </div>
              <table className="result-tbl">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Your Answer</th>
                    <th>Correct</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map(q => {
                    const ua = state.getUserAnswer(q);
                    const ok = state.isCorrect(q);
                    return (
                      <tr key={q}>
                        <td>{q}</td>
                        <td
                          className={
                            ua ? (ok ? 'correct' : 'wrong') : ''
                          }
                        >
                          {ua || '—'}
                        </td>
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
        <div
          className="overlay"
          onClick={e => {
            if (e.target.className === 'overlay') setShowReview(false);
          }}
        >
          <div className="overlay-card">
            <div className="overlay-head">
              <h3>Review Your Answers</h3>
              <button
                className="close-x"
                onClick={() => setShowReview(false)}
              >
                ×
              </button>
            </div>
            <div className="overlay-body">
              <table className="result-tbl">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Your Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map(q => (
                    <tr key={q}>
                      <td>{q}</td>
                      <td>{state.getUserAnswer(q) || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <HighlightBar
        bar={hl.bar}
        onHighlight={hl.applyHighlight}
        onClear={hl.clearAll}
      />
    </>
  );
}