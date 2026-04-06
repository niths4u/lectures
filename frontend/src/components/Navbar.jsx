import { useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'

const SERIES_LIST = [
  { key: 'nitc-industry-genai', label: 'NITC: Idea to Product' },
]

export default function Navbar({ activeSeries, onNavigate }) {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

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
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        height: 56,
      }}>
        {/* Logo */}
        <button
          onClick={() => { onNavigate('home'); setMenuOpen(false) }}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#fff', display: 'flex', alignItems: 'center',
            gap: '0.6rem', flexShrink: 0,
          }}
        >
          <span style={{
            background: 'var(--accent)', color: 'var(--primary)',
            fontWeight: 800, fontSize: '0.72rem', padding: '2px 6px',
            borderRadius: 4, letterSpacing: 1,
          }}>D A I</span>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>Lectures</span>
        </button>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex', gap: '0.25rem', flex: 1,
          overflowX: 'auto',
        }} className="nav-desktop">
          {SERIES_LIST.map(s => (
            <button
              key={s.key}
              onClick={() => onNavigate(s.key)}
              style={{
                background: activeSeries === s.key ? 'rgba(245,158,11,0.2)' : 'transparent',
                border: activeSeries === s.key ? '1px solid var(--accent)' : '1px solid transparent',
                color: activeSeries === s.key ? 'var(--accent-light)' : 'rgba(255,255,255,0.75)',
                cursor: 'pointer', padding: '4px 12px', borderRadius: 6,
                fontSize: '0.85rem', fontWeight: activeSeries === s.key ? 600 : 400,
                whiteSpace: 'nowrap',
              }}
            >{s.label}</button>
          ))}
        </nav>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* User badge */}
          <span style={{
            fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)',
            background: 'rgba(255,255,255,0.1)', borderRadius: 12,
            padding: '2px 10px', whiteSpace: 'nowrap',
          }}>
            {user?.username}
            {user?.role === 'admin' && (
              <span style={{ color: 'var(--accent)', marginLeft: 4, fontWeight: 700 }}>admin</span>
            )}
          </span>

          {/* Logout */}
          <button
            onClick={logout}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              cursor: 'pointer', padding: '4px 12px',
              borderRadius: 6, fontSize: '0.8rem',
              whiteSpace: 'nowrap',
            }}
          >Sign out</button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none', border: 'none',
              color: '#fff', cursor: 'pointer',
              fontSize: '1.4rem', lineHeight: 1,
              padding: '4px',
            }}
            className="nav-hamburger"
          >{menuOpen ? '✕' : '☰'}</button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: 'var(--primary-light)',
          padding: '0.75rem 1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {SERIES_LIST.map(s => (
            <button
              key={s.key}
              onClick={() => { onNavigate(s.key); setMenuOpen(false) }}
              style={{
                display: 'block', width: '100%',
                background: 'transparent', border: 'none',
                color: activeSeries === s.key ? 'var(--accent-light)' : 'rgba(255,255,255,0.85)',
                cursor: 'pointer', padding: '0.6rem 0',
                textAlign: 'left', fontSize: '0.9rem',
                fontWeight: activeSeries === s.key ? 600 : 400,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >{s.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
