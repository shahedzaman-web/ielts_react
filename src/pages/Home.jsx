import { Link } from 'react-router-dom';

const CARD_CSS = `
.ielts-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 92px;
  padding: 16px 18px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  color: #1e293b;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}
a.ielts-card:hover {
  transform: translateY(-2px);
  border-color: #5eead4;
  box-shadow: 0 8px 20px rgba(15, 118, 110, .12);
}
a.ielts-card:focus-visible {
  outline: 3px solid #99f6e4;
  outline-offset: 2px;
}
.ielts-card--disabled {
  background: #f8fafc;
  border-style: dashed;
  cursor: not-allowed;
  opacity: .7;
}
`;

const styles = {
  page: {
    maxWidth: 1040,
    margin: '0 auto',
    padding: '40px 20px 64px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    color: '#0f172a',
  },
  headerRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 32,
  },
  h1: { fontSize: 30, lineHeight: 1.2, margin: '0 0 6px', letterSpacing: '-0.02em' },
  subtitle: { margin: 0, color: '#64748b', fontSize: 15 },
  vocabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 18px',
    borderRadius: 999,
    background: '#0f766e',
    color: '#fff',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
    gap: 14,
  },
  cardTitle: { fontWeight: 700, fontSize: 15, marginBottom: 4 },
  cardSub: { fontSize: 13, color: '#64748b' },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    color: '#94a3b8',
    background: '#f1f5f9',
    padding: '3px 8px',
    borderRadius: 999,
  },
};

function Card({ to, title, sub, disabled = false, children }) {
  const body = (
    <>
      <div style={{ ...styles.cardTitle, color: disabled ? '#94a3b8' : '#0f766e' }}>
        {title}
      </div>
      {sub ? <div style={styles.cardSub}>{sub}</div> : null}
      {children}
    </>
  );

  if (disabled) {
    return (
      <div className="ielts-card ielts-card--disabled" aria-disabled="true">
        {body}
        <span style={styles.badge}>Coming soon</span>
      </div>
    );
  }

  return (
    <Link className="ielts-card" to={to}>
      {body}
    </Link>
  );
}

function Section({ title, count, children }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 17,
          fontWeight: 700,
          color: '#0f766e',
          margin: '0 0 12px',
        }}
      >
        {title}
        {count != null && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#94a3b8',
              background: '#f1f5f9',
              padding: '2px 8px',
              borderRadius: 999,
            }}
          >
            {count}
          </span>
        )}
      </h2>
      <div style={styles.grid}>{children}</div>
    </section>
  );
}

const TESTS = [1, 2, 3, 4, 5, 6, 7, 8];
const PRACTICES = Array.from({ length: 33 }, (_, i) => i + 1);

export default function Home({ listening = [], reading = [], readingPractice }) {
  const hasListening = (n) => Boolean(listening?.[n - 1]);
  const hasReading = (n) => Boolean(reading?.[n - 1]);
  // Only grey out a practice when an explicit `readingPractice` list is supplied.
  const hasPractice = (n) => (readingPractice ? Boolean(readingPractice[n - 1]) : true);

  return (
    <div style={styles.page}>
      <style>{CARD_CSS}</style>

      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.h1}>Cambridge Official Guide to IELTS</h1>
          <p style={styles.subtitle}>Academic Listening &amp; Reading practice tests</p>
        </div>
        <Link to="/vocab" style={styles.vocabBtn}>
          Vocabulary Remember →
        </Link>
      </div>

      <Section title="🎧 Listening" count={`${TESTS.length} tests`}>
        {TESTS.map((n) => (
          <Card
            key={n}
            to={`/listening/${n}`}
            title={`Listening Test ${n}`}
            sub="4 parts · 40 questions"
            disabled={!hasListening(n)}
          />
        ))}
      </Section>

      <Section title="📖 Reading" count={`${TESTS.length} tests`}>
        {TESTS.map((n) => (
          <Card
            key={n}
            to={`/reading/${n}`}
            title={`Reading Test ${n}`}
            sub="3 passages · 40 questions"
            disabled={!hasReading(n)}
          />
        ))}
      </Section>

      <Section title="📝 Reading Practice" count={`${PRACTICES.length} practices`}>
        {PRACTICES.map((n) => (
          <Card
            key={n}
            to={`/reading/practice/${n}`}
            title={`Reading Practice ${n}`}
            sub="3 passages · 40 questions"
            disabled={!hasPractice(n)}
          />
        ))}
      </Section>

      <Section title="🎧 Cambridge Booked Mock Tests — Listening" count="3 tests">
        {[3, 4, 5].map((n) => (
          <Card
            key={n}
            to={`/listening/test-from-cambridge/${n}`}
            title={`Listening Test ${n}`}
            sub="Cambridge mock test"
          />
        ))}
      </Section>

      <Section title="📖 Cambridge Booked Mock Tests — Reading" count="3 tests">
        {[1, 2, 3].map((n) => (
          <Card
            key={n}
            to={`/reading/test-from-cambridge/${n}`}
            title={`Reading Test ${n}`}
            sub="Cambridge mock test"
          />
        ))}
      </Section>
    </div>
  );
}