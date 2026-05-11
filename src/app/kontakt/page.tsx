import type { Metadata } from 'next'
import { company, seo } from '@/lib/data'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: seo.pages.kontakt.title,
  description: seo.pages.kontakt.description,
}

export default function KontaktPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-dark to-navy text-white py-12 px-6 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="1000" cy="50" r="300" fill="none" stroke="white" strokeWidth="60"/>
          <circle cx="200" cy="350" r="200" fill="none" stroke="white" strokeWidth="40"/>
        </svg>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Kontaktujte nás</h1>
          <p className="text-white/75 text-sm max-w-xl">Připravíme pro vás individuální B2B nabídku. Odpovídáme zpravidla do 24 hodin.</p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto mb-8">
          <ContactForm />
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-medium text-navy mb-3 pb-2 border-b-2 border-teal/20">{company.name} — sídlo</h2>
            {[
              ['IČO', company.ico],
              ['DIČ', company.dic],
              ['Adresa', `${company.sidlo.ulice}, ${company.sidlo.cast}, ${company.sidlo.psc} ${company.sidlo.mesto}`],
              ['Telefon', company.kontakt.telefon],
              ['E-mail', company.kontakt.email],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start py-2.5 border-b border-gray-50 text-sm last:border-0">
                <span className="text-gray-400 text-xs w-20 shrink-0 pt-0.5">{label}</span>
                <span className="font-medium text-navy text-right">
                  {label === 'Telefon' ? <a href={`tel:${value}`} className="text-teal-dark hover:underline">{value}</a>
                  : label === 'E-mail' ? <a href={`mailto:${value}`} className="text-teal-dark hover:underline">{value}</a>
                  : value}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-medium text-navy mb-3 pb-2 border-b-2 border-teal/20">{company.lekarna.nazev} — provozovna</h2>
            {[
              ['Adresa', `${company.lekarna.ulice}, ${company.lekarna.psc} ${company.lekarna.mesto}`],
              ['Telefon', company.lekarna.telefon],
              ['E-mail', company.lekarna.email],
              ['Po–Pá', '8:00 – 18:00'],
              ['So–Ne', 'Zavřeno'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start py-2.5 border-b border-gray-50 text-sm last:border-0">
                <span className="text-gray-400 text-xs w-20 shrink-0 pt-0.5">{label}</span>
                <span className={`font-medium text-right ${label === 'So–Ne' ? 'text-red-500' : 'text-navy'}`}>
                  {label === 'Telefon' ? <a href={`tel:${value}`} className="text-teal-dark hover:underline">{value}</a>
                  : label === 'E-mail' ? <a href={`mailto:${value}`} className="text-teal-dark hover:underline">{value}</a>
                  : value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
