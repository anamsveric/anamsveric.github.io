import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projekti from './pages/Projekti'
import Kontakt from './pages/Kontakt'
import HobijiWeb from './pages/HobijiWeb'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookieBanner from './components/CookieBanner'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekti" element={<Projekti />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/hobiji" element={<HobijiWeb />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </LanguageProvider>
  )
}
