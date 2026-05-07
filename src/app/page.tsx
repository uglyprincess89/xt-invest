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
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-4 max-w-2xl">
            Autorizovaný obchodní partner <em className="not-italic text-teal">BD</em><br />
            pro zdravotnická zařízení v České republice
          </h1>
          <p className="text-white/90 text-sm leading-relaxed max-w-xl mb-6">
            Rychlé dodávky originální injekční techniky, Vacutainer™ systémů a laboratorních
            řešení BD. Osobní přístup, férové B2B podmínky a spolehlivost, na kterou se můžete
            spolehnout každý den.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/katalog" className="bg-teal text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-teal-dark transition-colors text-sm">
              Prohlédnout katalog produktů BD
            </Link>
            <Link href="/kontakt" className="bg-white/10 border border-white/50 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-sm">
              Získat nabídku na míru
            </Link>
          </div>
          <div className="border-t border-white/20 pt-6 flex flex-wrap gap-x-8 gap-y-2">
            {[
              'Osobní B2B přístup & podpora',
              '15+ kategorií produktů',
              'Vlastní sklad v Praze',
              'Originální certifikované produkty',
            ].map(item => (
              <span key={item} className="flex items-center gap-2 text-sm text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BD STRIP */}
      <div className="bg-blue-50 border-t-4 border-teal px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4 flex-wrap">
          <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-1.5 shrink-0">
            <Image src="/images/bd-logo.svg" alt="Becton Dickinson" width={65} height={25} />
          </div>
          <p className="text-sm text-gray-700 flex-1">
            <strong className="text-navy">Becton, Dickinson and Company</strong> — světový lídr v oblasti zdravotnických pomůcek a diagnostiky
          </p>
          <span className="bg-[#e6eefb] text-[#044ED7] text-xs font-semibold px-3 py-1 rounded-full border border-[#044ED7]/30 shrink-0">
            Autorizovaný obchodní partner
          </span>
        </div>
      </div>

      {/* PROČ MY */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-navy mb-3">
              Váš spolehlivý partner v oblasti zdravotnického materiálu BD po celé ČR
            </h2>
            <div className="w-8 h-0.5 bg-teal rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🛡️', bg: 'bg-[#e6eefb]', title: 'Originální produkty BD', text: 'Jako oficiálně autorizovaný obchodní partner BD garantujeme 100% pravost a plnou certifikaci všech produktů.' },
              { icon: '🚚', bg: 'bg-teal/10', title: 'Rychlé dodávky', text: 'Vlastní sklad + flexibilní logistika. Standardní dodávky do 24–48 hodin, urgentní požadavky řešíme operativně.' },
              { icon: '🤝', bg: 'bg-navy/10', title: 'Osobní přístup', text: 'Každý klient má svého stálého obchodního zástupce. Individuální podmínky a rychlá reakce vždy.' },
              { icon: '🔬', bg: 'bg-teal/10', title: 'Komplexní řešení', text: 'Široký sortiment BD — od injekční techniky a Vacutainer™ odběrových systémů až po laboratorní řešení.' },
            ].map(card => (
              <div key={card.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-teal hover:shadow-md transition-all">
                <div className={`w-11 h-11 ${card.bg} rounded-lg flex items-center justify-center text-lg mb-4`}>{card.icon}</div>
                <h3 className="text-sm font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
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
            <Link href="/katalog" className="text-sm text-navy font-semibold hover:text-teal-dark transition-colors shrink-0">Zobrazit vše →</Link>
          </div>
          <p className="text-sm text-gray-600 mb-6">Injekční technika • Odběrový materiál • Kanyly • Laboratorní řešení</p>
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
            <p className="text-xs font-semibold text-navy uppercase tracking-widest mb-3">O společnosti</p>
            <h2 className="text-xl font-semibold text-navy mb-4 leading-snug">
              {company.name} —<br />autorizovaný obchodní partner BD pro ČR
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Jsme dynamická česká společnost specializující se na distribuci zdravotnického materiálu
              Becton Dickinson. Náš cíl je jednoduchý — zajistit klinikám, laboratořím a ordinacím
              spolehlivý přísun originálních produktů BD za férových podmínek.
            </p>
            <div className="border-l-2 border-teal bg-teal/5 rounded-r-lg p-4 mb-5 text-sm text-gray-700 leading-relaxed">
              💡 Díky vlastní provozovně — Lékárně u Robina v Praze — známe realitu zdravotnické praxe z první ruky. To nám umožňuje lépe chápat vaše potřeby a nabízet řešení, která skutečně fungují.
            </div>
            <div className="flex gap-3 items-center">
              <Link href="/o-nas" className="text-sm font-semibold text-navy hover:text-teal-dark transition-colors">Více o nás →</Link>
              <span className="text-gray-300">|</span>
              <Link href="/kontakt" className="text-sm font-semibold text-navy hover:text-teal transition-colors">Kontaktovat obchodního zástupce →</Link>
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
                <p className="text-xs text-gray-600 mt-0.5 leading-tight">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENZE */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-navy mb-1">Co o nás říkají klienti</h2>
          <div className="w-8 h-0.5 bg-teal rounded mb-8" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                hvezdy: '★★★★★',
                text: 'Hledali jsme někoho, s kým se dá normálně mluvit a nejsme pro něj jen další kód v databázi. V XT-Investu nám vyšli vstříc i v momentě, kdy jsme potřebovali narychlo změnit objednávku. Oceňuji, že když zavolám, zvedne mi to hned konkrétní člověk a ne automat.',
                autor: 'Monika K.',
                role: 'Provozní manažerka',
                zarizeni: 'Soukromá klinika, Praha',
                tag: 'Klinika',
                tagColor: 'bg-[#e6eefb] text-[#044ED7]',
              },
              {
                hvezdy: '★★★★★',
                text: 'Na rovinu – nejdřív jsem měl trochu obavy z nové firmy, ale přístupem mě dostali. Komunikace je přehledná, rychlá a fakturace sedí do koruny. Je vidět, že se jako začínající e-shop fakt snaží a záleží jim na tom, abychom se vraceli. Za nás naprostá spokojenost s materiálem i dodáním.',
                autor: 'Ing. Marek S.',
                role: 'Vedoucí nákupu',
                zarizeni: 'Laboratoř, Praha',
                tag: 'Laboratoř',
                tagColor: 'bg-teal/10 text-teal-dark',
              },
              {
                hvezdy: '★★★★☆',
                text: 'Přešli jsme k nim od velkého distributora a je to znát hlavně na ochotě. Neřeší, jestli bereme paletu nebo jen pár drobností, přístup je pořád stejně férový. Ceny jsou nastavené rozumně a zatím nenastal jediný zádrhel, který by kluci z XT nevyřešili obratem.',
                autor: 'Patrik J.',
                role: 'Provozní manažer',
                zarizeni: 'Zdravotnické centrum, Brno',
                tag: 'Zdravotnické centrum',
                tagColor: 'bg-[#f0f4ff] text-navy',
              },
            ].map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col">
                <div className="text-yellow-500 text-sm mb-3">{r.hvezdy}</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">„{r.text}"</p>
                <div>
                  <p className="text-xs font-semibold text-navy">{r.autor}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                  <p className="text-xs text-gray-600 mb-2">{r.zarizeni}</p>
                  <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-medium ${r.tagColor}`}>{r.tag}</span>
                </div>
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
            <p className="text-white/90 text-sm">Volejte přímo nebo napište — odpovídáme do 24 hodin.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={`tel:${company.kontakt.telefon}`} className="flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-dark transition-colors text-sm">
              📞 {company.kontakt.telefon}
            </a>
            <Link href="/kontakt" className="flex items-center gap-2 bg-white/10 border border-white/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm">
              Napsat zprávu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
