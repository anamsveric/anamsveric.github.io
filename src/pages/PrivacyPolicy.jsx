export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1278] via-[#1E0A4E] to-[#0E0630] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[700px] h-[550px] bg-gradient-to-br from-orange-400/40 via-rose-500/25 to-transparent rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-violet-500/40 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-16 w-full">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-12">
            Politika privatnosti
          </h1>

          <div className="space-y-10 font-body text-white/70 leading-relaxed">

            <div>
              <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-3">Posljednja izmjena</p>
              <p>{new Date().toLocaleDateString('hr-HR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
            </div>

            <div>
              <h2 className="text-white text-lg font-semibold mb-3">Uvod</h2>
              <p>
                Ova stranica (anamsveric.github.io) je osobni portfolio. Poštujemo vašu privatnost i ovom politikom
                objašnjavamo koje podatke prikupljamo i kako ih koristimo.
              </p>
            </div>

            <div>
              <h2 className="text-white text-lg font-semibold mb-3">Google AdSense i kolačići</h2>
              <p className="mb-3">
                Koristimo Google AdSense za prikazivanje oglasa. Google kao treća strana koristi kolačiće (cookies)
                za prikazivanje oglasa temeljenih na vašim prethodnim posjetima ovoj i drugim web stranicama.
              </p>
              <p className="mb-3">
                Google-ov način korištenja reklamnih kolačića omogućava mu prikazivanje oglasa na temelju vaših
                posjeta ovoj i drugim stranicama na Internetu.
              </p>
              <p>
                Možete isključiti personalizirane oglase posjetom stranice{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-colors"
                >
                  Google postavki oglasa
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-white text-lg font-semibold mb-3">Podaci koje prikupljamo</h2>
              <p className="mb-3">
                Ova stranica ne prikuplja osobne podatke izravno. Kontakt informacije koje nam pošaljete (email, telefon)
                koristimo isključivo za komunikaciju s vama i ne dijelimo ih s trećim stranama.
              </p>
              <p>
                Analitičke i reklamne podatke prikuplja Google sukladno njihovoj{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-colors"
                >
                  politici privatnosti
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-white text-lg font-semibold mb-3">Vaša prava (GDPR)</h2>
              <p className="mb-3">Kao stanovnik EEA-e imate pravo na:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60">
                <li>pristup osobnim podacima koji se odnose na vas</li>
                <li>ispravak netočnih podataka</li>
                <li>brisanje podataka ("pravo na zaborav")</li>
                <li>prigovor na obradu podataka</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-lg font-semibold mb-3">Kontakt</h2>
              <p>
                Za sva pitanja vezana uz privatnost možete nam se obratiti na{' '}
                <a
                  href="mailto:anamaria.sveric@gmail.com"
                  className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-colors"
                >
                  anamaria.sveric@gmail.com
                </a>
                .
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-white/30">
              © {new Date().getFullYear()} Anamaria Sverić. Sva prava pridržana.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
