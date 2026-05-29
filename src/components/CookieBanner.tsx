'use client'
import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem('cookieConsent', 'acknowledged')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-dark border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 leading-relaxed flex-1">
          Tento web <strong className="text-white">nepoužívá tracking ani marketingové cookies</strong>.
          Ukládáme pouze vaši volbu pro tento banner (localStorage), což je nutné pro jeho funkci.{' '}
          <span className="text-white/60 text-xs">
            Pro anonymní statistiky návštěvnosti používáme privacy-friendly Vercel Analytics bez cookies.
          </span>
        </p>
        <div className="shrink-0">
          <button
            onClick={dismiss}
            className="bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  )
}
