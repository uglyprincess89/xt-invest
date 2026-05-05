import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { products, company, seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.home.title,
  description: seo.pages.home.description,
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 6)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a2844] via-navy to-navy-light text-white overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.055] pointer-events-none" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
          <circle cx="900" cy="80" r="380" fill="none" stroke="white" strokeWidth="70"/>
          <circle cx="1100" cy="440" r="260" fill="none" stroke="white" strokeWidth="50"/>
          <circle cx="80" cy="380" r="200" fill="none" stroke="white" strokeWidth="42"/>
        </svg>
        <div className="relative max-w-7xl mx-auto px-6 py-10">
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Autorizovaný reseller Becton Dickinson pro ČR
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-4 max-w-2xl">
            Autorizovaný distributor{' '}
            <em className="not-italic text-teal">Becton Dickinson</em>
            <br />pro zdravotnická zařízení v České republice
          </h1>
          <p className="text-white/75 text-sm leading-relaxed max-w-xl mb-6">
            Rychlé dodávky originální injekční techniky, Vacutainer™ systémů a laboratorních
            řešení BD. Osobní přístup, férové B2B podmínky a spolehlivost, na kterou se můžete
            spolehnout každý den.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/katalog" className="bg-teal text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-teal-dark transition-colors text-sm">
              Prohlédnout katalog produktů BD
            </Link>
            <Link href="/kontakt" className="bg-white/10 border border-white/30 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-sm">
              Získat nabídku na míru
            </Link>
          </div>
          <div className="border-t border-white/15 pt-6 flex flex-wrap gap-x-8 gap-y-2">
            {['Autorizovaný reseller BD pro ČR', '15+ kategorií produktů', 'Dodávky po celé ČR', 'Originální certifikované produkty'].map(item => (
              <span key={item} className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BD AUTORIZACE - dominantní vizuální blok */}
      <section className="bg-gradient-to-r from-[#044ED7] via-[#0556ed] to-[#044ED7] py-6 px-6 relative overflow-hidden">
        {/* Subtilní textura */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="40"/>
          <circle cx="1100" cy="100" r="100" fill="none" stroke="white" strokeWidth="50"/>
        </svg>
        <div className="relative max-w-7xl mx-auto flex items-center gap-5 flex-wrap">
          {/* BD logo blok */}
          <div className="bg-white rounded-lg px-5 py-2.5 shrink-0 shadow-md">
            <Image src="/images/bd-logo.svg" alt="Becton Dickinson" width={75} height={30} />
          </div>
          {/* Textový obsah */}
          <div className="flex-1 min-w-[200px]">
            <p className="text-white text-base font-semibold leading-tight mb-0.5">
              Becton, Dickinson and Company
            </p>
            <p className="text-white/80 text-xs leading-relaxed">
              Světový lídr v oblasti zdravotnických pomůcek a diagnostiky
            </p>
          </div>
          {/* Auth pill - výraznější */}
          <div className="flex items-center gap-2 bg-white text-[#044ED7] text-xs font-bold px-4 py-2 rounded-lg shadow-md shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            AUTORIZOVANÝ RESELLER
          </div>
        </div>
      </section>

      {/* PROČ MY */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-navy mb-3">Jsme víc než jen distributor</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">Váš spolehlivý partner v oblasti zdravotnického materiálu BD.</p>
            <div className="w-8 h-0.5 bg-teal rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🛡️', bg: 'bg-[#e6eefb]', title: 'Originální produkty BD', text: 'Jako oficiálně autorizovaný reseller BD garantujeme 100% pravost a plnou certifikaci všech produktů.' },
              { icon: '🚚', bg: 'bg-teal/10', title: 'Rychlé dodávky', text: 'Vlastní sklad + flexibilní logistika. Standardní dodávky do 24–48 hodin, urgentní požadavky řešíme operativně.' },
              { icon: '🤝', bg: 'bg-navy/10', title: 'Osobní přístup', text: 'Každý klient má svého stálého obchodního zástupce. Individuální podmínky a rychlá reakce vždy.' },
              { icon: '🔬', bg: 'bg-teal/10', title: 'Komplexní řešení', text: 'Široký sortiment BD — od injekční techniky a Vacutainer™ odběrových systémů až po laboratorní řešení.' },
            ].map(card => (
              <div key={card.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-teal hover:shadow-md transition-all">
                <div className={`w-11 h-11 ${card.bg} rounded-lg flex items-center justify-center text-lg mb-4`}>{card.icon}</div>
                <h3 className="text-sm font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KATALOG */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-1">
            <h2 className="text-xl font-semibold text-navy">Vybrané produkty Becton Dickinson</h2>
            <Link href="/katalog" className="text-sm text-teal hover:text-teal-dark font-semibold transition-colors shrink-0">Zobrazit vše →</Link>
          </div>
          <p className="text-sm text-gray-500 mb-6">Injekční technika • Odběrový materiál • Kanyly • Laboratorní řešení</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/katalog" className="inline-block bg-navy text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-navy-dark transition-colors text-sm">
              Zobrazit kompletní katalog (15+ kategorií)
            </Link>
          </div>
        </div>
      </section>

      {/* O NÁS TEASER */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">O společnosti</p>
            <h2 className="text-xl font-semibold text-navy mb-4 leading-snug">
              {company.name} —<br />autorizovaný distributor BD pro ČR
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Jsme dynamická česká společnost specializující se na distribuci zdravotnického materiálu
              Becton Dickinson. Náš cíl je jednoduchý — zajistit klinikám, laboratořím a ordinacím
              spolehlivý přísun originálních produktů BD za férových podmínek.
            </p>
            <div className="bg-teal/8 border-l-3 border-teal rounded-r-lg p-4 mb-5 text-sm text-gray-700 leading-relaxed" style={{borderLeftWidth:'3px', borderLeftColor:'var(--teal, #2bbfa4)', borderLeftStyle:'solid', background:'rgba(43,191,164,0.07)', borderRadius:'0 8px 8px 0', padding:'12px 16px'}}>
              💡 Díky vlastní provozovně — Lékárně u Robina v Praze — známe realitu zdravotnické praxe z první ruky. To nám umožňuje lépe chápat vaše potřeby a nabízet řešení, která skutečně fungují.
            </div>
            <div className="flex gap-3 items-center">
              <Link href="/o-nas" className="text-sm font-medium text-teal hover:text-teal-dark transition-colors">Více o nás →</Link>
              <span className="text-gray-200">|</span>
              <Link href="/kontakt" className="text-sm font-medium text-navy hover:text-teal transition-colors">Kontaktovat obchodního zástupce →</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '📦', num: '15+', label: 'kategorií produktů BD' },
              { icon: '✓', num: '100%', label: 'originální produkty' },
              { icon: '🤝', num: 'B2B', label: 'individuální podmínky' },
              { icon: '📍', num: 'ČR', label: 'celostátní pokrytí' },
            ].map(f => (
              <div key={f.label} className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center">
                <div className="text-2xl mb-1">{f.icon}</div>
                <p className="text-2xl font-bold text-navy">{f.num}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENZE */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-navy mb-1">Důvěřují nám zdravotnická zařízení po celé ČR</h2>
          <div className="w-8 h-0.5 bg-teal rounded mb-8" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { text: 'Spolehlivý dodavatel s výbornou reakcí na urgentní požadavky. Vždy doručí včas a materiál je originální.', autor: 'Vedoucí zásobování', zarizeni: 'Soukromé zdravotnické centrum, Praha', tag: 'Zdravotnické centrum', tagColor: 'bg-[#f0f4ff] text-navy' },
              { text: 'Profesionální přístup, kvalitní materiál BD a příjemná komunikace. Dlouhodobá spolupráce na vysoké úrovni.', autor: 'Vedoucí laboratoře', zarizeni: 'Laboratoř, Praha', tag: 'Laboratoř', tagColor: 'bg-teal/10 text-teal-dark' },
              { text: 'Oceňujeme flexibilitu a rychlost vyřízení. Materiál je vždy originální, v perfektní kvalitě a za rozumné ceny.', autor: 'Provozní manažer', zarizeni: 'Klinika, Brno', tag: 'Klinika', tagColor: 'bg-[#e6eefb] text-[#044ED7]' },
            ].map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm text-gray-700 leading-relaxed italic mb-4">„{r.text}"</p>
                <p className="text-xs font-semibold text-navy">{r.autor}</p>
                <p className="text-xs text-gray-400 mb-2">{r.zarizeni}</p>
                <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-medium ${r.tagColor}`}>{r.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT CTA */}
      <section className="py-12 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Preferujete přímý kontakt?</h2>
            <p className="text-white/70 text-sm">Volejte přímo nebo napište — odpovídáme do 24 hodin.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={`tel:${company.kontakt.telefon}`} className="flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-dark transition-colors text-sm">
              📞 {company.kontakt.telefon}
            </a>
            <Link href="/kontakt" className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm">
              Napsat zprávu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
