import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Header({ title, band, timer, onReset }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleFocus = () => { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); };
  return (
    <header className="app-header">
      <Link to="/" className="logo" title="Home">📚</Link>
      <h1>{title}</h1>
      <div className="header-right">
        <button className="icon-btn" type="button" onClick={toggleFocus}>⛶ Focus</button>
        <div className={`band-chip ${band ? 'show' : ''}`}>{band || '--'}</div>
        <div className="timer-chip">⏱ <strong>{timer}</strong></div>
        <div className="menu-wrap">
          <button className="icon-btn" type="button" onClick={() => setMenuOpen(v => !v)}>☰</button>
          <div className={`menu-pop ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}>
            <a href="#" onClick={e => { e.preventDefault(); window.print(); }}>📄 Export as PDF</a>
            <a href="#" onClick={e => { e.preventDefault(); document.querySelectorAll('mark.hl').forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); }); }}>🧹 Clear Highlights</a>
            <a href="#" onClick={e => { e.preventDefault(); if (onReset && window.confirm('Reset the test?')) onReset(); }}>↺ Reset Test</a>
            <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>↑ Back to Top</a>
          </div>
        </div>
      </div>
    </header>
  );
}
