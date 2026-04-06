const SERIES_LIST = [
  { key: 'nitc-industry-genai', label: 'NITC: Industry & GenAI', short: 'NITC' },
]

export default function Navbar({ activeSeries, onNavigate }) {
  return (
    <header style={{
      background: 'var(--primary)',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(26,35,126,0.25)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        height: 56,
      }}>
        <button
          onClick={() => onNavigate('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexShrink: 0,
          }}
        >
          <span style={{
            background: 'var(--accent)',
            color: 'var(--primary)',
            fontWeight: 800,
            fontSize: '0.75rem',
            padding: '2px 7px',
            borderRadius: 4,
            letterSpacing: 1,
          }}>D A I</span>
          <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: 0.3 }}>
            Lectures
          </span>
        </button>

        <nav style={{ display: 'flex', gap: '0.25rem', flex: 1, overflowX: 'auto' }}>
          {SERIES_LIST.map(s => (
            <button
              key={s.key}
              onClick={() => onNavigate(s.key)}
              style={{
                background: activeSeries === s.key ? 'rgba(245,158,11,0.2)' : 'transparent',
                border: activeSeries === s.key ? '1px solid var(--accent)' : '1px solid transparent',
                color: activeSeries === s.key ? 'var(--accent-light)' : 'rgba(255,255,255,0.75)',
                cursor: 'pointer',
                padding: '4px 14px',
                borderRadius: 6,
                fontSize: '0.85rem',
                fontWeight: activeSeries === s.key ? 600 : 400,
                whiteSpace: 'nowrap',
                transition: 'all 0.15s',
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
