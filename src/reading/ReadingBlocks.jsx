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
    <>
      <div className="q-instr">
        {(group.instructions || []).map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: line }} />)}
      </div>
    
    </>

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
                  {it.before}  asdsdas
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
