const SERIES = [
  {
    key: 'nitc-industry-genai',
    badge: 'NITC',
    title: 'From Idea to Product — A 10-Step Framework',
    subtitle: 'Industry & GenAI Lecture Series — NIT Calicut',
    description: 'A structured pipeline to take any raw idea from concept to working prototype — Discovery → Research → Spec → Story → Storyboard → Architecture → Team Plan → Prototype → Modules → Build. With ready-to-use AI prompts at each step.',
    date: 'April 2026',
    tags: ['GenAI', 'Product Development', 'Startups', 'Idea to Build'],
    sections: 10,
  },
]

export default function Home({ onNavigate }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem',
        }}>DatafortAI Lectures</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
          Technical and industry lectures on GenAI, software engineering, and product thinking.
        </p>
      </div>

      <h2 style={{
        fontSize: '0.78rem', fontWeight: 700, letterSpacing: 1.5,
        textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem',
      }}>Lecture Series</h2>

      <div style={{ display: 'grid', gap: '1.25rem' }}>
        {SERIES.map(s => (
          <div
            key={s.key}
            onClick={() => onNavigate(s.key)}
            style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '1.5rem',
              cursor: 'pointer', boxShadow: 'var(--shadow-sm)',
              transition: 'box-shadow 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--border-strong)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <div className="home-card-inner">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'var(--primary)', color: '#fff',
                    fontWeight: 700, fontSize: '0.7rem', padding: '2px 8px',
                    borderRadius: 4,
                  }}>{s.badge}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.date}</span>
                  <span style={{
                    fontSize: '0.75rem', color: 'var(--text-muted)',
                    background: 'var(--surface-alt)', border: '1px solid var(--border)',
                    borderRadius: 12, padding: '1px 8px',
                  }}>{s.sections} sections</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.3rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  {s.subtitle}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {s.description}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      background: 'var(--surface-alt)', border: '1px solid var(--border-strong)',
                      color: 'var(--primary)', fontSize: '0.75rem', padding: '2px 10px',
                      borderRadius: 12, fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div
                className="home-card-btn"
                style={{
                  background: 'var(--primary)', color: '#fff',
                  padding: '0.6rem 1.1rem', borderRadius: 8,
                  fontSize: '0.85rem', fontWeight: 600,
                  whiteSpace: 'nowrap', alignSelf: 'flex-start',
                }}
              >
                View Lecture →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
