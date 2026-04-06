export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'rgba(255,255,255,0.6)',
      textAlign: 'center',
      padding: '1.2rem',
      fontSize: '0.8rem',
      marginTop: 'auto',
    }}>
      © {new Date().getFullYear()} DatafortAI — Educational content for engineering students and practitioners
    </footer>
  )
}
