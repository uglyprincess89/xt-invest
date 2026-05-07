'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/katalog', label: 'Produkty BD' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/lekarna', label: 'Lékárna u Robina' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/xt-invest-logo-white.svg"
            alt="XT-Invest Medical Supplies"
            width={180}
            height={56}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigace */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm whitespace-nowrap transition-colors rounded ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-white font-semibold underline underline-offset-4 decoration-teal decoration-2'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/kontakt"
          className="hidden md:block shrink-0 bg-teal border border-teal text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-teal-dark hover:border-teal-dark transition-colors whitespace-nowrap"
        >
          Poptat nabídku
        </Link>

        {/* Mobilní hamburger — větší touch target */}
        <button
          className="md:hidden text-white p-3 -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobilní menu — větší touch targety */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-3 w-full">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-4 text-sm border-b border-white/10 last:border-0 font-medium ${
                pathname === link.href ? 'text-white font-semibold' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 bg-teal text-white text-sm font-semibold px-4 py-3.5 rounded-lg text-center"
          >
            Poptat nabídku
          </Link>
        </div>
      )}
    </header>
  )
}
