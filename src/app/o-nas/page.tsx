import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import {
  IconShieldCheck,
  IconTruck,
  IconUsers,
  IconBuilding,
  IconMicroscope,
  IconStethoscope,
  IconPhone,
} from '@/components/icons'
import { company, seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.oNas.title,
  description: seo.pages.oNas.description,
  alternates: { canonical: '/o-nas' },
}

const vyhody = [
  { Icon: IconShieldCheck, title: 'Autorizace BD', text: 'Oficiálně autorizovaný obchodní partner Becton Dickinson pro ČR. Všechny produkty 100% originální a certifikované.' },
  { Icon: IconTruck, title: 'Flexibilní dodávky', text: 'Běžně poptávaný sortiment držíme skladem a expedujeme obratem. Ostatní produkty objednáváme přímo u BD; termín dodání potvrdíme po obdržení poptávky.' },
  { Icon: IconUsers, title: 'Osobní přístup', text: 'Stálý obchodní zástupce pro každého klienta, individuální cenové podmínky a rychlá reakce.' },
  { Icon: IconBuilding, title: 'Znalost praxe', text: 'Provozujeme Lékárnu u Robina — rozumíme reálným každodenním potřebám zdravotníků z první ruky.' },
]

export default function ONasPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        overline="O společnosti"
        title={<>{company.name} —<br />autorizovaný obchodní partner BD pro Českou republiku</>}
      >
        <p>
          Jsme dynamická česká společnost specializující se na distribuci zdravotnického materiálu
          Becton Dickinson. Máme vlastní sklad, rychlou logistiku a tým lidí, kteří rozumí
          potřebám klinik, laboratoří i menších ordinací.
        </p>
        <p className="mt-5 text-sm text-white/50 border-l-2 border-teal/40 pl-4">
          Tento web je určen výhradně odborníkům ve zdravotnictví a osobám oprávněným nakupovat zdravotnické prostředky.
        </p>
      </PageHero>

      {/* FIREMNÍ ÚDAJE */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card">
            <h2 className="text-overline uppercase text-teal-dark mb-4 pb-3 border-b border-gray-100">Identifikační údaje</h2>
            {[
              ['Obchodní firma', company.name],
              ['IČO', company.ico],
              ['DIČ', company.dic],
              ['Sídlo', `${company.sidlo.ulice}, ${company.sidlo.cast}, ${company.sidlo.psc} ${company.sidlo.mesto}`],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-start py-3 border-b border-gray-100 text-[15px] last:border-0 gap-4">
                <span className="text-gray-500 shrink-0">{l}</span>
                <span className="font-medium text-navy text-right">{v}</span>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card">
            <h2 className="text-overline uppercase text-teal-dark mb-4 pb-3 border-b border-gray-100">Kontaktní údaje</h2>
            {[
              ['Telefon', company.kontakt.telefon, company.kontakt.telefonProvoz],
              ['E-mail', company.kontakt.email],
              ['Web', company.kontakt.web],
              ['Provozovna', `${company.lekarna.nazev}, ${company.lekarna.ulice}, ${company.lekarna.mesto}`],
            ].map(([l, v, hint]) => (
              <div key={l} className="flex justify-between items-start py-3 border-b border-gray-100 text-[15px] last:border-0 gap-4">
                <span className="text-gray-500 shrink-0">{l}</span>
                <span className="font-medium text-navy text-right">
                  {v}
                  {hint && <span className="block text-sm text-gray-400 font-normal mt-0.5">{hint}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÝHODY */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-overline uppercase text-teal-dark mb-3">Výhody spolupráce</p>
          <h2 className="text-h2 text-navy mb-10 md:mb-12">Proč spolupracovat s námi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vyhody.map(v => (
              <div
                key={v.title}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="w-12 h-12 bg-teal-light text-teal-dark rounded-xl flex items-center justify-center mb-5">
                  <v.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMU SLOUŽÍME */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-overline uppercase text-teal-dark mb-3">Klienti</p>
          <h2 className="text-h2 text-navy mb-10 md:mb-12">Komu sloužíme</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: IconBuilding, title: 'Kliniky a zdravotnická centra', text: 'Pravidelné zásobování širokým sortimentem BD pro chirurgická i interní oddělení.' },
              { Icon: IconMicroscope, title: 'Laboratoře', text: 'Vacutainer® odběrové systémy, speciální zkumavky pro molekulárně-diagnostické testy, PAXgene® stabilizační média.' },
              { Icon: IconStethoscope, title: 'Ordinace a ambulance', text: 'Menší flexibilní objednávky bez minimálních odběrů — injekční technika, jehly, stříkačky, lancety.' },
            ].map(k => (
              <div
                key={k.title}
                className="bg-white border border-gray-200/80 rounded-2xl p-7 shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="w-12 h-12 bg-navy/[0.06] text-navy rounded-xl flex items-center justify-center mb-5">
                  <k.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{k.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="text-h2 mb-3">Máte zájem o spolupráci?</h2>
            <p className="text-white/70 text-base">Připravíme individuální B2B nabídku do 24 hodin.</p>
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
