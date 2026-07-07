'use client'
import { useEffect, useRef } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Přístupný modální dialog. Sjednocuje dřívější tři duplikované obaly
 * (ProductCard, KatalogClient, ProductDetail) a doplňuje:
 *   - role="dialog" + aria-modal + aria-label (oznámení pro čtečky),
 *   - focus trap (Tab/Shift+Tab cyklí uvnitř),
 *   - zavření klávesou Esc a klikem na pozadí,
 *   - uzamčení scrollu stránky pod modalem,
 *   - vrácení fokusu na spouštěcí prvek po zavření.
 *
 * Modal se montuje podmíněně z rodiče (mount = otevřeno), takže efekty se
 * spustí při otevření a uklidí při zavření.
 */
export default function Modal({
  onClose,
  label,
  children,
}: {
  onClose: () => void
  label: string
  children: React.ReactNode
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const panel = panelRef.current
    panel?.focus()

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'Tab' && panel) {
        const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (items.length === 0) {
          e.preventDefault()
          return
        }
        const first = items[0]
        const last = items[items.length - 1]
        const active = document.activeElement
        if (e.shiftKey && (active === first || active === panel)) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl outline-none"
      >
        {children}
      </div>
    </div>
  )
}
