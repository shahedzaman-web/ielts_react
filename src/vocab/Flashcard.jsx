// src/vocab/Flashcard.jsx
import { useRef } from 'react';
import { topicInfo } from '../data/vocab';
import './Vocab.css';
const THRESHOLD = 70;

export default function Flashcard({ word, rated, onSwipeLeft, onSwipeRight }) {
    const ref = useRef(null);
    const dragRef = useRef({ dragging: false, startX: 0, startY: 0, dragX: 0, activeId: null });

    const down = (e) => {
        if (e.target.closest('button')) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        const d = dragRef.current;
        d.dragging = true;
        d.dragX = 0;
        d.startX = e.clientX;
        d.startY = e.clientY;
        d.activeId = e.pointerId;
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) { }
        ref.current?.classList.add('dragging');
    };

    const move = (e) => {
        const d = dragRef.current;
        if (!d.dragging || e.pointerId !== d.activeId) return;
        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;
        if (Math.abs(dy) > Math.abs(dx) + 12) { d.dragX = 0; return; }
        d.dragX = dx;
        if (ref.current) ref.current.style.transform = `translateX(${dx}px) rotate(${dx * 0.045}deg)`;
    };

    const up = (e) => {
        const d = dragRef.current;
        if (!d.dragging) return;
        if (e && e.pointerId !== d.activeId) return;
        d.dragging = false;
        d.activeId = null;
        ref.current?.classList.remove('dragging');
        if (ref.current) ref.current.style.transform = '';
        if (d.dragX <= -THRESHOLD) onSwipeLeft?.();
        else if (d.dragX >= THRESHOLD) onSwipeRight?.();
        d.dragX = 0;
    };

    if (!word) return null;
    const ti = topicInfo(word.topic);

    return (
        <div
            ref={ref}
            className={`flashcard${rated ? ' revealed' : ''}`}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
        >
            <div className="fc-tag">{rated ? 'REVIEWED' : 'WORD'}</div>
            <div className="fc-pos">{word.pos || '—'}</div>
            <div className="fc-topic">{ti.icon} {ti.name}</div>
            <div className="fc-word">{word.word}</div>
            {word.bangla && <div className="fc-bangla">{word.bangla}</div>}
            <div className="fc-def">{word.definition}</div>
            {word.example && <div className="fc-example">"{word.example}"</div>}
            {word.synonyms && <div className="fc-syn"><b>Synonyms:</b> {word.synonyms}</div>}
        </div>
    );
}