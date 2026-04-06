export default function SlideSection({ id, number, title, accent, children }) {
  return (
    <section
      id={id}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-sm)',
        scrollMarginTop: 72,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
        <span style={{
          background: accent ? 'var(--accent)' : 'var(--primary)',
          color: accent ? 'var(--primary)' : '#fff',
          fontWeight: 800,
          fontSize: '0.8rem',
          padding: '3px 10px',
          borderRadius: 6,
          letterSpacing: 1,
          flexShrink: 0,
          marginTop: 3,
        }}>{number}</span>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--primary)',
          lineHeight: 1.3,
        }}>{title}</h2>
      </div>
      <div style={{ color: 'var(--text)', lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  )
}

export function Callout({ type = 'info', children }) {
  const styles = {
    info:    { bg: '#eff6ff', border: '#93c5fd', icon: 'ℹ' },
    tip:     { bg: '#f0fdf4', border: '#86efac', icon: '✓' },
    warning: { bg: '#fffbeb', border: '#fcd34d', icon: '!' },
    key:     { bg: '#fdf4ff', border: '#d8b4fe', icon: '★' },
  }
  const s = styles[type] || styles.info
  return (
    <div style={{
      background: s.bg,
      borderLeft: `4px solid ${s.border}`,
      borderRadius: '0 var(--radius) var(--radius) 0',
      padding: '0.85rem 1.1rem',
      margin: '1rem 0',
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'flex-start',
    }}>
      <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>{s.icon}</span>
      <div style={{ fontSize: '0.9rem' }}>{children}</div>
    </div>
  )
}

export function PromptBlock({ prompt, annotation }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <pre style={{ marginBottom: annotation ? '0.4rem' : 0 }}><code>{prompt}</code></pre>
      {annotation && (
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>
          {annotation}
        </p>
      )}
    </div>
  )
}

export function ScoreRow({ question, score, note }) {
  const color = score >= 4 ? '#059669' : score >= 3 ? '#d97706' : '#dc2626'
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.6rem 0.75rem',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: color,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '0.8rem',
        flexShrink: 0,
      }}>{score}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{question}</div>
        {note && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{note}</div>}
      </div>
    </div>
  )
}
