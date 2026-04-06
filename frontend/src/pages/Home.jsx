const SERIES = [
  {
    key: 'nitc-industry-genai',
    badge: 'NITC',
    title: 'Evaluating Ideas with GenAI',
    subtitle: 'Industry & GenAI Lecture Series — NIT Calicut',
    description: 'A practical framework for evaluating startup ideas and internal EC proposals, with hands-on GenAI prompting strategies for each evaluation step.',
    date: 'April 2026',
    tags: ['GenAI', 'Startups', 'Idea Evaluation', 'Product Thinking'],
    sections: 10,
  },
]

export default function Home({ onNavigate }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--primary)',
          marginBottom: '0.75rem',
        }}>
          DatafortAI Lectures
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto' }}>
          Technical and industry lectures on GenAI, software engineering, and product thinking —
          designed for engineering students and practitioners.
        </p>
      </div>

      <h2 style={{
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
      }}>Lecture Series</h2>

      <div style={{ display: 'grid', gap: '1.25rem' }}>
        {SERIES.map(s => (
          <div
            key={s.key}
            onClick={() => onNavigate(s.key)}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem 2rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'box-shadow 0.15s, border-color 0.15s',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '1rem',
              alignItems: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              e.currentTarget.style.borderColor = 'var(--border-strong)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{
                  background: 'var(--primary)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: 4,
                  letterSpacing: 0.5,
                }}>{s.badge}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.date}</span>
                <span style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '1px 8px',
                }}>{s.sections} sections</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.3rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>
                {s.subtitle}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {s.description}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    background: 'var(--surface-alt)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--primary)',
                    fontSize: '0.75rem',
                    padding: '2px 10px',
                    borderRadius: 12,
                    fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{
              background: 'var(--primary)',
              color: '#fff',
              padding: '0.6rem 1.1rem',
              borderRadius: 8,
              fontSize: '0.85rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
            }}>
              View Lecture →
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
