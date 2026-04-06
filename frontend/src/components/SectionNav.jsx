import { useState, useEffect } from 'react'

export default function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-60px 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Mobile toggle */}
      <div style={{ display: 'none' }} className="section-nav-mobile-toggle">
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            background: 'var(--primary)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 'var(--radius)',
            fontWeight: 600,
            fontSize: '0.9rem',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>Sections</span>
          <span>{open ? '▲' : '▼'}</span>
        </button>
      </div>

      <nav style={{
        position: 'sticky',
        top: 72,
        maxHeight: 'calc(100vh - 90px)',
        overflowY: 'auto',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem 0',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{
          padding: '0 1rem 0.75rem',
          borderBottom: '1px solid var(--border)',
          marginBottom: '0.5rem',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: 1.2,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>Contents</div>

        {sections.map(({ id, number, title }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem',
              width: '100%',
              padding: '0.5rem 1rem',
              background: active === id ? 'var(--surface-alt)' : 'transparent',
              borderLeft: active === id ? '3px solid var(--accent)' : '3px solid transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s',
            }}
          >
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              color: active === id ? 'var(--accent)' : 'var(--text-muted)',
              flexShrink: 0,
              marginTop: 2,
            }}>{number}</span>
            <span style={{
              fontSize: '0.82rem',
              color: active === id ? 'var(--primary)' : 'var(--text)',
              fontWeight: active === id ? 600 : 400,
              lineHeight: 1.4,
            }}>{title}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
