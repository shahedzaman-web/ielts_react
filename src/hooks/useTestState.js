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

  // ── defensive lookup: an entry may omit `correct` if its sibling has it ──
  const checkboxCorrect = useCallback((q) => {
    const entry = CHECKBOX[q];
    if (!entry) return [];
    if (Array.isArray(entry.correct)) return entry.correct;
    for (const k in CHECKBOX) {
      const o = CHECKBOX[k];
      if (o && o.name === entry.name && Array.isArray(o.correct)) return o.correct;
    }
    return [];
  }, [CHECKBOX]);

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
      const c = [...checkboxCorrect(q)].sort();
      if (c.length === 0) return false;                 // no key yet → not correct
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
  }, [getUserAnswer, KEY, CHECKBOX, PAIRED, checkboxCorrect]);

  const correctLabel = useCallback((q) => {
    if (CHECKBOX[q]) return checkboxCorrect(q).join(', ');
    if (PAIRED[q]) return KEY[q].map(v => String(v).toUpperCase()).join(', ');
    return (KEY[q] || [])[0] || '';
  }, [KEY, CHECKBOX, PAIRED, checkboxCorrect]);

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