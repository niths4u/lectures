import { useState } from 'react'
import Home from './pages/Home.jsx'
import NitcIndustryGenAI from './pages/series/NitcIndustryGenAI.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const SERIES = {
  home: null,
  'nitc-industry-genai': NitcIndustryGenAI,
}

export default function App() {
  const [page, setPage] = useState('home')

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
