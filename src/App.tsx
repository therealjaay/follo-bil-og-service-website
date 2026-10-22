import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { StickyBar } from './components/StickyBar'
import { About } from './pages/About'
import { Booking } from './pages/Booking'
import { Contact } from './pages/Contact'
import { Dekkskift } from './pages/Dekkskift'
import { EuKontroll } from './pages/EuKontroll'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Prices } from './pages/Prices'
import { ServiceDetail } from './pages/ServiceDetail'
import { Services } from './pages/Services'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#innhold"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Hopp til innhold
      </a>
      <Header />
      <main id="innhold">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjenester" element={<Services />} />
          <Route path="/tjenester/:slug" element={<ServiceDetail />} />
          <Route path="/eu-kontroll" element={<EuKontroll />} />
          <Route path="/dekkskift" element={<Dekkskift />} />
          <Route path="/priser" element={<Prices />} />
          <Route path="/bestill-time" element={<Booking />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyBar />
    </BrowserRouter>
  )
}
