import type { Metadata } from 'next'
import { company, seo } from '@/lib/data'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: seo.pages.kontakt.title,
  description: seo.pages.kontakt.description,
}

export default function KontaktPage() {
  return (
    <>
      <PageHero overline="Kontakt" title="Kontaktujte nás">
        <p>Připravíme pro vás individuální B2B nabídku. Odpovídáme zpravidla do 24 hodin.</p>
      </PageHero>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto mb-10">
          <ContactForm />
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card">
            <h2 className="text-overline uppercase text-teal-dark mb-4 pb-3 border-b border-gray-100">{company.name} — sídlo</h2>
            {[
              ['IČO', company.ico],
              ['DIČ', company.dic],
              ['Adresa', `${company.sidlo.ulice}, ${company.sidlo.cast}, ${company.sidlo.psc} ${company.sidlo.mesto}`],
              ['Telefon', company.kontakt.telefon],
              ['E-mail', company.kontakt.email],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start py-3 border-b border-gray-100 text-[15px] last:border-0">
                <span className="text-gray-500 text-sm w-20 shrink-0 pt-0.5">{label}</span>
                <span className="font-medium text-navy text-right">
                  {label === 'Telefon' ? (
                    <>
                      <a href={`tel:${value}`} className="text-teal-dark hover:underline">{value}</a>
                      <span className="block text-sm text-gray-400 font-normal mt-0.5">{company.kontakt.telefonProvoz}</span>
                    </>
                  ) : label === 'E-mail' ? <a href={`mailto:${value}`} className="text-teal-dark hover:underline">{value}</a>
                  : value}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card">
            <h2 className="text-overline uppercase text-teal-dark mb-4 pb-3 border-b border-gray-100">{company.lekarna.nazev} — provozovna</h2>
            {[
              ['Adresa', `${company.lekarna.ulice}, ${company.lekarna.psc} ${company.lekarna.mesto}`],
              ['Telefon', company.lekarna.telefon],
              ['E-mail', company.lekarna.email],
              ['Po–Pá', '8:00 – 18:00'],
              ['So–Ne', 'Zavřeno'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start py-3 border-b border-gray-100 text-[15px] last:border-0">
                <span className="text-gray-500 text-sm w-20 shrink-0 pt-0.5">{label}</span>
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
