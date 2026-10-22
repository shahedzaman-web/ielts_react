// src/hooks/useVocabStore.js
import { useState, useEffect, useCallback } from 'react';
import { parseSeed, normalizeIncoming, MAX_LEVEL } from '../data/vocab';

const DB_NAME = 'VocabTopicDB';
const DB_VERSION = 2;

let _db = null;
function openDB() {
  if (_db) return Promise.resolve(_db);
  return new Promise((res, rej) => {
    let r;
    try { r = indexedDB.open(DB_NAME, DB_VERSION); }
    catch (e) { rej(e); return; }
    r.onupgradeneeded = e => {
      const db = e.target.result;
      if (db.objectStoreNames.contains('words')) db.deleteObjectStore('words');
      if (db.objectStoreNames.contains('settings')) db.deleteObjectStore('settings');
      if (db.objectStoreNames.contains('history')) db.deleteObjectStore('history');
      const s = db.createObjectStore('words', { keyPath: 'id', autoIncrement: true });
      s.createIndex('word', 'word', { unique: true });
      s.createIndex('topic', 'topic');
      db.createObjectStore('settings', { keyPath: 'key' });
      db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
    };
    r.onsuccess = () => { _db = r.result; res(_db); };
    r.onerror = () => rej(r.error);
  });
}

const tx = (store, mode) => openDB().then(db => db.transaction(store, mode).objectStore(store));
const dbAll = store => tx(store, 'readonly').then(s => new Promise((res, rej) => { const r = s.getAll(); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }));
const dbPut = (store, obj) => tx(store, 'readwrite').then(s => new Promise((res, rej) => { const r = s.put(obj); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }));
const dbAdd = (store, obj) => tx(store, 'readwrite').then(s => new Promise((res, rej) => { const r = s.add(obj); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }));
const dbDel = (store, id) => tx(store, 'readwrite').then(s => new Promise((res, rej) => { const r = s.delete(id); r.onsuccess = () => res(); r.onerror = () => rej(r.error); }));
const dbClear = store => tx(store, 'readwrite').then(s => new Promise((res, rej) => { const r = s.clear(); r.onsuccess = () => res(); r.onerror = () => rej(r.error); }));

function readLegacyLocalStorage() {
  const out = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !/vocab/i.test(k)) continue;
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      let d;
      try { d = JSON.parse(raw); } catch (_) { continue; }
      if (Array.isArray(d)) out.push(...d);
      else if (d && Array.isArray(d.words)) out.push(...d.words);
      else if (d && d.word) out.push(d);
    }
  } catch (_) {}
  return out;
}

const norm = s => String(s == null ? '' : s).trim().toLowerCase().replace(/\s+/g, ' ');

export function useVocabStore() {
  const [words, setWords] = useState([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);

  // ---------- initialise ----------
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await openDB();
        let existing = await dbAll('words');

        if (existing.length === 0) {
          // try to migrate legacy localStorage data first
          const legacy = readLegacyLocalStorage().map(normalizeIncoming).filter(Boolean);
          if (legacy.length) {
            const seen = new Set();
            for (const w of legacy) {
              const key = norm(w.word);
              if (seen.has(key)) continue;
              seen.add(key);
              await dbAdd('words', w).catch(() => {});
            }
          } else {
            const seed = parseSeed();
            for (const w of seed) {
              await dbAdd('words', w).catch(() => {});
            }
          }
          existing = await dbAll('words');
        }

        // normalize fields + legacy "already know" migration
        for (const w of existing) {
          w.level = Math.max(0, Math.min(MAX_LEVEL, Math.floor(Number(w.level) || 0)));
          w.reviews = Math.max(0, Math.floor(Number(w.reviews) || 0));
          w.hard = Math.max(0, Math.floor(Number(w.hard) || 0));
          w.good = Math.max(0, Math.floor(Number(w.good) || 0));
          w.easy = Math.max(0, Math.floor(Number(w.easy) || 0));
          w.known = Math.max(0, Math.floor(Number(w.known) || 0));
          if (!w.topic) w.topic = 'every';
          if (w.known === 0 && w.level >= MAX_LEVEL && w.reviews === 1 && w.easy === 1 && w.hard === 0 && w.good === 0) {
            w.known = 1;
            try { await dbPut('words', w); } catch (_) {}
          }
        }
        existing.sort((a, b) => a.id - b.id);
        if (cancelled) return;
        setWords(existing);

        const settings = await dbAll('settings').catch(() => []);
        const st = settings.find(s => s.key === 'streak');
        if (st && !cancelled) setStreak(st.value || 0);
      } catch (e) {
        if (cancelled) return;
        // in-memory fallback
        setFallback(true);
        const seed = parseSeed().map((w, i) => ({ ...w, id: i + 1 }));
        setWords(seed);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // ---------- actions ----------
  const updateWord = useCallback(async (word) => {
    setWords(prev => prev.map(w => w.id === word.id ? word : w));
    try { await dbPut('words', word); } catch (_) {}
  }, []);

  const updateStreak = useCallback((valueOrUpdater) => {
    setStreak(prev => {
      const next = typeof valueOrUpdater === 'function' ? valueOrUpdater(prev) : valueOrUpdater;
      dbPut('settings', { key: 'streak', value: next }).catch(() => {});
      return next;
    });
  }, []);

  const addWord = useCallback(async (word) => {
    try {
      const id = await dbAdd('words', word);
      const added = { ...word, id };
      setWords(prev => [...prev, added]);
      return added;
    } catch (e) {
      // if add fails, fall back to in-memory (still user-usable)
      const id = Date.now();
      const added = { ...word, id };
      setWords(prev => [...prev, added]);
      return added;
    }
  }, []);

  const deleteWord = useCallback(async (id) => {
    setWords(prev => prev.filter(w => w.id !== id));
    try { await dbDel('words', id); } catch (_) {}
  }, []);

  const logSession = useCallback(async (session) => {
    try { await dbAdd('history', session); } catch (_) {}
  }, []);

  const getHistory = useCallback(async () => {
    try { return await dbAll('history'); } catch (_) { return []; }
  }, []);

  // ---------- export / import ----------
  const exportData = useCallback(async () => {
    let history = [];
    try { history = await dbAll('history'); } catch (_) {}
    return {
      app: 'vocab-topic',
      version: 2,
      exportedAt: new Date().toISOString(),
      streak,
      words: words.map(w => ({
        word: w.word, pos: w.pos || '', bangla: w.bangla || '',
        definition: w.definition || '', example: w.example || '',
        synonyms: w.synonyms || '', topic: w.topic || 'every',
        level: w.level || 0, reviews: w.reviews || 0,
        hard: w.hard || 0, good: w.good || 0, easy: w.easy || 0, known: w.known || 0,
        createdAt: w.createdAt || Date.now(), lastReviewed: w.lastReviewed || 0,
      })),
      history: history.map(h => ({
        label: h.label || 'Session', reviewed: h.reviewed || 0, total: h.total || 0,
        hard: h.hard || 0, good: h.good || 0, easy: h.easy || 0, known: h.known || 0,
        duration: h.duration || 0, ts: h.ts || Date.now(),
      })),
    };
  }, [words, streak]);

  const importData = useCallback(async (data, replace) => {
    // accept: array, { words: [...] }, or full backup object
    const incomingRaw = Array.isArray(data) ? data : (data.words || []);
    const incoming = incomingRaw.map(normalizeIncoming).filter(Boolean);
    if (!incoming.length) return { added: 0, skipped: 0 };

    if (replace) {
      try { await dbClear('words'); await dbClear('history'); } catch (_) {}
      setWords([]);
      setStreak(0);
    }

    const existingBefore = replace ? [] : words;
    const seen = new Set(existingBefore.map(w => norm(w.word)));
    let added = 0, skipped = 0;

    for (const obj of incoming) {
      if (seen.has(norm(obj.word))) { skipped++; continue; }
      seen.add(norm(obj.word));
      try {
        await dbAdd('words', obj);
        added++;
      } catch (_) { skipped++; }
    }

    if (Array.isArray(data.history) && data.history.length) {
      let existingH = replace ? [] : (await dbAll('history').catch(() => []));
      const seenH = new Set(existingH.map(h => (h.ts || 0) + '|' + (h.label || '')));
      for (const h of data.history) {
        const key = (h.ts || 0) + '|' + (h.label || '');
        if (seenH.has(key)) continue;
        seenH.add(key);
        await dbAdd('history', {
          label: h.label || 'Session', reviewed: h.reviewed || 0, total: h.total || 0,
          hard: h.hard || 0, good: h.good || 0, easy: h.easy || 0, known: h.known || 0,
          duration: h.duration || 0, ts: h.ts || Date.now(),
        }).catch(() => {});
      }
    }

    if (Number(data.streak) > 0) {
      updateStreak(prev => Math.max(prev, Number(data.streak) || 0));
    }

    const reloaded = await dbAll('words').catch(() => []);
    reloaded.sort((a, b) => a.id - b.id);
    setWords(reloaded);
    return { added, skipped };
  }, [words, updateStreak]);

  const resetAll = useCallback(async () => {
    try { await dbClear('words'); await dbClear('settings'); await dbClear('history'); } catch (_) {}
    const seed = parseSeed();
    for (const w of seed) {
      await dbAdd('words', w).catch(() => {});
    }
    const reloaded = await dbAll('words').catch(() => []);
    reloaded.sort((a, b) => a.id - b.id);
    setWords(reloaded);
    setStreak(0);
  }, []);

  return {
    words, streak, loading, fallback,
    updateWord, updateStreak, addWord, deleteWord,
    logSession, getHistory,
    exportData, importData, resetAll,
  };
}