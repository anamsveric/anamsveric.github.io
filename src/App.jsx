import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projekti from './pages/Projekti'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekti" element={<Projekti />} />
      </Routes>
    </LanguageProvider>
  )
}
