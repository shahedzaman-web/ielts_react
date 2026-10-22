// src/vocab/VocabPage.jsx
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useVocabStore } from '../hooks/useVocabStore';
import {
  TOPICS, topicInfo, MAX_LEVEL, DECK_SIZE,
  isMastered, isNew, isLearning, difficulty,
} from '../data/vocab';
import Flashcard from './Flashcard';

const norm = s => String(s == null ? '' : s).trim().toLowerCase().replace(/\s+/g, ' ');

function speak(text, rate = 0.95) {
  if (!window.speechSynthesis || !text) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB';
    u.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const v = voices.find(x => /en-GB/i.test(x.lang)) || voices.find(x => /^en/i.test(x.lang));
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  } catch (_) {}
}

function shuffle(a) {
  const x = a.slice();
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

export default function VocabPage() {
  const store = useVocabStore();
  const [view, setView] = useState('practice');
  const [session, setSession] = useState(null);
  const [summary, setSummary] = useState(null);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const fileInputRef = useRef(null);

  const showToast = useCallback((msg, kind = '') => {
    clearTimeout(toastTimer.current);
    setToast({ msg, kind });
    toastTimer.current = setTimeout(() => setToast(null), 2000);
  }, []);

  // ---------------- counts ----------------
  const counts = useMemo(() => {
    let total = 0, mastered = 0, learning = 0, fresh = 0, hardTotal = 0, reviewTotal = 0, knownTotal = 0;
    for (const w of store.words) {
      total++;
      reviewTotal += Number(w.reviews) || 0;
      hardTotal += Number(w.hard) || 0;
      knownTotal += Number(w.known) || 0;
      if (isMastered(w)) mastered++;
      else if (isNew(w)) fresh++;
      else learning++;
    }
    return {
      total, mastered, learning, fresh, hardTotal, reviewTotal, knownTotal,
      masteredPct: total ? Math.round((mastered / total) * 100) : 0,
    };
  }, [store.words]);

  // ---------------- session start ----------------
  const buildPool = useCallback((mode) => {
    const inDeck = (w, i) => Math.floor(i / DECK_SIZE) === mode.deck;
    const inTopic = (w) => (w.topic || 'every') === mode.topic;
    switch (mode.type) {
      case 'new':           return store.words.filter(isNew);
      case 'learning':      return store.words.filter(isLearning).sort((a, b) => difficulty(b) - difficulty(a));
      case 'mastered':      return store.words.filter(isMastered);
      case 'all':           return store.words.slice();
      case 'deck-new':      return store.words.filter((w, i) => inDeck(w, i) && isNew(w));
      case 'deck-learning': return store.words.filter((w, i) => inDeck(w, i) && isLearning(w)).sort((a, b) => difficulty(b) - difficulty(a));
      case 'deck-mastered': return store.words.filter((w, i) => inDeck(w, i) && isMastered(w));
      case 'deck-all':      return store.words.filter((w, i) => inDeck(w, i));
      case 'topic-all':     return store.words.filter(inTopic);
      case 'topic-easy':    return store.words.filter(w => inTopic(w) && (Number(w.easy) || 0) > 0);
      case 'topic-good':    return store.words.filter(w => inTopic(w) && (Number(w.good) || 0) > 0);
      case 'topic-hard':    return store.words.filter(w => inTopic(w) && (Number(w.hard) || 0) > 0);
      case 'topic-known':   return store.words.filter(w => inTopic(w) && (Number(w.known) || 0) > 0);
      case 'repeat':        return store.words.filter(w => Array.isArray(mode.ids) && mode.ids.includes(w.id));
      default: return [];
    }
  }, [store.words]);

  const startSession = useCallback((mode) => {
    const pool = buildPool(mode);
    if (!pool.length) { showToast('Nothing to practise here 🎉', 'ok'); return; }
    const order = shuffle(pool.map(w => w.id));
    setSession({
      mode, label: mode.label || 'Practice',
      pool: order.slice(), order, pos: 0,
      reviewed: new Set(),
      ratings: { hard: 0, good: 0, easy: 0, known: 0 },
      start: Date.now(),
    });
    setSummary(null);
  }, [buildPool, showToast]);

  const currentWord = useMemo(() => {
    if (!session) return null;
    const id = session.order[session.pos];
    return store.words.find(w => w.id === id) || null;
  }, [session, store.words]);

  const alreadyRated = !!(session && currentWord && session.reviewed.has(currentWord.id));

  // speak when the current word changes
  useEffect(() => {
    if (currentWord) speak(currentWord.word);
  }, [currentWord?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------------- navigation ----------------
  const nextCard = useCallback(() => {
    setSession(prev => {
      if (!prev) return prev;
      let p = prev.pos + 1;
      while (p < prev.order.length && prev.reviewed.has(prev.order[p])) p++;
      if (p >= prev.order.length) {
        const idx = prev.order.findIndex(id => !prev.reviewed.has(id));
        if (idx === -1) return prev; // will be handled in rateWord
        p = idx;
      }
      return { ...prev, pos: p };
    });
  }, []);

  const prevCard = useCallback(() => {
    setSession(prev => {
      if (!prev) return prev;
      if (prev.pos <= 0) { showToast('Already at the first card'); return prev; }
      return { ...prev, pos: prev.pos - 1 };
    });
  }, [showToast]);

  // ---------------- rating ----------------
  const rateWord = useCallback((rating) => {
    setSession(prev => {
      if (!prev) return prev;
      const id = prev.order[prev.pos];
      if (prev.reviewed.has(id)) { showToast('Already rated — swipe / → for next', 'err'); return prev; }
      const word = store.words.find(w => w.id === id);
      if (!word) return prev;

      const before = word.level || 0;
      let after = before;
      const updated = { ...word };
      const ratings = { ...prev.ratings };

      if (rating === 'hard') {
        after = Math.max(0, before - 1);
        updated.hard = (word.hard || 0) + 1;
        ratings.hard++;
        store.updateStreak(0);
      } else if (rating === 'good') {
        after = Math.min(MAX_LEVEL, before + 1);
        updated.good = (word.good || 0) + 1;
        ratings.good++;
        store.updateStreak(s => s + 1);
      } else if (rating === 'easy') {
        after = Math.min(MAX_LEVEL, before + 2);
        updated.easy = (word.easy || 0) + 1;
        ratings.easy++;
        store.updateStreak(s => s + 1);
      } else if (rating === 'know') {
        after = MAX_LEVEL;
        updated.known = (word.known || 0) + 1;
        ratings.known++;
      } else {
        return prev;
      }
      updated.level = after;
      updated.reviews = (word.reviews || 0) + 1;
      updated.lastReviewed = Date.now();
      store.updateWord(updated);

      const reviewed = new Set(prev.reviewed);
      reviewed.add(id);

      // advance to next unreviewed
      let p = prev.pos + 1;
      while (p < prev.order.length && reviewed.has(prev.order[p])) p++;
      let finished = false;
      if (p >= prev.order.length) {
        const idx = prev.order.findIndex(x => !reviewed.has(x));
        if (idx === -1) finished = true;
        else p = idx;
      }

      if (finished) {
        const elapsed = Math.round((Date.now() - prev.start) / 1000);
        const total = reviewed.size;
        const { easy, good, hard, known } = ratings;
        const quality = total ? Math.round(((easy + known + good * 0.7) / total) * 100) : 0;
        const summary = {
          label: prev.label, duration: elapsed, total,
          easy, good, hard, known, quality,
        };
        store.logSession({
          label: prev.label, reviewed: total, total: prev.pool.length,
          hard: ratings.hard, good: ratings.good, easy: ratings.easy, known: ratings.known,
          duration: elapsed, ts: Date.now(),
        });
        setTimeout(() => { setSession(null); setSummary(summary); }, 0);
        return prev;
      }

      // toast outside of setSession using the closure word info
      showToast(
        rating === 'hard' ? `😰 Hard · ${word.word} · L${before} → L${after}`
        : rating === 'good' ? `🙂 Good · ${word.word} · L${before} → L${after}`
        : rating === 'easy' ? `😎 Easy · ${word.word} · L${before} → L${after}`
        : `✅ Known · ${word.word}`,
        rating === 'hard' ? 'err' : 'ok',
      );

      return { ...prev, reviewed, ratings, pos: p };
    });
  }, [store, showToast]);

  const exitSession = useCallback(() => {
    if (!session) return;
    if (!window.confirm('Exit this session? Progress is saved.')) return;
    setSession(null);
  }, [session]);

  // ---------------- keyboard ----------------
  const handlersRef = useRef({});
  handlersRef.current = { session, modal, rateWord, nextCard, prevCard, exitSession, setModal };

  useEffect(() => {
    const onKey = (e) => {
      const { session, modal, rateWord, nextCard, prevCard, exitSession, setModal } = handlersRef.current;
      if (modal) {
        if (e.key === 'Escape') setModal(null);
        return;
      }
      if (!session) return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); nextCard(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevCard(); }
      else if (e.key === '1') { e.preventDefault(); rateWord('hard'); }
      else if (e.key === '2') { e.preventDefault(); rateWord('good'); }
      else if (e.key === '3') { e.preventDefault(); rateWord('easy'); }
      else if (e.key === '4' || e.key === 'k' || e.key === 'K') { e.preventDefault(); rateWord('know'); }
      else if (e.key === 'Escape') { e.preventDefault(); exitSession(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ---------------- export / import ----------------
  const handleExport = useCallback(async () => {
    const data = await store.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vocab-backup-${new Date().toISOString().slice(0, 10)}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Exported ${data.words.length} words + progress`, 'ok');
  }, [store, showToast]);

  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileChosen = async (e) => {
    const f = e.target.files?.[0];
    e.target.value = '';
    if (!f) return;
    try {
      const text = await f.text();
      const data = JSON.parse(text);
      const isBackup = data && data.app === 'vocab-topic';
      const words = Array.isArray(data) ? data : (data.words || []);
      if (!words.length) { showToast('No words in that file', 'err'); return; }
      const replace = isBackup && window.confirm(
        `Import backup with ${words.length} words.\n\n` +
        `OK → Replace ALL current data (fresh device transfer)\n` +
        `Cancel → Merge into current data`
      );
      const { added, skipped } = await store.importData(data, replace);
      showToast(`${replace ? 'Replaced with' : 'Imported'} ${added} words${skipped ? ` · ${skipped} skipped` : ''}`, 'ok');
    } catch (_) {
      showToast('Invalid backup file', 'err');
    }
  };

  // ---------------- reset ----------------
  const handleReset = async () => {
    if (!window.confirm('Delete all words and progress, then reload the built-in list?')) return;
    await store.resetAll();
    showToast('Word list reloaded', 'ok');
  };

  // ---------------- word modal ----------------
  const openWordModal = (existing) => setModal({ type: 'word', existing: existing || null });

  const saveWordFromModal = async (patch, existing) => {
    if (existing) {
      const updated = { ...existing, ...patch };
      await store.updateWord(updated);
      showToast('Saved', 'ok');
    } else {
      const obj = {
        ...patch, level: 0, reviews: 0, hard: 0, good: 0, easy: 0, known: 0,
        createdAt: Date.now(), lastReviewed: 0,
      };
      await store.addWord(obj);
      showToast('Added', 'ok');
    }
    setModal(null);
  };

  // ---------------- render ----------------
  if (store.loading) {
    return <div className="vocab-root" style={{ padding: 40, textAlign: 'center' }}>Loading…</div>;
  }

  return (
    <div className="vocab-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="dot">📖</div>
            </Link>
            <div>
              Vocabulary Remember
              <small>IELTS · Topic-based · English + বাংলা</small>
            </div>
          </div>
          <nav className="tabs">
            {['practice', 'manage', 'stats'].map(v => (
              <button
                key={v}
                className={`tab ${view === v ? 'active' : ''}`}
                onClick={() => setView(v)}
              >
                {v === 'practice' ? 'Practice' : v === 'manage' ? 'Words' : 'Stats'}
              </button>
            ))}
          </nav>
          <div className="stats-mini">
            <div className="stat"><b>{counts.total}</b><span>Total</span></div>
            <div className="stat"><b>{counts.mastered}</b><span>Mastered</span></div>
            <div className="stat"><b>{store.streak}</b><span>Streak</span></div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {view === 'practice' && (
            <PracticeTab
              counts={counts}
              words={store.words}
              session={session}
              summary={summary}
              currentWord={currentWord}
              alreadyRated={alreadyRated}
              onStartSession={startSession}
              onOpenTopic={(code) => setModal({ type: 'topic', code })}
              onOpenDeck={(index) => setModal({ type: 'deck', index })}
              onRate={rateWord}
              onNext={nextCard}
              onPrev={prevCard}
              onExit={exitSession}
              onPlay={() => currentWord && speak(currentWord.word, 0.9)}
              onBackFromSummary={() => setSummary(null)}
            />
          )}

          {view === 'manage' && (
            <ManageTab
              words={store.words}
              onEdit={openWordModal}
              onDelete={async (w) => {
                if (!window.confirm(`Delete "${w.word}"?`)) return;
                await store.deleteWord(w.id);
                showToast('Deleted', 'ok');
              }}
              onAdd={() => openWordModal(null)}
              onExport={handleExport}
              onImportClick={handleImportClick}
              onReset={handleReset}
              fileInputRef={fileInputRef}
              onFileChosen={handleFileChosen}
              onPlay={(w) => speak(w.word, 0.95)}
            />
          )}

          {view === 'stats' && (
            <StatsTab
              counts={counts}
              words={store.words}
              getHistory={store.getHistory}
              onPlay={(w) => speak(w.word, 0.95)}
              onQuickReview={(w) => {
                setView('practice');
                startSession({ type: 'repeat', ids: [w.id], label: 'Quick review' });
              }}
              onOpenTopic={(code) => setModal({ type: 'topic', code })}
            />
          )}
        </div>
      </main>

      {/* MODALS */}
      {modal?.type === 'topic' && (
        <TopicModal
          code={modal.code}
          words={store.words}
          onClose={() => setModal(null)}
          onStart={(mode) => { setModal(null); startSession(mode); }}
        />
      )}
      {modal?.type === 'deck' && (
        <DeckModal
          index={modal.index}
          words={store.words}
          onClose={() => setModal(null)}
          onStart={(mode) => { setModal(null); startSession(mode); }}
        />
      )}
      {modal?.type === 'word' && (
        <WordModal
          existing={modal.existing}
          allWords={store.words}
          onClose={() => setModal(null)}
          onSave={saveWordFromModal}
          showToast={showToast}
        />
      )}

      {/* TOAST */}
      {toast && <div className={`toast show ${toast.kind}`}>{toast.msg}</div>}
    </div>
  );
}

/* =========================================================
   PRACTICE TAB
   ========================================================= */
function PracticeTab({
  counts, words, session, summary, currentWord, alreadyRated,
  onStartSession, onOpenTopic, onOpenDeck,
  onRate, onNext, onPrev, onExit, onPlay, onBackFromSummary,
}) {
  if (summary) {
    return (
      <div className="card practice-card">
        <div className="session-summary">
          <div className="emoji">🎉</div>
          <h2>Session complete!</h2>
          <p>{summary.label} · {summary.duration}s</p>
          <div className="summary-stats">
            <div className="s"><b>{summary.total}</b><span>Reviewed</span></div>
            <div className="s"><b>{summary.easy}</b><span>Easy</span></div>
            <div className="s"><b>{summary.good}</b><span>Good</span></div>
            <div className="s"><b>{summary.hard}</b><span>Hard</span></div>
            <div className="s"><b>{summary.known}</b><span>Known</span></div>
            <div className="s"><b>{summary.quality}%</b><span>Retention</span></div>
          </div>
          <button className="btn primary" onClick={onBackFromSummary}>Back to modes</button>
        </div>
      </div>
    );
  }

  if (session && currentWord) {
    const pct = ((session.reviewed.size / session.pool.length) * 100).toFixed(1);
    return (
      <div className="card practice-card">
        <div className="progress-bar"><i style={{ width: `${pct}%` }} /></div>
        <div className="practice-meta">
          <p><b>{session.label}</b></p>
          <p>Reviewed <b>{session.reviewed.size}</b> / <b>{session.pool.length}</b></p>
        </div>

        <Flashcard
          word={currentWord}
          rated={alreadyRated}
          onSwipeLeft={onNext}
          onSwipeRight={onPrev}
        />

        <div className="play-row">
          <button className="btn" onClick={onPrev}>⬅ Prev</button>
          <button className="btn" onClick={onPlay}>🔊 Play word</button>
          <button className="btn" onClick={onNext}>Next ➡</button>
        </div>

        <div className="rating-row">
          <button className="rate-btn hard" onClick={() => onRate('hard')} disabled={alreadyRated}>
            😰 Hard<small>Show again soon</small>
          </button>
          <button className="rate-btn good" onClick={() => onRate('good')} disabled={alreadyRated}>
            🙂 Good<small>Normal interval</small>
          </button>
          <button className="rate-btn easy" onClick={() => onRate('easy')} disabled={alreadyRated}>
            😎 Easy<small>Longer interval</small>
          </button>
          <button className="rate-btn know" onClick={() => onRate('know')} disabled={alreadyRated}>
            ✅ Already know<small>Mastered instantly</small>
          </button>
        </div>

        <div className="actions">
          <button className="btn ghost small" onClick={onExit}>Exit</button>
          <span className="spacer" />
          <small style={{ color: 'var(--muted)', fontSize: 11.5 }}>
            Swipe card, ← → keys, or 1‑4 to rate
          </small>
        </div>
      </div>
    );
  }

  // picker
  return (
    <>
      <div className="card">
        <div className="section-title">🎯 Practice modes</div>
        <p className="section-sub">Pick a mode. Counts update live.</p>
        <div className="mode-grid">
          <ModeCard kind="new" icon="✨" title="New words" sub="Words you have never reviewed." count={counts.fresh} onClick={() => onStartSession({ type: 'new', label: 'New words' })} />
          <ModeCard kind="learning" icon="📚" title="Learning" sub="Words in progress. Hardest first." count={counts.learning} onClick={() => onStartSession({ type: 'learning', label: 'Learning' })} />
          <ModeCard kind="mastered" icon="🏆" title="Mastered · review" sub="Keep mastered words fresh." count={counts.mastered} onClick={() => onStartSession({ type: 'mastered', label: 'Mastered · review' })} />
          <ModeCard icon="🌐" title="All words" sub="Every word, shuffled." count={counts.total} onClick={() => onStartSession({ type: 'all', label: 'All words' })} />
        </div>
      </div>

      <TopicsCard words={words} onOpenTopic={onOpenTopic} />
      <DecksCard words={words} onOpenDeck={onOpenDeck} />
    </>
  );
}

function ModeCard({ kind, icon, title, sub, count, onClick }) {
  return (
    <div className={`mode-card ${kind || ''}`} onClick={onClick} role="button" tabIndex={0}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}>
      <span className="m-count">{count}</span>
      <span className="m-icon">{icon}</span>
      <div className="m-title">{title}</div>
      <div className="m-sub">{sub}</div>
    </div>
  );
}

function TopicsCard({ words, onOpenTopic }) {
  const stats = useMemo(() => {
    const m = {};
    for (const w of words) {
      const t = w.topic || 'every';
      if (!m[t]) m[t] = { total: 0, mastered: 0, learning: 0, fresh: 0, known: 0 };
      m[t].total++;
      if ((Number(w.known) || 0) > 0) m[t].known++;
      if (isMastered(w)) m[t].mastered++;
      else if (isNew(w)) m[t].fresh++;
      else m[t].learning++;
    }
    return m;
  }, [words]);
  const codes = Object.keys(stats).sort((a, b) => topicInfo(a).name.localeCompare(topicInfo(b).name));

  return (
    <div className="card">
      <div className="section-title">🗂️ Topics <span style={{ fontWeight: 600, color: 'var(--muted)', fontSize: 12 }}>· {codes.length} topics</span></div>
      <p className="section-sub">Practice a single topic. Great for targeted study.</p>
      <div className="topic-grid">
        {codes.map(code => {
          const t = topicInfo(code);
          const s = stats[code];
          const mp = s.total ? (s.mastered / s.total) * 100 : 0;
          const lp = s.total ? (s.learning / s.total) * 100 : 0;
          const allDone = s.total > 0 && s.mastered === s.total;
          const cls = ['topic-card', allDone ? 'done' : (s.learning > 0 ? 'in-progress' : '')].join(' ');
          return (
            <div key={code} className={cls} onClick={() => onOpenTopic(code)}
                 role="button" tabIndex={0}
                 onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenTopic(code); } }}>
              <span className="tc-icon">{t.icon}</span>
              <div className="tc-name">{t.name}</div>
              <div className="tc-bar">
                <i className="m" style={{ width: `${mp}%` }} />
                <i className="l" style={{ width: `${lp}%` }} />
              </div>
              <div className="tc-meta">
                <span>🏆 {s.mastered} · 📚 {s.learning}</span>
                <span>{s.known > 0 ? `✅ ${s.known} · ` : ''}✨ {s.fresh}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DecksCard({ words, onOpenDeck }) {
  const total = words.length;
  if (!total) {
    return (
      <div className="card">
        <div className="section-title">🎴 Decks</div>
        <div className="empty"><div className="e">📭</div>No words.</div>
      </div>
    );
  }
  const deckCount = Math.ceil(total / DECK_SIZE);
  return (
    <div className="card">
      <div className="section-title">🎴 Decks <span style={{ fontWeight: 600, color: 'var(--muted)', fontSize: 12 }}>· {deckCount} decks · {total} words</span></div>
      <p className="section-sub">25 words per deck. Click a deck for options.</p>
      <div className="deck-grid">
        {Array.from({ length: deckCount }).map((_, d) => {
          const start = d * DECK_SIZE;
          const end = Math.min(start + DECK_SIZE, total);
          const slice = words.slice(start, end);
          const mastered = slice.filter(isMastered).length;
          const pct = slice.length ? (mastered / slice.length) * 100 : 0;
          const allDone = mastered === slice.length && slice.length > 0;
          return (
            <div key={d} className={`deck${allDone ? ' done' : ''}`} onClick={() => onOpenDeck(d)}
                 role="button" tabIndex={0}
                 onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenDeck(d); } }}>
              <div className="deck-title"><span>Deck {d + 1}</span><span>{allDone ? '🏆' : ''}</span></div>
              <div className="deck-range">Words {start + 1}–{end}</div>
              <div className="deck-bar"><i style={{ width: `${pct}%` }} /></div>
              <div className="deck-meta">
                <span>{mastered} mastered</span><span>{slice.length - mastered} left</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MANAGE TAB
   ========================================================= */
function ManageTab({ words, onEdit, onDelete, onAdd, onExport, onImportClick, onReset, fileInputRef, onFileChosen, onPlay }) {
  const [search, setSearch] = useState('');
  const [topicFilter, setTopicFilter] = useState('all');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('learning-first');

  const topicCodes = useMemo(() => {
    const set = new Set();
    words.forEach(w => set.add(w.topic || 'every'));
    return [...set].sort((a, b) => topicInfo(a).name.localeCompare(topicInfo(b).name));
  }, [words]);

  const sorted = useMemo(() => {
    let list = words.slice();
    const q = search.toLowerCase().trim();
    if (q) {
      list = list.filter(w =>
        w.word.toLowerCase().includes(q) ||
        (w.definition || '').toLowerCase().includes(q) ||
        (w.bangla || '').includes(q) ||
        (w.synonyms || '').toLowerCase().includes(q)
      );
    }
    if (topicFilter !== 'all') list = list.filter(w => (w.topic || 'every') === topicFilter);
    if (filter === 'mastered') list = list.filter(isMastered);
    else if (filter === 'learning') list = list.filter(isLearning);
    else if (filter === 'new') list = list.filter(isNew);
    else if (filter === 'easy') list = list.filter(w => (Number(w.easy) || 0) > 0);
    else if (filter === 'good') list = list.filter(w => (Number(w.good) || 0) > 0);
    else if (filter === 'hard') list = list.filter(w => (Number(w.hard) || 0) > 0);
    else if (filter === 'known') list = list.filter(w => (Number(w.known) || 0) > 0);

    switch (sortBy) {
      case 'learning-first': list.sort((a, b) => {
        const grp = w => isMastered(w) ? 2 : (isNew(w) ? 1 : 0);
        if (grp(a) !== grp(b)) return grp(a) - grp(b);
        if (grp(a) === 0) return difficulty(b) - difficulty(a);
        return a.word.localeCompare(b.word);
      }); break;
      case 'new-first': list.sort((a, b) => {
        const grp = w => isMastered(w) ? 2 : (isNew(w) ? 0 : 1);
        if (grp(a) !== grp(b)) return grp(a) - grp(b);
        return a.word.localeCompare(b.word);
      }); break;
      case 'hardest': list.sort((a, b) => difficulty(b) - difficulty(a) || a.word.localeCompare(b.word)); break;
      case 'easiest': list.sort((a, b) => difficulty(a) - difficulty(b) || a.word.localeCompare(b.word)); break;
      case 'most-easy': list.sort((a, b) => (b.easy || 0) - (a.easy || 0) || a.word.localeCompare(b.word)); break;
      case 'most-good': list.sort((a, b) => (b.good || 0) - (a.good || 0) || a.word.localeCompare(b.word)); break;
      case 'most-hard': list.sort((a, b) => (b.hard || 0) - (a.hard || 0) || a.word.localeCompare(b.word)); break;
      case 'most-known': list.sort((a, b) => (b.known || 0) - (a.known || 0) || a.word.localeCompare(b.word)); break;
      case 'most-reviewed': list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0) || a.word.localeCompare(b.word)); break;
      case 'az': list.sort((a, b) => a.word.localeCompare(b.word)); break;
      case 'za': list.sort((a, b) => b.word.localeCompare(a.word)); break;
      case 'newest': list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)); break;
      case 'oldest': list.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0)); break;
    }
    return list;
  }, [words, search, topicFilter, filter, sortBy]);

  return (
    <div className="card">
      <div className="section-title">📚 Word list <span style={{ fontWeight: 600, color: 'var(--muted)', fontSize: 12 }}>· {sorted.length} shown</span></div>
      <p className="section-sub">Add, edit, search, sort or remove words.</p>

      <div className="search-row">
        <input type="text" placeholder="Search word, Bangla, meaning…" value={search} onChange={e => setSearch(e.target.value)} />
        <select value={topicFilter} onChange={e => setTopicFilter(e.target.value)}>
          <option value="all">All topics</option>
          {topicCodes.map(c => <option key={c} value={c}>{topicInfo(c).icon} {topicInfo(c).name}</option>)}
        </select>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All words</option>
          <option value="new">New</option>
          <option value="learning">Learning</option>
          <option value="mastered">Mastered</option>
          <option value="easy">Rated Easy</option>
          <option value="good">Rated Good</option>
          <option value="hard">Rated Hard</option>
          <option value="known">Already Known</option>
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="learning-first">Sort: Learning first</option>
          <option value="new-first">Sort: New first</option>
          <option value="hardest">Sort: Hardest first</option>
          <option value="easiest">Sort: Easiest first</option>
          <option value="most-easy">Sort: Most Easy ratings</option>
          <option value="most-good">Sort: Most Good ratings</option>
          <option value="most-hard">Sort: Most Hard ratings</option>
          <option value="most-known">Sort: Most Already-Known</option>
          <option value="most-reviewed">Sort: Most reviews</option>
          <option value="az">Sort: A → Z</option>
          <option value="za">Sort: Z → A</option>
          <option value="newest">Sort: Newest</option>
          <option value="oldest">Sort: Oldest</option>
        </select>
        <button className="btn primary" onClick={onAdd}>+ Add word</button>
        <button className="btn" onClick={onExport}>⬇ Export backup</button>
        <button className="btn" onClick={onImportClick}>⬆ Import backup</button>
        <button className="btn ghost" onClick={onReset}>↻ Reset</button>
        <input type="file" ref={fileInputRef} accept=".json,application/json" style={{ display: 'none' }} onChange={onFileChosen} />
      </div>

      <div className="word-list">
        {sorted.length === 0 && <div className="empty"><div className="e">🔍</div>No words match.</div>}
        {sorted.slice(0, 300).map(w => {
          const lvl = w.level || 0;
          const ti = topicInfo(w.topic);
          return (
            <div key={w.id} className={`word-row${(w.hard || 0) > 0 ? ' has-history' : ''}`}>
              <div>
                <div className="word-text">{w.word}</div>
                {w.bangla && <div className="word-bangla">{w.bangla}</div>}
                <div className="word-def">{w.definition}</div>
                <div className="word-badges">
                  {isMastered(w) ? <span className="badge mastered">Mastered · L{lvl}</span>
                    : isNew(w) ? <span className="badge new">New</span>
                    : <span className="badge learning">Learning · L{lvl}</span>}
                  {w.pos && <span className="badge pos">{w.pos}</span>}
                  {(w.hard || 0) > 0 && <span className="badge" style={{ background: 'rgba(239,68,68,.15)', color: '#fca5a5' }}>{w.hard} hard</span>}
                  {(w.easy || 0) > 0 && <span className="badge" style={{ background: 'rgba(34,197,94,.15)', color: '#86efac' }}>{w.easy} easy</span>}
                  {(w.good || 0) > 0 && <span className="badge" style={{ background: 'rgba(245,158,11,.15)', color: '#fde68a' }}>{w.good} good</span>}
                  {(w.known || 0) > 0 && <span className="badge known">{w.known} known</span>}
                  <span className="badge topic">{ti.icon} {ti.name}</span>
                </div>
              </div>
              <button className="btn ghost small" onClick={() => onPlay(w)}>🔊</button>
              <button className="btn ghost small" onClick={() => onEdit(w)}>Edit</button>
              <button className="btn ghost small" onClick={() => onDelete(w)}>✕</button>
            </div>
          );
        })}
        {sorted.length > 300 && (
          <div className="empty" style={{ padding: 20 }}>Showing first 300 of {sorted.length} — refine your search to see more.</div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   STATS TAB
   ========================================================= */
function StatsTab({ counts, words, getHistory, onPlay, onQuickReview, onOpenTopic }) {
  const [history, setHistory] = useState([]);
  useEffect(() => { getHistory().then(setHistory); }, [getHistory]);

  const top = useMemo(
    () => words.slice().sort((a, b) => difficulty(b) - difficulty(a)).slice(0, 25),
    [words]
  );

  const topicStats = useMemo(() => {
    const m = {};
    for (const w of words) {
      const t = w.topic || 'every';
      if (!m[t]) m[t] = { total: 0, mastered: 0, learning: 0, fresh: 0, known: 0 };
      m[t].total++;
      if ((w.known || 0) > 0) m[t].known++;
      if (isMastered(w)) m[t].mastered++;
      else if (isNew(w)) m[t].fresh++;
      else m[t].learning++;
    }
    return m;
  }, [words]);

  const recent = history.slice().sort((a, b) => b.ts - a.ts).slice(0, 10);

  return (
    <>
      <div className="stat-grid">
        <div className="stat-card"><b>{counts.total}</b><span>Total words</span></div>
        <div className="stat-card"><b>{counts.mastered}</b><span>Mastered</span></div>
        <div className="stat-card"><b>{counts.learning}</b><span>Learning</span></div>
        <div className="stat-card"><b>{counts.fresh}</b><span>New</span></div>
        <div className="stat-card"><b>{counts.knownTotal}</b><span>Already Known</span></div>
        <div className="stat-card"><b>{counts.masteredPct}%</b><span>Complete</span></div>
        <div className="stat-card"><b>{counts.reviewTotal}</b><span>Total reviews</span></div>
        <div className="stat-card"><b>{counts.hardTotal}</b><span>Hard ratings</span></div>
      </div>

      <div className="card">
        <div className="section-title">🔥 Words to review</div>
        <p className="section-sub">Sorted by difficulty.</p>
        <div className="mistake-list">
          {top.length === 0 && <div className="empty"><div className="e">✨</div>No words yet.</div>}
          {top.map((w, i) => {
            const ti = topicInfo(w.topic);
            return (
              <div key={w.id} className="mistake-row">
                <div className="mistake-rank">{i + 1}</div>
                <div>
                  <div className="word-text">{w.word} {w.bangla && <span className="word-bangla" style={{ fontSize: 12.5 }}>· {w.bangla}</span>}</div>
                  <div className="word-badges">
                    {isMastered(w) ? <span className="badge mastered">Mastered</span>
                      : isNew(w) ? <span className="badge new">New</span>
                      : <span className="badge learning">Learning · L{w.level || 0}</span>}
                    {(w.known || 0) > 0 && <span className="badge known">{w.known} known</span>}
                    <span className="badge topic">{ti.icon} {ti.name}</span>
                  </div>
                </div>
                <div className="mistake-count" title="Difficulty score">{difficulty(w).toFixed(1)}</div>
                <div style={{ display: 'flex', gap: 5 }}>
                  <button className="btn ghost small" onClick={() => onPlay(w)}>🔊</button>
                  <button className="btn small" onClick={() => onQuickReview(w)}>Review</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <div className="section-title">🗂️ Progress by topic</div>
        <p className="section-sub">Mastery levels per topic.</p>
        <div className="topic-grid">
          {Object.keys(topicStats).sort((a, b) => topicInfo(a).name.localeCompare(topicInfo(b).name)).map(code => {
            const t = topicInfo(code);
            const s = topicStats[code];
            const mp = s.total ? (s.mastered / s.total) * 100 : 0;
            const lp = s.total ? (s.learning / s.total) * 100 : 0;
            const allDone = s.mastered === s.total && s.total > 0;
            return (
              <div key={code} className={['topic-card', allDone ? 'done' : (s.learning > 0 ? 'in-progress' : '')].join(' ')}
                   onClick={() => onOpenTopic(code)} role="button" tabIndex={0}>
                <span className="tc-icon">{t.icon}</span>
                <div className="tc-name">{t.name}</div>
                <div className="tc-bar">
                  <i className="m" style={{ width: `${mp}%` }} />
                  <i className="l" style={{ width: `${lp}%` }} />
                </div>
                <div className="tc-meta">
                  <span>🏆 {s.mastered} · 📚 {s.learning}</span>
                  <span>{s.known > 0 ? `✅ ${s.known} · ` : ''}{Math.round(mp)}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <div className="section-title">🕒 Recent sessions</div>
        <p className="section-sub">Last 10 sessions.</p>
        <div className="mistake-list">
          {recent.length === 0 && <div className="empty"><div className="e">📊</div>No sessions yet.</div>}
          {recent.map((h, i) => {
            const d = new Date(h.ts);
            const when = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return (
              <div key={i} className="mistake-row">
                <div className="mistake-rank">📖</div>
                <div>
                  <div className="word-text">{h.label || 'Session'}</div>
                  <div className="word-badges">
                    <span className="badge mastered">{h.reviewed}/{h.total} reviewed</span>
                    <span className="badge new">{h.easy || 0}E · {h.good || 0}G · {h.hard || 0}H · {h.known || 0}K</span>
                  </div>
                </div>
                <div style={{ color: 'var(--muted)', fontSize: 11 }}>{when}</div>
                <div />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* =========================================================
   MODALS
   ========================================================= */
function ModalShell({ children, onClose }) {
  return (
    <div className="modal-bg open" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">{children}</div>
    </div>
  );
}

function TopicModal({ code, words, onClose, onStart }) {
  const t = topicInfo(code);
  const inTopic = words.filter(w => (w.topic || 'every') === code);
  const easyW = inTopic.filter(w => (w.easy || 0) > 0);
  const goodW = inTopic.filter(w => (w.good || 0) > 0);
  const hardW = inTopic.filter(w => (w.hard || 0) > 0);
  const knownW = inTopic.filter(w => (w.known || 0) > 0);

  const opts = [
    { key: 'topic-easy', label: 'Rated Easy', sub: `${easyW.length} word${easyW.length === 1 ? '' : 's'}`, disabled: easyW.length === 0 },
    { key: 'topic-good', label: 'Rated Good', sub: `${goodW.length} word${goodW.length === 1 ? '' : 's'}`, disabled: goodW.length === 0 },
    { key: 'topic-hard', label: 'Rated Hard', sub: `${hardW.length} word${hardW.length === 1 ? '' : 's'}`, disabled: hardW.length === 0 },
    { key: 'topic-all', label: 'All words', sub: `${inTopic.length} total words`, primary: true },
    { key: 'topic-known', label: 'Already Known', sub: `${knownW.length} word${knownW.length === 1 ? '' : 's'}`, disabled: knownW.length === 0 },
  ];

  return (
    <ModalShell onClose={onClose}>
      <h3>{t.icon} {t.name}</h3>
      <p className="m-sub">{easyW.length} easy · {goodW.length} good · {hardW.length} hard · {knownW.length} known · {inTopic.length} total</p>
      <div className="modal-actions column">
        {opts.map(o => (
          <button key={o.key} className={`btn ${o.primary ? 'primary' : ''}`} disabled={o.disabled}
                  onClick={() => onStart({ type: o.key, topic: code, label: `${t.name} · ${o.label}` })}>
            {o.label}<small>{o.sub}</small>
          </button>
        ))}
        <button className="btn ghost" onClick={onClose}>Cancel</button>
      </div>
    </ModalShell>
  );
}

function DeckModal({ index, words, onClose, onStart }) {
  const start = index * DECK_SIZE;
  const end = Math.min(start + DECK_SIZE, words.length);
  const slice = words.slice(start, end);
  const nNew = slice.filter(isNew);
  const nLearning = slice.filter(isLearning);
  const nMastered = slice.filter(isMastered);
  const opts = [
    { key: 'deck-new', label: 'Learn new words', sub: `${nNew.length} never reviewed`, disabled: nNew.length === 0, primary: nNew.length > 0 },
    { key: 'deck-learning', label: 'Practice learning words', sub: `${nLearning.length} in progress`, disabled: nLearning.length === 0 },
    { key: 'deck-mastered', label: 'Review mastered words', sub: `${nMastered.length} mastered`, disabled: nMastered.length === 0 },
    { key: 'deck-all', label: 'Practice every word', sub: `All ${slice.length} words in this deck`, disabled: slice.length === 0 },
  ];
  return (
    <ModalShell onClose={onClose}>
      <h3>Deck {index + 1}</h3>
      <p className="m-sub">{nNew.length} new · {nLearning.length} learning · {nMastered.length} mastered</p>
      <div className="modal-actions column">
        {opts.map(o => (
          <button key={o.key} className={`btn ${o.primary ? 'primary' : ''}`} disabled={o.disabled}
                  onClick={() => onStart({ type: o.key, deck: index, label: `Deck ${index + 1}` })}>
            {o.label}<small>{o.sub}</small>
          </button>
        ))}
        <button className="btn ghost" onClick={onClose}>Cancel</button>
      </div>
    </ModalShell>
  );
}

function WordModal({ existing, allWords, onClose, onSave, showToast }) {
  const w = existing || { word: '', pos: '', bangla: '', definition: '', example: '', synonyms: '', topic: 'every' };
  const [form, setForm] = useState({
    word: w.word || '', pos: w.pos || '', bangla: w.bangla || '',
    definition: w.definition || '', example: w.example || '',
    synonyms: w.synonyms || '', topic: w.topic || 'every',
  });

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.word.trim()) return showToast('Enter a word', 'err');
    if (!form.definition.trim()) return showToast('Enter a definition', 'err');
    const dup = allWords.find(x => norm(x.word) === norm(form.word) && (!existing || x.id !== existing.id));
    if (dup) return showToast('Word already exists', 'err');
    await onSave({ ...form, word: form.word.trim(), definition: form.definition.trim() }, existing);
  };

  const topicOpts = Object.keys(TOPICS).sort((a, b) => TOPICS[a].name.localeCompare(TOPICS[b].name));

  return (
    <ModalShell onClose={onClose}>
      <h3>{existing ? 'Edit word' : 'Add new word'}</h3>
      <label>Word *</label>
      <input value={form.word} onChange={set('word')} autoFocus spellCheck={false} />
      <label>Part of speech</label>
      <select value={form.pos} onChange={set('pos')}>
        {['', 'noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'pronoun', 'interjection'].map(p =>
          <option key={p} value={p}>{p || '— select —'}</option>)}
      </select>
      <label>Topic *</label>
      <select value={form.topic} onChange={set('topic')}>
        {topicOpts.map(c => <option key={c} value={c}>{TOPICS[c].icon} {TOPICS[c].name}</option>)}
      </select>
      <label>বাংলা অর্থ (Bangla meaning)</label>
      <input value={form.bangla} onChange={set('bangla')} />
      <label>English definition / synonyms *</label>
      <textarea value={form.definition} onChange={set('definition')} />
      <label>Example sentence</label>
      <textarea value={form.example} onChange={set('example')} />
      <label>Synonyms (comma separated)</label>
      <input value={form.synonyms} onChange={set('synonyms')} />
      <div className="modal-actions">
        <button className="btn ghost" onClick={onClose}>Cancel</button>
        <button className="btn primary" onClick={submit}>{existing ? 'Save' : 'Add'}</button>
      </div>
    </ModalShell>
  );
}