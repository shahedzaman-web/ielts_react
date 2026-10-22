import { useEffect, useRef, useState, useCallback } from 'react';
export function useHighlight(containerRefs, storeKey) {
  const [savedRanges, setSavedRanges] = useState({});
  const [bar, setBar] = useState({ visible: false, top: 0, left: 0 });
  const savedRangeRef = useRef(null), savedNodeRef = useRef(null);
  const textNodes = useCallback(root => { const out = []; const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) if (n.nodeValue?.length) out.push(n); return out; }, []);
  const buildMap = c => { const m = new Map(); let p = 0; for (const n of textNodes(c)) { m.set(n, p); p += n.nodeValue.length; } return m; };
  const unwrap = c => { c.querySelectorAll('mark.hl').forEach(m => { const p = m.parentNode; if (!p) return; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); }); c.normalize?.(); };
  const markOffs = c => { const map = buildMap(c), res = []; c.querySelectorAll('mark.hl').forEach(m => { const inner = textNodes(m); if (!inner.length) return; const s = map.get(inner[0]), e = map.get(inner[inner.length-1]); if (s == null || e == null) return; res.push([s, e + inner[inner.length-1].nodeValue.length]); }); return res; };
  const wrap = (c, start, end) => { const nodes = textNodes(c); let pos = 0; const segs = []; for (const n of nodes) { const len = n.nodeValue.length; const s = Math.max(start, pos), e = Math.min(end, pos + len); if (e > s) segs.push([n, s-pos, e-pos]); pos += len; if (pos >= end) break; } segs.forEach(([node, so, eo]) => { const r = document.createRange(); try { r.setStart(node, so); r.setEnd(node, eo); const m = document.createElement('mark'); m.className = 'hl'; r.surroundContents(m); } catch {} }); };
  const rangeToOffs = (c, range) => { const nodes = textNodes(c); let pos = 0, s = null, e = null; for (const n of nodes) { if (n === range.startContainer) s = pos + range.startOffset; if (n === range.endContainer) e = pos + range.endOffset; pos += n.nodeValue.length; } return s == null || e == null || e <= s ? null : [s, e]; };
  const save = c => { if (!c.dataset.hlId) return; setSavedRanges(prev => ({ ...prev, [c.dataset.hlId]: markOffs(c) })); };
  const applyAll = useCallback(() => { containerRefs.current.forEach(c => { if (!c?.dataset?.hlId) return; const offs = savedRanges[c.dataset.hlId]; if (offs?.length) { unwrap(c); offs.slice().sort((a,b) => b[0]-a[0]).forEach(([s,e]) => wrap(c,s,e)); } }); }, [savedRanges, containerRefs]);
  useEffect(() => { applyAll(); }, [applyAll]);
  useEffect(() => { if (!storeKey) return; try { const raw = localStorage.getItem(storeKey); if (raw) setSavedRanges(JSON.parse(raw)); } catch {} }, [storeKey]);
  useEffect(() => { if (!storeKey) return; try { localStorage.setItem(storeKey, JSON.stringify(savedRanges)); } catch {} }, [savedRanges, storeKey]);
  const hide = () => setBar(b => ({ ...b, visible: false }));
  const handleMouseUp = e => { if (e.target.closest('#hlBar')) return; setTimeout(() => { const sel = window.getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) { hide(); return; } const range = sel.getRangeAt(0); let c = null; containerRefs.current.forEach(x => { if (x && x.contains(range.commonAncestorContainer)) c = x; }); if (!c) { hide(); return; } const rect = range.getBoundingClientRect(); if (!rect.width && !rect.height) { hide(); return; } savedRangeRef.current = range.cloneRange(); savedNodeRef.current = c; setBar({ visible: true, top: rect.top + window.scrollY - 10, left: rect.left + rect.width / 2 + window.scrollX }); }, 10); };
  const applyHighlight = () => { const c = savedNodeRef.current, r = savedRangeRef.current; if (!c || !r) return; const offs = rangeToOffs(c, r); if (!offs) return; const existing = markOffs(c); existing.push(offs); unwrap(c); existing.slice().sort((a,b) => b[0]-a[0]).forEach(([s,e]) => wrap(c,s,e)); save(c); window.getSelection()?.removeAllRanges(); hide(); };
  const clearAll = () => { containerRefs.current.forEach(c => c && unwrap(c)); setSavedRanges({}); hide(); };
  return { bar, handleMouseUp, applyHighlight, clearAll, hide };
}
