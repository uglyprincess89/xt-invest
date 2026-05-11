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
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Firma */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">{company.name}</h4>
            <p className="text-sm text-white/75 leading-relaxed">
              Autorizovaný obchodní partner Becton Dickinson pro Českou republiku.
              Provozováno pod značkou <strong className="text-white">xt-invest.cz</strong>
            </p>
            {/* Firemní údaje — světlejší pro čitelnost */}
            <div className="mt-3 text-xs text-white/60 leading-relaxed space-y-0.5">
              <p>IČO: {company.ico} | DIČ: {company.dic}</p>
              <p>{company.sidlo.ulice}, {company.sidlo.cast}</p>
              <p>{company.sidlo.psc} {company.sidlo.mesto}</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Kontakt</h4>
            <a href={`tel:${company.kontakt.telefon}`} className="block text-sm text-white/80 hover:text-teal transition-colors mb-1.5 font-medium">
              {company.kontakt.telefon}
            </a>
            <a href={`mailto:${company.kontakt.email}`} className="block text-sm text-white/80 hover:text-teal transition-colors mb-4">
              {company.kontakt.email}
            </a>
            <div className="text-xs text-white/60 leading-relaxed">
              <p className="font-medium text-white/75">{company.lekarna.nazev}</p>
              <p>{company.lekarna.ulice}</p>
              <p>{company.lekarna.psc} {company.lekarna.mesto}</p>
            </div>
          </div>

          {/* Navigace */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Navigace</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/75 hover:text-teal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Disclaimer pro odborníky */}
        <div className="border-t border-white/10 pt-4 pb-2 mb-1">
          <p className="text-xs text-white/45 leading-relaxed text-center">
            Tento web je určen výhradně odborníkům ve zdravotnictví a osobám oprávněným nakupovat zdravotnické prostředky.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-xs text-white/50">© {company.copyright} {company.name}. Všechna práva vyhrazena.</span>
          <span className="text-xs text-teal font-medium">{company.kontakt.web}</span>
        </div>
      </div>
    </footer>
  )
}
