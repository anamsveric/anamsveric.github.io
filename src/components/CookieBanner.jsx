import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div
        className="max-w-3xl mx-auto rounded-2xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4"
        style={{ background: 'rgba(30, 10, 78, 0.92)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <p className="font-body text-sm text-white/70 flex-1 leading-relaxed">
          Koristimo kolačiće za prikazivanje oglasa putem Google AdSense-a.{' '}
          <Link to="/privacy" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-colors">
            Saznaj više
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-mono text-xs text-white/50 hover:text-white/80 transition-colors px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
          >
            Odbij
          </button>
          <button
            onClick={accept}
            className="font-mono text-xs text-white font-semibold px-5 py-2 rounded-full transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #7B6FFF 0%, #5B4FEF 100%)' }}
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  )
}
