'use client'
import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookieConsent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-dark border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 leading-relaxed flex-1">
          Tento web používá pouze technicky nezbytné cookies zajišťující jeho správnou funkci.
          Žádné sledovací ani marketingové cookies nepoužíváme.{' '}
          <span className="text-white/60 text-xs">
            Používáním webu souhlasíte s jejich použitím.
          </span>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs text-white/60 hover:text-white/90 transition-colors px-3 py-2"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  )
}
