import { useState } from 'react'
import { AuthProvider, useAuth } from './auth/AuthContext.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import NitcIndustryGenAI from './pages/series/NitcIndustryGenAI.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const SERIES = {
  home: null,
  'nitc-industry-genai': NitcIndustryGenAI,
}

function AppInner() {
  const { user } = useAuth()
  const [page, setPage] = useState('home')

  if (!user) return <Login />

  const PageComponent = SERIES[page]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeSeries={page} onNavigate={setPage} />
      <main style={{ flex: 1 }}>
        {page === 'home'
          ? <Home onNavigate={setPage} />
          : PageComponent
            ? <PageComponent onNavigate={setPage} />
            : <Home onNavigate={setPage} />
        }
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  )
}
