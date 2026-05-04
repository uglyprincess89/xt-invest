'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/katalog', label: 'Produkty BD' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/lekarna', label: 'Lékárna u Robina' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo — těsný viewBox, přirozeně dominantní */}
        <Link href="/" className="shrink-0 py-1">
          <Image
            src="/images/xt-invest-logo-white.svg"
            alt="XT-Invest Medical Supplies"
            width={180}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 flex-1 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-normal whitespace-nowrap transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-teal'
                  : 'text-white hover:text-teal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/kontakt"
          className="shrink-0 bg-white/10 border border-white/30 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-teal hover:border-teal transition-colors whitespace-nowrap"
        >
          Poptat nabídku
        </Link>
      </div>
    </header>
  )
}
