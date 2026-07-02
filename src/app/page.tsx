import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import {
  IconShieldCheck,
  IconTruck,
  IconUsers,
  IconMicroscope,
  IconArrowRight,
  IconPhone,
  IconBulb,
  IconBox,
  IconCheck,
  IconMapPin,
} from '@/components/icons'
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
      <Hero />

      {/* BD STRIP */}
      <div className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-5 flex-wrap">
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-card shrink-0">
            <Image src="/images/bd-logo.svg" alt="Becton Dickinson" width={65} height={25} />
          </div>
          <p className="text-[15px] text-gray-600 flex-1">
            <strong className="font-semibold text-navy">Becton, Dickinson and Company</strong> — světový lídr v oblasti zdravotnických pomůcek a diagnostiky
          </p>
          <span className="bg-[#e6eefb] text-[#044ED7] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#044ED7]/20 shrink-0">
            Originální distribuce BD
          </span>
        </div>
      </div>

      {/* PROČ MY */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-overline uppercase text-teal-dark mb-3">Proč XT-Invest</p>
            <h2 className="text-h2 text-navy max-w-3xl mx-auto">
              Váš spolehlivý partner v oblasti zdravotnického materiálu BD po celé ČR
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: IconShieldCheck, tint: 'bg-teal-light text-teal-dark', title: 'Originální produkty BD', text: 'Žádné šedé zboží. Každý produkt s plnou BD dokumentací, CE IVD certifikací a sledovatelností šarže.' },
              { Icon: IconTruck, tint: 'bg-navy/[0.06] text-navy', title: 'Flexibilní dodávky', text: 'Běžně poptávaný sortiment držíme skladem a expedujeme obratem. Ostatní produkty objednáváme přímo u BD — termín dodání potvrdíme po obdržení poptávky.' },
              { Icon: IconUsers, tint: 'bg-teal-light text-teal-dark', title: 'Osobní přístup', text: 'Každý klient má stálého obchodního zástupce. Individuální podmínky a rychlé reakce.' },
              { Icon: IconMicroscope, tint: 'bg-navy/[0.06] text-navy', title: 'Komplexní řešení', text: 'Široký sortiment BD — od injekční techniky a Vacutainer™ odběrových systémů až po laboratorní řešení.' },
            ].map(card => (
              <div
                key={card.title}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className={`w-12 h-12 ${card.tint} rounded-xl flex items-center justify-center mb-5`}>
                  <card.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KATALOG */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-2">
            <div>
              <p className="text-overline uppercase text-teal-dark mb-3">Katalog</p>
              <h2 className="text-h2 text-navy">Vybrané produkty Becton Dickinson</h2>
            </div>
            <Link href="/katalog" className="group hidden sm:inline-flex items-center gap-1.5 text-[15px] text-navy font-semibold hover:text-teal-dark transition-colors shrink-0 pb-1">
              Zobrazit vše
              <IconArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
          </div>
          <p className="text-base text-gray-600 mb-10">Injekční technika • Odběrový materiál • Kanyly • Laboratorní řešení</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 bg-navy text-white text-base font-semibold px-8 py-4 rounded-xl shadow-card transition-all duration-200 ease-out hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Zobrazit kompletní katalog
              <IconArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Nabídku průběžně rozšiřujeme a doplňujeme — pokud nenajdete konkrétní produkt, ozvěte se nám.
            </p>
          </div>
        </div>
      </section>

      {/* O NÁS TEASER */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-overline uppercase text-teal-dark mb-3">O společnosti</p>
            <h2 className="text-h2 text-navy mb-5">
              {company.name} —<br />distribuce zdravotnického materiálu BD
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Jsme dynamická česká společnost specializující se na distribuci zdravotnického materiálu
              Becton Dickinson. Náš cíl je jednoduchý — zajistit klinikám, laboratořím a ordinacím
              spolehlivý přísun originálních produktů BD za férových podmínek.
            </p>
            <div className="flex gap-4 border-l-2 border-teal bg-teal-light/60 rounded-r-xl p-5 mb-7 text-[15px] text-gray-700 leading-relaxed">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-dark shadow-card shrink-0">
                <IconBulb className="w-5 h-5" />
              </div>
              <p>Provozujeme vlastní lékárnu — Lékárnu u Robina v Praze. Každý den tam řešíme to, co i vy: pacienty, sklady, papírování. Víme proto, co v praxi funguje a co zůstává jen na papíře.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
              <Link href="/o-nas" className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy hover:text-teal-dark transition-colors">
                Více o nás
                <IconArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <Link href="/kontakt" className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy hover:text-teal-dark transition-colors">
                Kontaktovat obchodního zástupce
                <IconArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { Icon: IconBox, num: 'BD', label: 'partner pro ČR' },
              { Icon: IconCheck, num: '100%', label: 'originální produkty' },
              { Icon: IconUsers, num: 'B2B', label: 'individuální podmínky' },
              { Icon: IconMapPin, num: 'ČR', label: 'celostátní pokrytí' },
            ].map(f => (
              <div key={f.label} className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-card">
                <div className="w-11 h-11 mx-auto bg-teal-light text-teal-dark rounded-full flex items-center justify-center mb-3">
                  <f.Icon className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold tracking-tight text-navy">{f.num}</p>
                <p className="text-sm text-gray-600 mt-1 leading-tight">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENZE */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-overline uppercase text-teal-dark mb-3">Reference</p>
          <h2 className="text-h2 text-navy mb-10 md:mb-12">Co o nás říkají klienti</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                hvezdy: '★★★★★',
                text: 'Hledali jsme někoho, s kým se dá normálně a lidsky mluvit a pro koho nejsme jen další kód v databázi. Oceňuji, že když zavolám, zvedne mi to hned konkrétní člověk a ne automat nebo nekonečné přepojování. Komunikace je příjemná a rychlá. Mám pocit, že je to s námi řešeno individuálně.',
                autor: 'Monika K.',
                role: 'Provozní manažerka',
                zarizeni: 'Soukromá klinika, Praha',
                tag: 'Klinika',
                tagColor: 'bg-[#e6eefb] text-[#044ED7]',
              },
              {
                hvezdy: '★★★★★',
                text: 'Nejdřív jsem měl trochu obavy z nové firmy, ale přístupem mě překvapili. Komunikace je jasná, rychlá a zboží je v pořádku. Je vidět, že se opravdu snaží a záleží jim na tom, abychom se vraceli. Za nás naprostá spokojenost s materiálem i dodáním.',
                autor: 'Ing. Marek S.',
                role: 'Vedoucí nákupu',
                zarizeni: 'Laboratoř, Praha',
                tag: 'Laboratoř',
                tagColor: 'bg-teal/10 text-teal-dark',
              },
              {
                hvezdy: '★★★★☆',
                text: 'Přešli jsme k nim od velkého distributora a je to znát hlavně na ochotě. Neřeší, jestli bereme paletu nebo jen pár drobností, přístup je pořád stejně férový. Ceny jsou nastavené rozumně a zatím nenastal žádný problém, který by nebyl vyřešen obratem.',
                autor: 'Patrik J.',
                role: 'Provozní manažer',
                zarizeni: 'Zdravotnické centrum, Brno',
                tag: 'Zdravotnické centrum',
                tagColor: 'bg-[#f0f4ff] text-navy',
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 flex flex-col shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="text-amber-400 text-sm tracking-[0.2em] mb-4" aria-label={`Hodnocení: ${r.hvezdy.split('★').length - 1} z 5 hvězd`}>{r.hvezdy}</div>
                <p className="text-[15px] text-gray-700 leading-relaxed mb-6 flex-1">„{r.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-navy">{r.autor}</p>
                  <p className="text-sm text-gray-500">{r.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{r.zarizeni}</p>
                  <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${r.tagColor}`}>{r.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT CTA */}
      <section className="relative isolate overflow-hidden py-16 md:py-20 px-6 bg-navy-ink text-white">
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(155deg,#0a2036_10%,#0f3358_70%,#164a70_120%)]"
          aria-hidden="true"
        />
        <div
          className="absolute -top-24 right-[10%] -z-10 h-[22rem] w-[22rem] rounded-full bg-teal/[0.12] blur-[100px]"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-h2 mb-3">Preferujete přímý kontakt?</h2>
            <p className="text-white/70 text-base">Volejte přímo nebo napište — odpovídáme do 24 hodin.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href={`tel:${company.kontakt.telefon}`} className="btn-primary">
              <IconPhone className="w-5 h-5" />
              {company.kontakt.telefon}
            </a>
            <Link href="/kontakt" className="btn-outline">
              Napsat zprávu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
