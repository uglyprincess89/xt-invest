import Link from 'next/link'
import { IconShieldCheck, IconCheck, IconArrowRight } from './icons'

const trustItems = [
  'Originální BD produkty',
  'CE IVD / IFU dokumentace ke každému produktu',
  'Vlastní lékárna v Praze',
  'Skladové položky obratem, ostatní na objednávku',
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-ink text-white">
      {/* Podklad: diagonální přechod navy → tmavá, ať plocha není mrtvá */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(155deg,#0a2036_10%,#0f3358_60%,#164a70_110%)]"
        aria-hidden="true"
      />
      {/* Teal záře za nadpisem — jediný barevný akcent pozadí */}
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/4 rounded-full bg-teal/[0.14] blur-[110px]"
        aria-hidden="true"
      />
      {/* Jemný technický grid, vytrácí se směrem doprava dolů */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.05] [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0v44" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-28 md:pb-16 lg:pt-32">
        <div className="max-w-4xl">
          <div className="animate-fade-up motion-reduce:animate-none">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/35 bg-teal/10 px-4 py-1.5 text-overline uppercase text-teal">
              <IconShieldCheck className="h-4 w-4" />
              Pouze pro zdravotnické odborníky
            </span>
          </div>

          <h1 className="mt-7 text-display animate-fade-up [animation-delay:90ms] motion-reduce:animate-none">
            Autorizovaný obchodní partner{' '}
            <span className="text-teal">BD</span>
            <br className="hidden md:block" /> pro zdravotnická zařízení
            v&nbsp;České&nbsp;republice
          </h1>

          <p className="mt-6 max-w-2xl text-lead text-white/70 animate-fade-up [animation-delay:180ms] motion-reduce:animate-none">
            <span className="font-medium text-white">Kompletní portfolio BD</span> —
            originální zboží s&nbsp;plnou dokumentací a&nbsp;CE&nbsp;IVD certifikací.
            Skladové položky expedujeme obratem.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:270ms] motion-reduce:animate-none">
            <Link href="/katalog" className="btn-primary group">
              Prohlédnout portfolio BD
              <IconArrowRight className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
            <Link href="/kontakt" className="btn-outline">
              Získat nabídku na míru
            </Link>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 pt-7 sm:grid-cols-2 lg:flex lg:flex-wrap animate-fade-up [animation-delay:360ms] motion-reduce:animate-none">
          {trustItems.map(item => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-white/75">
              <IconCheck className="h-4 w-4 shrink-0 text-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
