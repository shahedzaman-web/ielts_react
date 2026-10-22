import { Fragment, useState } from 'react';

/* ============ STYLES (injected once per block) ============ */
const DND_STYLES = `
.dnd-bank{display:flex;flex-wrap:wrap;gap:8px 10px;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;padding:12px 14px;margin:6px 0 16px}
.dnd-card{background:#fff;border:1px solid #cbd5e1;border-radius:999px;padding:6px 16px;font-size:14px;cursor:grab;user-select:none;transition:.15s;color:#1e293b;font-family:inherit}
.dnd-card:hover:not(.dnd-used):not(.dnd-selected){border-color:#0f766e;background:#f0fdfa}
.dnd-card.dnd-selected{background:#0f766e;color:#fff;border-color:#0f766e}
.dnd-card.dnd-used{opacity:.35;cursor:not-allowed;text-decoration:line-through;pointer-events:none;background:#f1f5f9}
.dnd-slot{display:inline-flex;align-items:center;justify-content:center;min-width:150px;min-height:32px;padding:3px 12px;border:1px dashed #94a3b8;border-radius:6px;background:#fff;font-size:14px;cursor:pointer;color:#94a3b8;vertical-align:middle;margin:0 4px;transition:.15s;outline:none;font-family:inherit}
.dnd-slot:hover{border-color:#0f766e}
.dnd-slot:focus{box-shadow:0 0 0 2px #bfdbfe}
.dnd-slot.dnd-filled{border-style:solid;background:#e0f2fe;color:#0c4a6e;font-weight:600}
.dnd-slot.dnd-over{border-color:#0f766e;background:#ccfbf1;border-style:solid}
.dnd-slot.dnd-correct{border-color:#16a34a;background:#dcfce7;color:#16a34a;font-weight:600}
.dnd-slot.dnd-wrong{border-color:#dc2626;background:#fee2e2;color:#dc2626;font-weight:600}
`;

function Styles() {
  return <style dangerouslySetInnerHTML={{ __html: DND_STYLES }} />;
}

/* ============ LABEL CLEANING ============
   Strips any "A. " / "A) " / "A - " / "A: " prefix so chips and slots
   always show the raw word, never the letter.                       */
function cleanLabel(opt) {
  if (opt == null) return '';
  let text =
    opt.label != null && opt.label !== opt.value
      ? String(opt.label)
      : String(opt.value ?? '');
  text = text.replace(/^[A-Za-z][.):\-]\s*/, ''); // strip "A. " "A) " "A- "
  text = text.replace(/^[A-Za-z]\s+/, '');         // strip "A "
  return text.trim();
}

function normalizeBank(bank) {
  return (bank || []).map(b =>
    typeof b === 'string' ? { value: b, label: b } : b
  );
}

function itemText(it) {
  if (!it) return '';
  return it.statement ?? it.label ?? it.text ?? '';
}

/* ============ BANK OF CHIPS ============ */
function DragBank({ bank, answers, allowReuse, selected, onPick }) {
  const usedValues = new Set();
  if (!allowReuse) {
    Object.values(answers || {}).forEach(v => {
      if (v) usedValues.add(v);
    });
  }
  return (
    <div className="dnd-bank">
      {bank.map(b => {
        const isUsed = !allowReuse && usedValues.has(b.value);
        const isSelected = selected === b.value;
        return (
          <div
            key={b.value}
            className={`dnd-card ${isUsed ? 'dnd-used' : ''} ${isSelected ? 'dnd-selected' : ''}`}
            draggable={!isUsed}
            onDragStart={e => {
              e.dataTransfer.setData('text/plain', b.value);
              e.dataTransfer.effectAllowed = 'move';
            }}
            onClick={() => !isUsed && onPick(isSelected ? null : b.value)}
            role="button"
            tabIndex={isUsed ? -1 : 0}
            aria-disabled={isUsed}
          >
            {cleanLabel(b)}
          </div>
        );
      })}
    </div>
  );
}

/* ============ ONE DROP SLOT ============ */
function DropSlot({ q, answers, bank, selected, graded, isCorrect, correctLabel, onDrop, onClear }) {
  const ans = answers[q] || '';
  const chip = bank.find(b => b.value === ans);
  const ok = graded ? isCorrect(q) : null;

  const displayText = ans
    ? (chip ? cleanLabel(chip) : ans)   // <-- show full word, never letter
    : (selected ? '→ Click to place' : 'Drop answer here');

  const cls = [
    'dnd-slot',
    ans ? 'dnd-filled' : '',
    graded ? (ok ? 'dnd-correct' : 'dnd-wrong') : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <span
        className={cls}
        tabIndex={0}
        role="button"
        aria-label={`Question ${q}`}
        data-q={q}
        onDragOver={e => {
          e.preventDefault();
          e.currentTarget.classList.add('dnd-over');
        }}
        onDragLeave={e => e.currentTarget.classList.remove('dnd-over')}
        onDrop={e => {
          e.preventDefault();
          e.currentTarget.classList.remove('dnd-over');
          const v = e.dataTransfer.getData('text/plain');
          if (v) onDrop(q, v);
        }}
        onClick={() => {
          if (ans) onClear(q);
          else if (selected) onDrop(q, selected);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (ans) onClear(q);
            else if (selected) onDrop(q, selected);
          }
        }}
      >
        {displayText}
      </span>
      {graded && !ok && <span className="feedback no"> ✗ {correctLabel(q)}</span>}
      {graded && ok && <span className="feedback ok"> ✓</span>}
    </>
  );
}

/* ============ BLOCK: bank of chips + one slot per item (list view) ============ */
function DragMatchBlock({ block, ctx }) {
  const [selected, setSelected] = useState(null);
  const bank = normalizeBank(block.bank || block.options);
  const items = block.items || [];
  const allowReuse = block.allowReuse === true;

  return (
    <>
      <Styles />
      <DragBank
        bank={bank}
        answers={ctx.answers}
        allowReuse={allowReuse}
        selected={selected}
        onPick={setSelected}
      />
      <ul className="notes">
        {items.map(it => (
          <li key={it.q}>
            <span className="num">{it.q}</span>
            <span>{itemText(it)} </span>
            <DropSlot
              q={it.q}
              answers={ctx.answers}
              bank={bank}
              selected={selected}
              graded={ctx.graded}
              isCorrect={ctx.isCorrect}
              correctLabel={ctx.correctLabel}
              onDrop={(q, v) => { ctx.setAnswer(q, v); setSelected(null); }}
              onClear={q => ctx.setAnswer(q, '')}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

/* ============ BLOCK: bank + inline slots in flowing text ============ */
function WordBankDragBlock({ block, ctx }) {
  const [selected, setSelected] = useState(null);
  const bank = normalizeBank(block.bank);
  const items = block.items || [];
  const allowReuse = block.allowReuse === true;

  return (
    <>
      <Styles />
      <DragBank
        bank={bank}
        answers={ctx.answers}
        allowReuse={allowReuse}
        selected={selected}
        onPick={setSelected}
      />
      <div className="summary-box summary-text">
        {items.map(it => (
          <span key={it.q}>
            {it.before}
            <span className="q">
              <span className="num">{it.q}</span>
              <DropSlot
                q={it.q}
                answers={ctx.answers}
                bank={bank}
                selected={selected}
                graded={ctx.graded}
                isCorrect={ctx.isCorrect}
                correctLabel={ctx.correctLabel}
                onDrop={(q, v) => { ctx.setAnswer(q, v); setSelected(null); }}
                onClear={q => ctx.setAnswer(q, '')}
              />
            </span>
            {it.after}
            {ctx.graded && !ctx.isCorrect(it.q) && (
              <span className="feedback no" style={{ marginLeft: 4 }}>
                ✗ {ctx.correctLabel(it.q)}
              </span>
            )}
            {ctx.graded && ctx.isCorrect(it.q) && <span className="feedback ok"> ✓</span>}
          </span>
        ))}
      </div>
    </>
  );
}

/* ============ ORIGINAL PRIMITIVES (unchanged) ============ */
function QInput({ q, ctx, width }) {
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
        style={width ? { minWidth: width } : undefined}
        aria-label={`Question ${q}`}
      />
      {ctx.graded && !ok && <span className="feedback no">✗ <em>{ctx.correctLabel(q)}</em></span>}
      {ctx.graded && ok && <span className="feedback ok">✓</span>}
    </span>
  );
}

function renderParts(parts, ctx) {
  return parts.map((p, i) => {
    if (typeof p === 'string') return <Fragment key={i}>{p}</Fragment>;
    if (p.q != null) return <QInput key={i} q={p.q} ctx={ctx} width={p.w} />;
    if (p.b) return <strong key={i}>{p.b}</strong>;
    if (p.em) return <em key={i}>{p.em}</em>;
    return null;
  });
}

/* ============ ROUTER — select-match now defaults to drag ============ */
export function ListeningBlock({ block, ctx }) {
  switch (block.type) {
    case 'text':
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'title':
      return <p style={{ fontWeight: 700, margin: '6px 0 12px' }}>{block.text}</p>;
    case 'subtitle':
      return <p style={{ margin: '6px 0' }} dangerouslySetInnerHTML={{ __html: block.html }} />;
    case 'notes':
      return (
        <ul className="notes">
          {block.items.map((parts, i) => <li key={i}>{renderParts(parts, ctx)}</li>)}
        </ul>
      );
    case 'table':
      return (
        <table>
          <thead>
            <tr>{block.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>
                    {Array.isArray(cell) ? renderParts(cell, ctx) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case 'mcq':
      return <MCQ q={block.q} stem={block.stem} options={block.options} ctx={ctx} />;
    case 'checkbox':
      return (
        <CheckboxMCQ
          q={block.q}
          group={block.group}
          stem={block.stem}
          options={block.options}
          max={block.max || 2}
          ctx={ctx}
        />
      );

    /* === select-match: drag by default (bank of chips + slots per item) === */
    case 'select-match': {
      if (block.mode === 'select') {
        return <SelectMatch options={block.options} items={block.items} ctx={ctx} />;
      }
      return (
        <DragMatchBlock
          block={{
            bank: normalizeBank(block.options),
            items: (block.items || []).map(it => ({
              q: it.q,
              statement: it.label ?? it.statement ?? '',
            })),
            allowReuse: block.allowReuse === true,  // default: chips disable when used
          }}
          ctx={ctx}
        />
      );
    }

    case 'drag-match':
      return <DragMatchBlock block={block} ctx={ctx} />;

    case 'word-bank':
      if (block.mode === 'drag') return <WordBankDragBlock block={block} ctx={ctx} />;
      return <SelectMatch options={normalizeBank(block.bank)} items={block.items || []} ctx={ctx} />;

    case 'html':
      return <div dangerouslySetInnerHTML={{ __html: block.html }} />;
    default:
      return null;
  }
}

/* ============ UNCHANGED BLOCKS ============ */
function MCQ({ q, stem, options, ctx }) {
  const ok = ctx.graded ? ctx.isCorrect(q) : null;
  const selected = ctx.answers[q];
  const key = ctx.KEY[q]?.[0];
  return (
    <div className="mcq">
      <div className="stem">
        <span className="num">{q}</span>
        {stem}
        {ctx.graded && !ok && <span className="feedback no">✗ <em>{ctx.correctLabel(q)}</em></span>}
        {ctx.graded && ok && <span className="feedback ok">✓</span>}
      </div>
      {options.map(o => (
        <label
          key={o.value}
          className={`opt ${ctx.graded && selected === o.value ? (ok ? 'picked-ok' : 'picked-no') : ''} ${ctx.graded && o.value === key ? 'key' : ''}`}
        >
          <input
            type="radio"
            name={`q${q}`}
            value={o.value}
            checked={selected === o.value}
            onChange={() => ctx.setAnswer(q, o.value)}
          />
          <span className="ltr">{o.value}</span>
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
}

function CheckboxMCQ({ q, group, stem, options, max, ctx }) {
  const arr = ctx.answers[group] || [];
  const ok = ctx.graded ? ctx.isCorrect(q) : null;
  const key = ctx.CHECKBOX[q]?.correct || [];
  return (
    <div className="mcq">
      <div className="stem">
        <span className="num">{q}</span>
        {stem}
        {ctx.graded && !ok && <span className="feedback no">✗ <em>{ctx.correctLabel(q)}</em></span>}
        {ctx.graded && ok && <span className="feedback ok">✓</span>}
      </div>
      {options.map(o => (
        <label
          key={o.value}
          className={`opt ${arr.includes(o.value) ? 'picked-ok' : ''} ${ctx.graded && key.includes(o.value) ? 'key' : ''}`}
        >
          <input
            type="checkbox"
            value={o.value}
            checked={arr.includes(o.value)}
            onChange={() => ctx.toggleGroup(group, o.value, max)}
          />
          <span className="ltr">{o.value}</span>
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
}

function SelectMatch({ options, items, ctx }) {
  return (
    <ul className="notes">
      {items.map(it => {
        const val = ctx.answers[it.q] ?? '';
        const ok = ctx.graded ? ctx.isCorrect(it.q) : null;
        return (
          <li key={it.q}>
            <span>{itemText(it)} </span>
            <span className="num">{it.q}</span>
            <select
              value={val}
              onChange={e => ctx.setAnswer(it.q, e.target.value)}
              className={ctx.graded ? (ok ? 'is-right' : 'is-wrong') : ''}
              aria-label={`Question ${it.q}`}
            >
              <option value="">--</option>
              {normalizeBank(options).map(o => (
                <option key={o.value} value={o.value}>{cleanLabel(o)}</option>
              ))}
            </select>
            {ctx.graded && !ok && <span className="feedback no">✗ <em>{ctx.correctLabel(it.q)}</em></span>}
            {ctx.graded && ok && <span className="feedback ok">✓</span>}
          </li>
        );
      })}
    </ul>
  );
}