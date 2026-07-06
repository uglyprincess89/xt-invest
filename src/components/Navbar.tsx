'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/o-nas', label: 'O nás' },
  { href: '/katalog', label: 'Produkty BD' },
  { href: '/lekarna', label: 'Lékárna u Robina' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-navy-ink/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">

        <div className="flex items-center gap-2 shrink-0">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)} aria-label="XT-Invest — domů">
            <Image
              src="/images/xt-invest-logo-white.svg"
              alt="XT-Invest Medical Supplies"
              width={180}
              height={56}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Tlačítko Domů */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Domů"
            title="Domů"
            className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
              pathname === '/'
                ? 'bg-white/15 text-white'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </Link>
        </div>

        {/* Desktop navigace */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-2 text-sm whitespace-nowrap transition-colors rounded-lg ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-white font-semibold after:absolute after:left-3.5 after:right-3.5 after:-bottom-[3px] after:h-0.5 after:rounded-full after:bg-teal'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/kontakt"
          className="hidden md:block shrink-0 bg-teal text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ease-out hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-glow-teal motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
        <div className="md:hidden bg-navy-ink border-t border-white/10 px-4 py-3 w-full">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-4 text-[15px] border-b border-white/10 last:border-0 font-medium transition-colors ${
                pathname === link.href ? 'text-teal font-semibold' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 mb-2 bg-teal text-white text-[15px] font-semibold px-4 py-3.5 rounded-xl text-center shadow-glow-teal"
          >
            Poptat nabídku
          </Link>
        </div>
      )}
    </header>
  )
}
