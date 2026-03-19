import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const LANGUAGES = [
  { code: 'HR', flag: '🇭🇷' },
  { code: 'EN', flag: '🇬🇧' },
  { code: 'DE', flag: '🇩🇪' },
  { code: 'IT', flag: '🇮🇹' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const LangSwitcher = () => (
    <div className="flex items-center gap-1">
      {LANGUAGES.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          title={code}
          className={`text-lg leading-none px-1 py-0.5 rounded transition-all duration-200 ${
            lang === code
              ? 'opacity-100 scale-110'
              : 'opacity-35 hover:opacity-70'
          }`}
        >
          {flag}
        </button>
      ))}
    </div>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-ink/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

        {/* Lijevo — prazan prostor za balans (desktop) */}
        <div className="hidden md:block w-24" />

        {/* Sredina — nav linkovi (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
              location.pathname === '/' ? 'text-accent' : 'text-ink/70 hover:text-ink'
            }`}
          >
            {t.nav.home}
            <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          <Link
            to="/projekti"
            className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
              location.pathname === '/projekti' ? 'text-accent' : 'text-ink/70 hover:text-ink'
            }`}
          >
            {t.nav.projects}
            <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${location.pathname === '/projekti' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </div>

        {/* Desno — zastavice (desktop) */}
        <div className="hidden md:block">
          <LangSwitcher />
        </div>

        {/* Mobitel — hamburger lijevo + zastavice desno */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
          <LangSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/95 backdrop-blur-md border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`font-body text-base font-medium ${location.pathname === '/' ? 'text-accent' : 'text-ink/70'}`}>
            {t.nav.home}
          </Link>
          <Link to="/projekti" onClick={() => setMenuOpen(false)} className={`font-body text-base font-medium ${location.pathname === '/projekti' ? 'text-accent' : 'text-ink/70'}`}>
            {t.nav.projects}
          </Link>
        </div>
      </div>
    </nav>
  )
}
