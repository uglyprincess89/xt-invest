import type { Metadata } from 'next'
import { company, seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.lekarna.title,
  description: seo.pages.lekarna.description,
}

const sluzby = [
  { icon: '📋', title: 'Výdej na žádanky', text: 'Pravidelný výdej léčiv na základě žádanek pro zdravotnická zařízení. Rychlé a spolehlivé vyřízení.' },
  { icon: '🚚', title: 'Zásobování zařízení', text: 'Pravidelné zásobování ambulancí, klinik a ordinací s individuálním harmonogramem dodávek.' },
  { icon: '💊', title: 'Léčiva na předpis', text: 'Kompletní sortiment léčiv na lékařský předpis. Spolupráce s pojišťovnami a přímý výdej.' },
  { icon: '📞', title: 'Urgentní objednávky', text: `V případě potřeby zajistíme urgentní dodávku léčiv. Kontakt: ${company.lekarna.telefon}.` },
]

const dnyVTydnu = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne']

export default function LekarnaPage() {
  const dnesIndex = new Date().getDay()
  const dnesMap = [6, 0, 1, 2, 3, 4, 5]
  const dnesDenIndex = dnesMap[dnesIndex]

  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-dark to-navy text-white py-10 px-6 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="1000" cy="50" r="300" fill="none" stroke="white" strokeWidth="60"/>
          <circle cx="200" cy="350" r="200" fill="none" stroke="white" strokeWidth="40"/>
        </svg>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">{company.lekarna.nazev}</h1>
          <p className="text-white/75 text-sm leading-relaxed max-w-xl">
            {company.lekarna.ulice}, {company.lekarna.psc} {company.lekarna.mesto}.
            Profesionální lékárenské zásobování pro zdravotnická zařízení.
          </p>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-4">
            {sluzby.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center text-lg mb-3">{s.icon}</div>
                <h3 className="text-sm font-semibold text-navy mb-1.5">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-navy mb-4">Otevírací doba</h2>
            {dnyVTydnu.map((den, i) => {
              const cas = company.lekarna.oteviraci[den as keyof typeof company.lekarna.oteviraci]
              const jeDnes = i === dnesDenIndex
              const jeZavreno = cas === 'Zavřeno'
              return (
                <div key={den} className={`flex justify-between items-center py-2.5 border-b border-gray-200 last:border-0 text-sm px-1 ${jeDnes ? 'bg-teal/5 rounded -mx-1 px-2' : ''}`}>
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
            <div className="mt-4 pt-4 border-t border-gray-200 text-xs space-y-1.5">
              <div className="flex justify-between text-gray-600">
                <span>Telefon</span>
                <a href={`tel:${company.lekarna.telefon}`} className="text-teal-dark font-medium hover:underline">{company.lekarna.telefon}</a>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>E-mail</span>
                <a href={`mailto:${company.lekarna.email}`} className="text-teal-dark font-medium hover:underline">{company.lekarna.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
