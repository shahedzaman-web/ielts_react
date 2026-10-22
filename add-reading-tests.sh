#!/usr/bin/env bash
set -euo pipefail


if [ ! -d "src/reading" ]; then
  echo "Error: run from inside the cambridge-guide-ielts project"
  exit 1
fi

echo "→ 1/6 Rewriting src/hooks/useTestState.js (persistence + beforeunload)…"
cat > src/hooks/useTestState.js << 'EOF'
import { useCallback, useEffect, useMemo, useState } from 'react';

export function normalize(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[£$€]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/^\s*(the|a|an)\s+/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '');
}

export function useTestState({ KEY, CHECKBOX = {}, PAIRED = {}, onGraded, storageKey } = {}) {
  const [answers, setAnswers] = useState({});
  const [graded, setGraded] = useState(false);

  useEffect(() => {
    if (!storageKey) return;
    try {
      if (Object.keys(answers).length > 0) {
        localStorage.setItem(storageKey, JSON.stringify(answers));
      }
    } catch {}
  }, [answers, storageKey]);

  useEffect(() => {
    if (Object.keys(answers).length === 0) return;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = 'You have unsaved test progress. Are you sure you want to leave?';
      return e.returnValue;
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [answers]);

  const groupValue = useCallback((g) => ([...(answers[g] || [])].sort().join(',')), [answers]);
  const setAnswer = useCallback((q, v) => setAnswers(p => ({ ...p, [q]: v })), []);
  const toggleGroup = useCallback((g, v, max) => setAnswers(p => {
    const cur = new Set(p[g] || []);
    if (cur.has(v)) cur.delete(v);
    else if (cur.size < max) cur.add(v);
    return { ...p, [g]: [...cur] };
  }), []);

  const getUserAnswer = useCallback((q) => {
    if (CHECKBOX[q]) return groupValue(CHECKBOX[q].name);
    if (PAIRED[q]) return groupValue(PAIRED[q]);
    return String(answers[q] ?? '');
  }, [answers, CHECKBOX, PAIRED, groupValue]);

  const hasAnswer = useCallback((q) => getUserAnswer(q).trim() !== '', [getUserAnswer]);

  const isCorrect = useCallback((q) => {
    const ua = getUserAnswer(q);
    if (CHECKBOX[q]) {
      const c = [...CHECKBOX[q].correct].sort();
      const u = ua.split(',').filter(Boolean).sort();
      return u.length === c.length && u.every((v, i) => v === c[i]);
    }
    if (PAIRED[q]) {
      const c = [...KEY[q]].map(v => String(v).toUpperCase()).sort();
      const u = ua.split(',').filter(Boolean).map(v => v.toUpperCase()).sort();
      return u.length === c.length && u.every((v, i) => v === c[i]);
    }
    const keys = KEY[q] || [];
    const v = normalize(ua);
    return !!v && keys.some(k => normalize(k) === v);
  }, [getUserAnswer, KEY, CHECKBOX, PAIRED]);

  const correctLabel = useCallback((q) => {
    if (CHECKBOX[q]) return CHECKBOX[q].correct.join(', ');
    if (PAIRED[q]) return KEY[q].map(v => String(v).toUpperCase()).join(', ');
    return (KEY[q] || [])[0] || '';
  }, [KEY, CHECKBOX, PAIRED]);

  const score = useMemo(() => {
    let s = 0;
    for (let q = 1; q <= 40; q++) if (isCorrect(q)) s++;
    return s;
  }, [isCorrect]);

  const submit = useCallback(() => { setGraded(true); onGraded?.(score); }, [onGraded, score]);

  const reset = useCallback(() => {
    setAnswers({});
    setGraded(false);
    if (storageKey) { try { localStorage.removeItem(storageKey); } catch {} }
  }, [storageKey]);

  const loadFromStorage = useCallback(() => {
    if (!storageKey) return false;
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (!parsed || Object.keys(parsed).length === 0) return false;
      setAnswers(parsed);
      return true;
    } catch { return false; }
  }, [storageKey]);

  const clearStorage = useCallback(() => {
    if (!storageKey) return;
    try { localStorage.removeItem(storageKey); } catch {}
  }, [storageKey]);

  return {
    answers, setAnswer, toggleGroup, getUserAnswer, hasAnswer, isCorrect, correctLabel,
    graded, score, submit, reset, loadFromStorage, clearStorage,
  };
}

export function estimateBand(s) {
  if (s >= 39) return '9.0'; if (s >= 37) return '8.5';
  if (s >= 35) return '8.0'; if (s >= 33) return '7.5';
  if (s >= 30) return '7.0'; if (s >= 27) return '6.5';
  if (s >= 23) return '6.0'; if (s >= 19) return '5.5';
  if (s >= 15) return '5.0'; if (s >= 13) return '4.5';
  if (s >= 10) return '4.0'; if (s >= 8)  return '3.5';
  if (s >= 6)  return '3.0'; if (s >= 4)  return '2.5';
  return '2.0 or below';
}
EOF

echo "→ 2/6 Rewriting src/reading/ReadingBlocks.jsx (drag-match, word-bank drag, section title, image)…"
cat > src/reading/ReadingBlocks.jsx << 'EOF'
import { useState } from 'react';

function GapInput({ q, ctx }) {
  const val = ctx.answers[q] ?? '';
  const ok = ctx.graded ? ctx.isCorrect(q) : null;
  return (
    <span className="q">
      <span className="num">{q}</span>
      <input
        type="text"
        value={val}
        onChange={e => ctx.setAnswer(q, e.target.value)}
        className={ctx.graded ? (ok ? 'is-right' : 'is-wrong') : ''}
        aria-label={`Question ${q}`}
      />
      {ctx.graded && !ok && <span className="feedback no">✗ <em>{ctx.correctLabel(q)}</em></span>}
      {ctx.graded && ok && <span className="feedback ok">✓</span>}
    </span>
  );
}

function QRow({ q, children, ctx }) {
  const ok = ctx.graded ? ctx.isCorrect(q) : null;
  return (
    <div className={`q-row ${ctx.graded ? (ok ? 'correct' : 'wrong') : ''}`}>
      <div className="q-num">{q}</div>
      <div className="q-body">{children}</div>
    </div>
  );
}

function bankOptionText(b) {
  if (!b) return '';
  if (b.label == null || b.label === b.value) return String(b.value);
  return `${b.value}. ${b.label}`;
}

function paragraphsToBank(paragraphs) {
  return (paragraphs || []).map(p => ({ value: p, label: p }));
}

/* ============ DRAG-MATCH (chips + row slots) ============ */
function DragMatch({ group, ctx }) {
  const [selectedChip, setSelectedChip] = useState(null);
  const bank = group.bank && group.bank.length ? group.bank : paragraphsToBank(group.paragraphs);
  const allowReuse = group.allowReuse === true;

  const usedValues = new Set();
  if (!allowReuse) {
    group.items.forEach(it => {
      const v = ctx.answers[it.q];
      if (v) usedValues.add(v);
    });
  }

  const assign = (q, value) => { ctx.setAnswer(q, value); setSelectedChip(null); };

  return (
    <>
      <div className="drag-bank">
        {bank.map(b => {
          const used = !allowReuse && usedValues.has(b.value);
          const isSelected = selectedChip === b.value;
          return (
            <button
              key={b.value}
              type="button"
              className={`drag-chip ${used ? 'used' : ''} ${isSelected ? 'selected' : ''}`}
              draggable={!used}
              onDragStart={e => {
                e.dataTransfer.setData('text/plain', b.value);
                e.dataTransfer.effectAllowed = 'move';
              }}
              onClick={() => { if (!used) setSelectedChip(isSelected ? null : b.value); }}
            >
              {bankOptionText(b)}
            </button>
          );
        })}
      </div>

      {group.items.map(it => {
        const ans = ctx.answers[it.q] || '';
        const chip = bank.find(b => b.value === ans);
        const ok = ctx.graded ? ctx.isCorrect(it.q) : null;
        return (
          <QRow key={it.q} q={it.q} ctx={ctx}>
            <div className="drag-row">
              {it.statement && <span className="drag-statement">{it.statement}</span>}
              <span
                className={`drag-slot ${ans ? 'filled' : ''} ${ctx.graded ? (ok ? 'correct' : 'wrong') : ''}`}
                onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add('over'); }}
                onDragLeave={e => e.currentTarget.classList.remove('over')}
                onDrop={e => {
                  e.preventDefault();
                  e.currentTarget.classList.remove('over');
                  const v = e.dataTransfer.getData('text/plain');
                  if (v) assign(it.q, v);
                }}
                onClick={() => {
                  if (ans) ctx.setAnswer(it.q, '');
                  else if (selectedChip) assign(it.q, selectedChip);
                }}
              >
                {ans ? (chip ? bankOptionText(chip) : ans) : (selectedChip ? 'Click to place' : '——')}
              </span>
              {ctx.graded && !ok && <span className="feedback no">✗ {ctx.correctLabel(it.q)}</span>}
            </div>
          </QRow>
        );
      })}
    </>
  );
}

/* ============ WORD-BANK DRAG (chips + inline slots in flowing text) ============ */
function WordBankDrag({ group, ctx, title, instr }) {
  const [selected, setSelected] = useState(null);
  const usedValues = new Set();
  group.items.forEach(it => {
    const v = ctx.answers[it.q];
    if (v) usedValues.add(v);
  });

  return (
    <>
      <div className="drag-bank">
        {group.bank.map(b => {
          const used = usedValues.has(b.value);
          const isSel = selected === b.value;
          return (
            <button
              key={b.value}
              type="button"
              className={`drag-chip ${used ? 'used' : ''} ${isSel ? 'selected' : ''}`}
              draggable={!used}
              onDragStart={e => {
                e.dataTransfer.setData('text/plain', b.value);
                e.dataTransfer.effectAllowed = 'move';
              }}
              onClick={() => { if (!used) setSelected(isSel ? null : b.value); }}
            >
              {bankOptionText(b)}
            </button>
          );
        })}
      </div>
      <div className="summary-box summary-text">
        {group.items.map(it => {
          const ans = ctx.answers[it.q] || '';
          const chip = group.bank.find(b => b.value === ans);
          const ok = ctx.graded ? ctx.isCorrect(it.q) : null;
          return (
            <span key={it.q}>
              {it.before}
              <span className="q">
                <span className="num">{it.q}</span>
                <span
                  className={`drag-slot inline ${ans ? 'filled' : ''} ${ctx.graded ? (ok ? 'correct' : 'wrong') : ''}`}
                  onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add('over'); }}
                  onDragLeave={e => e.currentTarget.classList.remove('over')}
                  onDrop={e => {
                    e.preventDefault();
                    e.currentTarget.classList.remove('over');
                    const v = e.dataTransfer.getData('text/plain');
                    if (v) { ctx.setAnswer(it.q, v); setSelected(null); }
                  }}
                  onClick={() => {
                    if (ans) ctx.setAnswer(it.q, '');
                    else if (selected) { ctx.setAnswer(it.q, selected); setSelected(null); }
                  }}
                >
                  {ans ? (chip ? chip.value : ans) : (selected ? '→' : '——')}
                </span>
              </span>
              {it.after}
              {ctx.graded && !ok && <span className="feedback no" style={{ marginLeft: 4 }}>✗ {ctx.correctLabel(it.q)}</span>}
            </span>
          );
        })}
      </div>
    </>
  );
}

export function QuestionGroup({ group, ctx }) {
  const title = group.title ? <h4 className="section-title">{group.title}</h4> : null;
  const instr = (
    <div className="q-instr">
      {(group.instructions || []).map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: line }} />)}
    </div>
  );

  switch (group.type) {
    case 'gap':
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          {group.image && (
            <div className="diagram-wrap">
              <img src={group.image} alt="Diagram" className="diagram-img" />
            </div>
          )}
          {group.items.map(it => (
            <QRow key={it.q} q={it.q} ctx={ctx}>
              <p>{it.before}<GapInput q={it.q} ctx={ctx} />{it.after}</p>
            </QRow>
          ))}
        </div>
      );

    case 'tfng':
    case 'ynng': {
      const opts = group.type === 'tfng' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : ['YES', 'NO', 'NOT GIVEN'];
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          {group.items.map(it => (
            <QRow key={it.q} q={it.q} ctx={ctx}>
              <p dangerouslySetInnerHTML={{ __html: it.statement }} />
              {opts.map(o => (
                <label key={o} className="opt">
                  <input type="radio" name={`q${it.q}`} value={o} checked={ctx.answers[it.q] === o} onChange={() => ctx.setAnswer(it.q, o)} />
                  <span>{o}</span>
                </label>
              ))}
              {ctx.graded && !ctx.isCorrect(it.q) && <div className="feedback no">✗ Correct: <em>{ctx.correctLabel(it.q)}</em></div>}
            </QRow>
          ))}
        </div>
      );
    }

    case 'mcq':
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          {group.items.map(it => (
            <QRow key={it.q} q={it.q} ctx={ctx}>
              <p>{it.stem}</p>
              {it.options.map(o => (
                <label key={o.value} className="opt">
                  <input type="radio" name={`q${it.q}`} value={o.value} checked={ctx.answers[it.q] === o.value} onChange={() => ctx.setAnswer(it.q, o.value)} />
                  <span className="ltr">{o.value}</span>
                  <span>{o.label}</span>
                </label>
              ))}
              {ctx.graded && !ctx.isCorrect(it.q) && <div className="feedback no">✗ Correct: <em>{ctx.correctLabel(it.q)}</em></div>}
            </QRow>
          ))}
        </div>
      );

    /* Improved checkbox group — tick boxes, only renders options ONCE even when paired */
    case 'checkbox-group': {
      const qs = group.items.map(it => it.q);
      const qLabel = qs.length > 1 ? qs.join(', ') : String(qs[0]);
      const firstOpts = group.items[0].options || [];
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          <div className="q-row">
            <div className="q-num">{qLabel}</div>
            <div className="q-body">
              <p>{group.items[0].stem}</p>
              {firstOpts.map(o => {
                const checked = (ctx.answers[group.group] || []).includes(o.value);
                return (
                  <label key={o.value} className={`opt tick-opt ${checked ? 'ticked' : ''}`}>
                    <input
                      type="checkbox"
                      value={o.value}
                      checked={checked}
                      onChange={() => ctx.toggleGroup(group.group, o.value, 2)}
                    />
                    <span className="tick-box" aria-hidden="true">{checked ? '✓' : ''}</span>
                    <span className="ltr">{o.value}</span>
                    <span>{o.label}</span>
                  </label>
                );
              })}
              {ctx.graded && (
                <div className="feedback-list">
                  {qs.map(q => {
                    const ok = ctx.isCorrect(q);
                    return (
                      <div key={q} className={`feedback-row ${ok ? 'ok' : 'no'}`}>
                        Q{q}: {ok ? '✓ Correct' : `✗ Correct answer: ${ctx.correctLabel(q)}`}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    case 'drag-match':
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          <DragMatch group={group} ctx={ctx} />
        </div>
      );

    case 'matching-table':
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          <div className="optbox">
            <b>{group.boxTitle || 'Options'}</b>
            <div className="optgrid">
              {group.options.map(o => (
                <div key={o.value}>
                  {o.label && o.label !== o.value
                    ? <><strong>{o.value}</strong> {o.label}</>
                    : <strong>{o.value}</strong>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th style={{ width: 44 }}>#</th>
                  <th>Statement</th>
                  {group.options.map(o => <th key={o.value} style={{ width: 36, textAlign: 'center' }}>{o.value}</th>)}
                </tr>
              </thead>
              <tbody>
                {group.items.map(it => {
                  const ok = ctx.graded ? ctx.isCorrect(it.q) : null;
                  return (
                    <tr key={it.q} className={ctx.graded ? (ok ? 'row-correct' : 'row-wrong') : ''}>
                      <td style={{ textAlign: 'center', fontWeight: 700 }}>{it.q}</td>
                      <td>{it.statement}</td>
                      {group.options.map(o => (
                        <td key={o.value} style={{ textAlign: 'center' }}>
                          <input
                            type="radio"
                            name={`q${it.q}`}
                            value={o.value}
                            checked={ctx.answers[it.q] === o.value}
                            onChange={() => ctx.setAnswer(it.q, o.value)}
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {ctx.graded && (
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>
              {group.items.filter(it => !ctx.isCorrect(it.q)).length > 0 && (
                <>Incorrect: {group.items.filter(it => !ctx.isCorrect(it.q)).map(it => `Q${it.q} (${ctx.correctLabel(it.q)})`).join(', ')}</>
              )}
            </div>
          )}
        </div>
      );

    case 'word-bank': {
      if (group.mode === 'drag') {
        return (
          <div className="q-group">
            {title}
            {group.heading && <h3>{group.heading}</h3>}
            {instr}
            <WordBankDrag group={group} ctx={ctx} />
          </div>
        );
      }
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          <div className="word-bank">
            {group.bank.map(b => <span key={b.value} className="word-chip">{bankOptionText(b)}</span>)}
          </div>
          <div className="summary-box">
            {group.items.map(it => {
              const ok = ctx.graded ? ctx.isCorrect(it.q) : null;
              return (
                <span key={it.q}>
                  {it.before}
                  <span className="q">
                    <span className="num">{it.q}</span>
                    <select
                      value={ctx.answers[it.q] || ''}
                      onChange={e => ctx.setAnswer(it.q, e.target.value)}
                      className={ctx.graded ? (ok ? 'is-right' : 'is-wrong') : ''}
                    >
                      <option value="">--</option>
                      {group.bank.map(b => <option key={b.value} value={b.value}>{bankOptionText(b)}</option>)}
                    </select>
                  </span>
                  {it.after}
                </span>
              );
            })}
          </div>
        </div>
      );
    }

    case 'paragraph-match': {
      const bank = group.bank && group.bank.length ? group.bank : paragraphsToBank(group.paragraphs);
      return (
        <div className="q-group">
          {title}
          {group.heading && <h3>{group.heading}</h3>}
          {instr}
          <div className="word-bank">
            {bank.map(b => <span key={b.value} className="word-chip">{bankOptionText(b)}</span>)}
          </div>
          {group.items.map(it => {
            const ok = ctx.graded ? ctx.isCorrect(it.q) : null;
            return (
              <QRow key={it.q} q={it.q} ctx={ctx}>
                <div className="drag-row">
                  <span className="drag-statement">{it.statement}</span>
                  <select
                    value={ctx.answers[it.q] || ''}
                    onChange={e => ctx.setAnswer(it.q, e.target.value)}
                    className={ctx.graded ? (ok ? 'is-right' : 'is-wrong') : ''}
                    aria-label={`Question ${it.q}`}
                  >
                    <option value="">--</option>
                    {bank.map(b => <option key={b.value} value={b.value}>{bankOptionText(b)}</option>)}
                  </select>
                  {ctx.graded && !ok && <span className="feedback no">✗ {ctx.correctLabel(it.q)}</span>}
                </div>
              </QRow>
            );
          })}
        </div>
      );
    }

    default:
      return null;
  }
}
EOF

echo "→ 3/6 Rewriting src/reading/ReadingTest.jsx (resume modal + storageKey)…"
cat > src/reading/ReadingTest.jsx << 'EOF'
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
EOF

echo "→ 4/6 Appending CSS (drag, tick, resume modal, tighter spacing)…"
cat >> src/index.css << 'EOF'

/* ============================================================
   Reading improvements — tighter spacing + new components
   ============================================================ */

/* Tighter spacing */
.q-group { padding-bottom: 8px; margin-bottom: 8px; border-bottom: 1px solid #f1f5f9; }
.q-group:last-child { border-bottom: 0; }
.q-group h3 { margin: 0 0 4px; }
.q-instr { padding: 5px 9px; margin-bottom: 6px; font-size: 12.5px; }
.q-instr p { margin: 0 0 2px; }
.q-instr p:last-child { margin: 0; }
.q-row { padding: 4px 0; gap: 8px; }
.q-body p { margin: 0 0 3px; }
.q-num { flex: 0 0 22px; height: 22px; font-size: 11px; }
.mcq { margin: 4px 0 8px; padding: 2px 0; }
.opt { padding: 3px 6px; margin: 1px 0; }
.notes li { padding: 4px 0; }
.word-bank, .drag-bank { padding: 8px 12px; margin-bottom: 10px; }

/* Section title (e.g. "Synchrony") */
.section-title {
  font-size: 15px;
  font-weight: 800;
  color: var(--brand);
  margin: 12px 0 8px;
  padding-bottom: 4px;
  border-bottom: 2px solid var(--brand);
  letter-spacing: .2px;
}

/* Diagram */
.diagram-wrap {
  text-align: center;
  margin: 10px 0 14px;
  padding: 8px;
  background: #f8fafc;
  border: 1px solid var(--line);
  border-radius: 8px;
}
.diagram-img { max-width: 100%; border-radius: 6px; background: #fff; }

/* Drag & drop */
.drag-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  background: #f8fafc;
  border: 1px dashed var(--line);
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 12px;
}
.drag-chip {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  cursor: grab;
  user-select: none;
  transition: all .12s;
  font-family: inherit;
  max-width: 100%;
  text-align: left;
}
.drag-chip:hover { border-color: var(--brand); background: #f0fdfa; color: var(--brand); }
.drag-chip:active { cursor: grabbing; }
.drag-chip.used { opacity: .35; pointer-events: none; text-decoration: line-through; }
.drag-chip.selected { border-color: var(--brand); background: #ccfbf1; color: var(--brand); box-shadow: 0 0 0 2px #0f766e38; }

.drag-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.drag-statement { flex: 1; min-width: 180px; }

.drag-slot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  min-height: 28px;
  padding: 2px 10px;
  border: 1.5px dashed #cbd5e1;
  border-radius: 6px;
  background: #fff;
  font-size: 13px;
  color: var(--muted);
  cursor: pointer;
  transition: all .12s;
  user-select: none;
  text-align: center;
  vertical-align: middle;
}
.drag-slot:hover { border-color: var(--brand); background: #f0fdfa; }
.drag-slot.over { border-color: var(--brand); background: #ccfbf1; border-style: solid; }
.drag-slot.filled { border-style: solid; border-color: #0ea5e9; background: #e0f2fe; color: #0c4a6e; font-weight: 600; }
.drag-slot.correct { border-color: var(--ok); background: #dcfce7; color: var(--ok); }
.drag-slot.wrong { border-color: #dc2626; background: #fee2e2; color: #dc2626; }
.drag-slot.inline { min-width: 90px; margin: 0 3px; }

.summary-text { line-height: 2.1; }
.summary-text .q { white-space: normal; }

/* Tick checkboxes (for "choose TWO") */
.tick-opt { position: relative; align-items: center; }
.tick-opt input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.tick-box {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e1;
  border-radius: 4px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  transition: all .12s;
}
.tick-opt:hover .tick-box { border-color: var(--brand); }
.tick-opt.ticked .tick-box { background: var(--brand); border-color: var(--brand); color: #fff; }
.tick-opt.ticked { background: #ccfbf1; }

.feedback-list { margin-top: 6px; }
.feedback-row { font-size: 12px; font-weight: 700; padding: 2px 0; }
.feedback-row.ok { color: var(--ok); }
.feedback-row.no { color: #dc2626; }

/* Correct / wrong table rows */
tr.row-correct td { background: #f0fdf4; }
tr.row-wrong td { background: #fef2f2; }

/* Resume modal */
.resume-modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(15, 23, 42, .55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeIn .2s ease-out;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.resume-card {
  background: #fff;
  border-radius: 12px;
  max-width: 460px;
  width: 100%;
  padding: 26px 24px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, .3);
}
.resume-card h3 { margin: 0 0 10px; font-size: 18px; color: var(--ink); }
.resume-card p { margin: 0 0 22px; color: var(--muted); font-size: 14px; line-height: 1.55; }
.resume-card strong { color: var(--brand); font-weight: 800; }
.resume-actions { display: flex; gap: 10px; justify-content: flex-end; }
.resume-actions button {
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  cursor: pointer;
  transition: all .12s;
  font-family: inherit;
}
.resume-actions button:hover { background: #f8fafc; }
.resume-actions .primary { background: var(--brand); color: #fff; border-color: var(--brand); }
.resume-actions .primary:hover { background: var(--brand-dark); border-color: var(--brand-dark); }
EOF

echo "→ 5/6 Updating reading test data files…"

node --input-type=module << 'NODEEOF'
import { writeFileSync } from 'fs';

/* ---------- helper ---------- */
async function loadTest(path) {
  const mod = await import(path + '?t=' + Date.now());
  return mod.default;
}

function saveTest(path, data) {
  writeFileSync(path, 'export default ' + JSON.stringify(data, null, 2) + ';\n');
}

/* ============ TEST 1 ============ */
{
  const p = './src/data/reading/test1.js';
  const data = await loadTest(p);

  // Q14-18: paragraph-match → matching-table
  {
    const s = data.sections[1];
    const idx = s.groups.findIndex(g => g.items && g.items.some(it => it.q === 14));
    if (idx >= 0) {
      s.groups[idx] = {
        type: 'matching-table',
        heading: 'Questions 14–18',
        boxTitle: 'Paragraphs',
        instructions: [
          'The text has eight paragraphs, A–H.',
          'Which paragraph contains the following information?',
          '<em>N.B. You may use any letter more than once.</em>',
        ],
        options: [
          { value: 'A', label: 'A' }, { value: 'B', label: 'B' },
          { value: 'C', label: 'C' }, { value: 'D', label: 'D' },
          { value: 'E', label: 'E' }, { value: 'F', label: 'F' },
          { value: 'G', label: 'G' }, { value: 'H', label: 'H' },
        ],
        items: [
          { q: 14, statement: 'evidence that a significant number of airports provide meeting facilities' },
          { q: 15, statement: 'a statement regarding the fact that no further developments are possible in some areas of airport trade' },
          { q: 16, statement: 'reference to the low level of income that meeting facilities produce for airports' },
          { q: 17, statement: 'mention of the impact of budget airlines on airport income' },
          { q: 18, statement: 'examples of airport premises that might be used for business purposes' },
        ],
      };
    }
  }

  // Q31-34: word-bank → add mode 'drag'
  {
    const s = data.sections[2];
    s.groups.forEach(g => {
      if (g.items && g.items.some(it => it.q === 31)) g.mode = 'drag';
      if (g.items && g.items.some(it => it.q === 35)) g.boxTitle = 'People';
    });
  }

  saveTest(p, data);
  console.log('  ✓ test1.js updated');
}

/* ============ TEST 2 ============ */
{
  const p = './src/data/reading/test2.js';
  const data = await loadTest(p);

  // Q14-19: word-bank → drag-match (headings)
  {
    const s = data.sections[1];
    const idx = s.groups.findIndex(g => g.items && g.items.some(it => it.q === 14));
    if (idx >= 0) {
      s.groups[idx] = {
        type: 'drag-match',
        heading: 'Questions 14–19',
        instructions: [
          'The text has six paragraphs, A–F.',
          'Choose the correct heading for each paragraph from the list of headings below.',
          'Drag a heading onto a paragraph slot (or tap a heading, then tap a slot).',
        ],
        bank: [
          { value: 'i',    label: 'Tackling the issue using a different approach' },
          { value: 'ii',   label: 'A significant improvement on last time' },
          { value: 'iii',  label: 'How robots can save human lives' },
          { value: 'iv',   label: 'Examples of robots at work' },
          { value: 'v',    label: 'Not what it seemed to be' },
          { value: 'vi',   label: 'Why timescales are impossible to predict' },
          { value: 'vii',  label: 'The reason why robots rarely move' },
          { value: 'viii', label: 'Following the pattern of an earlier development' },
        ],
        items: [
          { q: 14, statement: 'Paragraph A' },
          { q: 15, statement: 'Paragraph B' },
          { q: 16, statement: 'Paragraph C' },
          { q: 17, statement: 'Paragraph D' },
          { q: 18, statement: 'Paragraph E' },
          { q: 19, statement: 'Paragraph F' },
        ],
      };
    }
  }

  // Q20-23: add boxTitle
  {
    const s = data.sections[1];
    s.groups.forEach(g => {
      if (g.type === 'matching-table' && g.items && g.items.some(it => it.q === 20)) g.boxTitle = 'People';
    });
  }

  saveTest(p, data);
  console.log('  ✓ test2.js updated');
}

/* ============ TEST 3 ============ */
{
  const p = './src/data/reading/test3.js';
  const data = await loadTest(p);

  // Q7-9: word-bank → mode 'drag'
  {
    const s = data.sections[0];
    s.groups.forEach(g => {
      if (g.items && g.items.some(it => it.q === 7) && g.type === 'word-bank') g.mode = 'drag';
    });
  }

  // Q19-22: add image + fix Q20 order
  {
    const s = data.sections[1];
    s.groups.forEach(g => {
      if (g.items && g.items.some(it => it.q === 19)) {
        g.image = 'https://engnovate.com/wp-content/uploads/2026/04/official-cambridge-guide-to-ielts-academic-reading-test-3-5-diagram-69e20220628ee.jpg';
        const q20 = g.items.find(it => it.q === 20);
        if (q20) { q20.before = ''; q20.after = ' chosen by customer'; }
      }
    });
  }

  // Q33-40: add title 'Synchrony'
  {
    const s = data.sections[2];
    s.groups.forEach(g => {
      if (g.items && g.items.some(it => it.q === 33)) g.title = 'Synchrony';
    });
  }

  saveTest(p, data);
  console.log('  ✓ test3.js updated');
}

/* ============ TEST 4 ============ */
{
  const p = './src/data/reading/test4.js';
  const data = await loadTest(p);

  // Q27-32: paragraph-match → drag-match
  {
    const s = data.sections[2];
    const idx = s.groups.findIndex(g => g.items && g.items.some(it => it.q === 27));
    if (idx >= 0) {
      s.groups[idx] = {
        type: 'drag-match',
        heading: 'Questions 27–32',
        allowReuse: true,
        instructions: [
          'Reading Passage 3 has eight paragraphs, A–H.',
          'Which paragraph contains the following information?',
          '<em>N.B. You may use any letter more than once.</em>',
          'Drag a paragraph letter onto each statement (or tap a letter, then tap a slot).',
        ],
        bank: [
          { value: 'A', label: 'A' }, { value: 'B', label: 'B' },
          { value: 'C', label: 'C' }, { value: 'D', label: 'D' },
          { value: 'E', label: 'E' }, { value: 'F', label: 'F' },
          { value: 'G', label: 'G' }, { value: 'H', label: 'H' },
        ],
        items: [
          { q: 27, statement: 'the claim that the Odyssey and Iliad were not poems in their original form' },
          { q: 28, statement: "a theory involving the reinterpretation of the term 'author'" },
          { q: 29, statement: "references to the fact that little is known about Homer's life" },
          { q: 30, statement: "a comparison between the construction of Homer's poems and another art form" },
          { q: 31, statement: 'examples of the kinds of people employed to recall language' },
          { q: 32, statement: "doubts regarding Homer's apparently inappropriate descriptions" },
        ],
      };
    }
  }

  // Add boxTitle to matching-tables
  {
    const s = data.sections[1];
    s.groups.forEach(g => {
      if (g.type === 'matching-table' && g.items && g.items.some(it => it.q === 22)) g.boxTitle = 'Researchers';
    });
  }

  saveTest(p, data);
  console.log('  ✓ test4.js updated');
}
NODEEOF

echo "→ 6/6 Verifying build…"
npx vite build 2>&1 | tail -15

echo ""
echo "✅ ALL CHANGES APPLIED"
echo ""
echo "What's new:"
echo "  • Test 1 Q14-18: table format (matching-table with A-H columns)"
echo "  • Test 1 Q31-34: drag word into gap"
echo "  • Test 2 Q14-19: drag heading onto paragraph slots"
echo "  • Test 2 Q37-38 & Q39-40: tick-box checkboxes (rendered once, grades both marks)"
echo "  • Test 3 Q7-9: drag ending into gap"
echo "  • Test 3 Q19-22: diagram image + Q20 gap at start"
echo "  • Test 3 Q33-40: 'Synchrony' title"
echo "  • Test 4 Q27-32: drag paragraph letter onto statement"
echo "  • Tighter spacing on every question block"
echo "  • Resume modal on load (asks to resume/start fresh)"
echo "  • beforeunload warning when closing tab with answers"
echo "  • Answers persist to localStorage per test"
echo ""
echo "Run:  npm run dev"