import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLang()

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">

          <div>
            <div className="inline-flex items-center gap-2 border border-ink/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-body text-sm text-ink/60">{t.hero.badge}</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05] mb-6">
              {t.hero.title1}<br />
              <span className="bg-gradient-to-r from-accent via-violet-500 to-orange-400 bg-clip-text text-transparent">{t.hero.title2}</span><br />
              {t.hero.title3}
            </h1>

            <p className="font-body text-base text-muted leading-relaxed max-w-md mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projekti" className="inline-flex items-center justify-center font-body text-sm font-semibold text-white bg-accent px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-300">
                {t.hero.btn_projects}
              </Link>
              <Link to="/kontakt" className="inline-flex items-center justify-center font-body text-sm font-semibold text-ink border border-ink/20 px-8 py-3.5 rounded-full hover:border-ink/50 hover:bg-ink/5 transition-all duration-300">
                {t.hero.btn_contact}
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-5 h-5 rounded-full bg-accent z-10" />
              <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-orange-400 z-10" />
              <img src="/foto.jpg" alt="Anamaria Sverić" className="max-w-sm w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* ── O MENI ── */}
      <section className="border-t border-black/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">{t.about.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">{t.about.title}</h2>
          <p className="font-body text-base text-muted max-w-xl leading-relaxed mb-12">{t.about.desc}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <p className="font-body text-ink/70 leading-relaxed">{t.about.card1}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <p className="font-body text-ink/70 leading-relaxed">{t.about.card2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VJEŠTINE ── */}
      <section className="border-t border-black/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs font-semibold tracking-widest text-accent uppercase mb-3">{t.skills.label}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">{t.skills.title}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-body text-lg font-semibold text-ink mb-2">{t.skills.s1_name}</h3>
              <p className="font-body text-sm text-muted">{t.skills.s1_desc}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-body text-lg font-semibold text-ink mb-2">{t.skills.s2_name}</h3>
              <p className="font-body text-sm text-muted">{t.skills.s2_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-black/5 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">{t.cta.title}</h2>
          <p className="font-body text-base text-muted mb-10">{t.cta.subtitle}</p>
          <Link to="/kontakt" className="inline-flex items-center justify-center font-body text-sm font-semibold text-white bg-accent px-10 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
            {t.cta.btn}
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/5 bg-[#F7F3EE]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted">© {new Date().getFullYear()} Anamaria Sverić. {t.footer.rights}</p>
          <p className="font-body text-sm text-muted">{t.footer.made}</p>
          <Link to="/privacy" className="font-body text-sm text-muted hover:text-ink transition-colors duration-300">
            {t.footer.privacy}
          </Link>
        </div>
      </footer>

    </main>
  )
}
