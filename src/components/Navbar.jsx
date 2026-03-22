import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const LANGUAGES = [
  { code: 'HR', label: 'Hrvatski' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'IT', label: 'Italiano' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()
  const dropdownRef = useRef(null)

  // Zatvori dropdown klikom van
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/projekti', label: t.nav.projects },
    { to: '/kontakt', label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F3EE]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-display text-lg font-bold text-ink hover:text-accent transition-colors duration-300">
          {t.nav.welcome}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
            return (
              <Link
                key={to}
                to={to}
                className={`font-body text-sm font-medium transition-colors duration-300 relative ${
                  isActive ? 'text-accent' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            )
          })}

          {/* Language dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 font-body text-sm font-medium text-ink/70 hover:text-ink transition-colors duration-300"
            >
              {lang}
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-black/5 rounded-xl shadow-lg py-1 min-w-[130px]">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2 font-body text-sm transition-colors duration-200 ${
                      lang === code
                        ? 'text-accent font-semibold bg-blue-50'
                        : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mali language switcher na mobitelu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="font-body text-xs font-semibold text-ink/60 hover:text-ink transition-colors"
            >
              {lang}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-black/5 rounded-xl shadow-lg py-1 min-w-[130px]">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2 font-body text-sm transition-colors duration-200 ${
                      lang === code
                        ? 'text-accent font-semibold bg-blue-50'
                        : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#F7F3EE] border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-base font-medium ${location.pathname === to ? 'text-accent' : 'text-ink'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
