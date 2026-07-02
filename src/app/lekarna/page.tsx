import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { IconDocument, IconTruck, IconPill, IconPhone } from '@/components/icons'
import { company, seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.lekarna.title,
  description: seo.pages.lekarna.description,
}

const sluzby = [
  { Icon: IconDocument, title: 'Výdej na žádanky', text: 'Pravidelný výdej léčiv na základě žádanek pro zdravotnická zařízení. Rychlé a spolehlivé vyřízení.' },
  { Icon: IconTruck, title: 'Zásobování zařízení', text: 'Pravidelné zásobování ambulancí, klinik a ordinací s individuálním harmonogramem dodávek.' },
  { Icon: IconPill, title: 'Léčiva na předpis', text: 'Kompletní sortiment léčiv na lékařský předpis. Spolupráce s pojišťovnami a přímý výdej.' },
  { Icon: IconPhone, title: 'Urgentní objednávky', text: `V případě potřeby zajistíme urgentní dodávku léčiv. Kontakt: ${company.lekarna.telefon}.` },
]

const dnyVTydnu = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne']

export default function LekarnaPage() {
  const dnesIndex = new Date().getDay()
  const dnesMap = [6, 0, 1, 2, 3, 4, 5]
  const dnesDenIndex = dnesMap[dnesIndex]

  return (
    <>
      <PageHero overline="Vlastní provozovna" title={company.lekarna.nazev}>
        <p>
          {company.lekarna.ulice}, {company.lekarna.psc} {company.lekarna.mesto}.
          Profesionální lékárenské zásobování pro zdravotnická zařízení.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-5">
            {sluzby.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:border-teal/40 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="w-11 h-11 bg-teal-light text-teal-dark rounded-xl flex items-center justify-center mb-4">
                  <s.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card">
            <h2 className="text-overline uppercase text-teal-dark mb-4">Otevírací doba</h2>
            {dnyVTydnu.map((den, i) => {
              const cas = company.lekarna.oteviraci[den as keyof typeof company.lekarna.oteviraci]
              const jeDnes = i === dnesDenIndex
              const jeZavreno = cas === 'Zavřeno'
              return (
                <div key={den} className={`flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 text-[15px] px-1 ${jeDnes ? 'bg-teal-light/60 rounded-lg -mx-1 px-2' : ''}`}>
                  <span className={`flex items-center gap-2 ${jeDnes ? 'text-teal-dark font-medium' : 'text-gray-500'}`}>
                    {jeDnes && (
                      <span className={`w-2 h-2 rounded-full ${jeZavreno ? 'bg-red-500' : 'bg-emerald-500'}`} />
                    )}
                    {den}{jeDnes ? ' (dnes)' : ''}
                  </span>
                  <span className={`font-medium ${jeZavreno ? 'text-red-500' : jeDnes ? 'text-teal-dark' : 'text-navy'}`}>
                    {cas}
                  </span>
                </div>
              )
            })}
            <div className="mt-4 pt-4 border-t border-gray-100 text-sm space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Telefon</span>
                <a href={`tel:${company.lekarna.telefon}`} className="text-teal-dark font-medium hover:underline">{company.lekarna.telefon}</a>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>E-mail</span>
                <a href={`mailto:${company.lekarna.email}`} className="text-teal-dark font-medium hover:underline">{company.lekarna.email}</a>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Web</span>
                <a href="https://www.lekarnafamily.cz" target="_blank" rel="noopener noreferrer" className="text-teal-dark font-medium hover:underline">
                  lekarnafamily.cz ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 relative isolate overflow-hidden bg-navy-ink text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(155deg,#0a2036_10%,#0f3358_70%,#164a70_120%)]"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-h3 mb-2">Navštivte oficiální web lékárny</h3>
            <p className="text-white/70 text-[15px]">
              Kompletní sortiment léčiv, online objednávky a další informace najdete na webu Lékárny u Robina.
            </p>
          </div>
          <a
            href="https://www.lekarnafamily.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group shrink-0"
          >
            lekarnafamily.cz
            <svg
              className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
