import Link from 'next/link'
import { company } from '@/lib/data'

const navLinks = [
  { href: '/katalog', label: 'Produkty BD' },
  { href: '/o-nas', label: 'O společnosti' },
  { href: '/lekarna', label: 'Lékárna u Robina' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-ink text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Firma */}
          <div>
            <h4 className="text-overline uppercase text-white/45 mb-4">{company.name}</h4>
            <p className="text-[15px] text-white/75 leading-relaxed">
              Autorizovaný obchodní partner Becton Dickinson pro Českou republiku.
              Provozováno pod značkou <strong className="text-white">xt-invest.cz</strong>
            </p>
            {/* Firemní údaje — světlejší pro čitelnost */}
            <div className="mt-4 text-sm text-white/60 leading-relaxed space-y-0.5">
              <p>
                IČO: {company.ico}{' '}
                <a
                  href={`https://ares.gov.cz/ekonomicke-subjekty?ico=${company.ico}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 hover:text-teal underline underline-offset-2 transition-colors"
                >
                  (ověřit v ARES)
                </a>{' '}
                | DIČ: {company.dic}
              </p>
              <p>{company.sidlo.ulice}, {company.sidlo.cast}</p>
              <p>{company.sidlo.psc} {company.sidlo.mesto}</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-overline uppercase text-white/45 mb-4">Kontakt</h4>
            <a href={`tel:${company.kontakt.telefon}`} className="block text-[15px] text-white/80 hover:text-teal transition-colors mb-0.5 font-medium">
              {company.kontakt.telefon}
            </a>
            <p className="text-sm text-white/55 mb-3">{company.kontakt.telefonProvoz}</p>
            <a href={`mailto:${company.kontakt.email}`} className="block text-[15px] text-white/80 hover:text-teal transition-colors mb-5">
              {company.kontakt.email}
            </a>
            <div className="text-sm text-white/60 leading-relaxed">
              <p className="font-medium text-white/75">{company.lekarna.nazev}</p>
              <p>{company.lekarna.ulice}</p>
              <p>{company.lekarna.psc} {company.lekarna.mesto}</p>
            </div>
          </div>

          {/* Navigace */}
          <div>
            <h4 className="text-overline uppercase text-white/45 mb-4">Navigace</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-white/75 hover:text-teal transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Disclaimer pro odborníky */}
        <div className="border-t border-white/10 pt-5 pb-3 mb-1">
          <p className="text-[13px] text-white/45 leading-relaxed text-center">
            Tento web je určen výhradně odborníkům ve zdravotnictví a osobám oprávněným nakupovat zdravotnické prostředky.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[13px] text-white/50">© {company.copyright} {company.name}. Všechna práva vyhrazena.</span>
          <div className="flex items-center gap-5">
            <Link href="/ochrana-osobnich-udaju" className="text-[13px] text-white/60 hover:text-teal transition-colors">
              Ochrana osobních údajů
            </Link>
            <span className="text-[13px] text-teal font-medium">{company.kontakt.web}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
