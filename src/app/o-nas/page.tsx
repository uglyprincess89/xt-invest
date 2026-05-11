import type { Metadata } from 'next'
import Link from 'next/link'
import { company, seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.oNas.title,
  description: seo.pages.oNas.description,
}

const vyhody = [
  { icon: '🛡️', title: 'Autorizace BD', text: 'Oficiálně autorizovaný obchodní partner Becton Dickinson pro ČR. Všechny produkty 100% originální a certifikované.' },
  { icon: '🚚', title: 'Rychlé dodávky', text: 'Vlastní sklad + flexibilní logistika. Standardní dodávky do 24–48 hodin, urgentní požadavky operativně.' },
  { icon: '🤝', title: 'Osobní přístup', text: 'Stálý obchodní zástupce pro každého klienta, individuální cenové podmínky a rychlá reakce.' },
  { icon: '🏥', title: 'Znalost praxe', text: 'Provozujeme Lékárnu u Robina — rozumíme reálným každodenním potřebám zdravotníků z první ruky.' },
]

export default function ONasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0a2844] to-navy text-white py-10 px-6 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="1000" cy="50" r="300" fill="none" stroke="white" strokeWidth="60"/>
          <circle cx="200" cy="350" r="200" fill="none" stroke="white" strokeWidth="40"/>
        </svg>
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">O společnosti</p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 max-w-2xl leading-snug">
            {company.name} —<br />autorizovaný obchodní partner BD pro Českou republiku
          </h1>
          <p className="text-white/75 text-sm leading-relaxed max-w-2xl">
            Jsme dynamická česká společnost specializující se na distribuci zdravotnického materiálu
            Becton Dickinson. Máme vlastní sklad, rychlou logistiku a tým lidí, kteří rozumí
            potřebám klinik, laboratoří i menších ordinací.
          </p>
          <p className="mt-4 text-xs text-white/50 max-w-xl leading-relaxed border-l-2 border-teal/40 pl-3">
            Tento web je určen výhradně odborníkům ve zdravotnictví a osobám oprávněným nakupovat zdravotnické prostředky.
          </p>
        </div>
      </section>

      {/* FIREMNÍ ÚDAJE */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-navy mb-3 pb-2 border-b-2 border-teal/20">Identifikační údaje</h2>
            {[
              ['Obchodní firma', company.name],
              ['IČO', company.ico],
              ['DIČ', company.dic],
              ['Sídlo', `${company.sidlo.ulice}, ${company.sidlo.cast}, ${company.sidlo.psc} ${company.sidlo.mesto}`],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-start py-2.5 border-b border-gray-100 text-sm last:border-0 gap-4">
                <span className="text-gray-500 shrink-0">{l}</span>
                <span className="font-medium text-navy text-right">{v}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-navy mb-3 pb-2 border-b-2 border-teal/20">Kontaktní údaje</h2>
            {[
              ['Telefon', company.kontakt.telefon],
              ['E-mail', company.kontakt.email],
              ['Web', company.kontakt.web],
              ['Provozovna', `${company.lekarna.nazev}, ${company.lekarna.ulice}, ${company.lekarna.mesto}`],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-start py-2.5 border-b border-gray-100 text-sm last:border-0 gap-4">
                <span className="text-gray-500 shrink-0">{l}</span>
                <span className="font-medium text-navy text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÝHODY */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-navy mb-1">Proč spolupracovat s námi</h2>
          <div className="w-8 h-0.5 bg-teal rounded mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vyhody.map(v => (
              <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-teal hover:shadow-sm transition-all">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-sm font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMU SLOUŽÍME */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-navy mb-1">Komu sloužíme</h2>
          <div className="w-8 h-0.5 bg-teal rounded mb-8" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '🏥', title: 'Kliniky a zdravotnická centra', text: 'Pravidelné zásobování širokým sortimentem BD pro chirurgická i interní oddělení.' },
              { icon: '🔬', title: 'Laboratoře', text: 'Vacutainer® odběrové systémy, speciální zkumavky pro molekulárně-diagnostické testy, PAXgene® stabilizační média.' },
              { icon: '👨‍⚕️', title: 'Ordinace a ambulance', text: 'Menší flexibilní objednávky bez minimálních odběrů — injekční technika, jehly, stříkačky, lancety.' },
            ].map(k => (
              <div key={k.title} className="bg-gradient-to-br from-blue-50 to-white border border-gray-100 rounded-xl p-6">
                <div className="text-3xl mb-3">{k.icon}</div>
                <h3 className="text-sm font-semibold text-navy mb-2">{k.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-lg font-semibold mb-1">Máte zájem o spolupráci?</h2>
            <p className="text-white/70 text-sm">Připravíme individuální B2B nabídku do 24 hodin.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={`tel:${company.kontakt.telefon}`} className="bg-teal text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-dark transition-colors text-sm">
              {company.kontakt.telefon}
            </a>
            <Link href="/kontakt" className="bg-white/10 border border-white/30 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors text-sm">
              Napsat zprávu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
