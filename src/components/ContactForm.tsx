'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IconCheck, IconX } from '@/components/icons'

const zajemOptions = [
  'Produkty BD — injekční technika',
  'Produkty BD — odběr krve',
  'Produkty BD — speciální zkumavky',
  'Zásobování léčivy (Lékárna u Robina)',
  'Jiné',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
  produktNazev?: string  // pokud je vyplněno, jde o poptávku konkrétního produktu
  produktRef?: string    // BD REF kód produktu — předvyplní se do zprávy
  onClose?: () => void   // pokud je vyplněno, zobrazí se tlačítko Zavřít (modal režim)
}

export default function ContactForm({ produktNazev, produktRef, onClose }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    const zajem = produktNazev
      ? `Poptávka produktu: ${produktNazev}${produktRef ? ` (REF ${produktRef})` : ''}`
      : data.get('zajem') as string

    const payload = {
      jmeno:      data.get('jmeno') as string,
      organizace: data.get('organizace') as string,
      ico:        data.get('ico') as string,
      email:      data.get('email') as string,
      telefon:    data.get('telefon') as string,
      zajem,
      zprava:     data.get('zprava') as string,
      produktRef,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-7 shadow-card">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-h3 text-navy">
            {produktNazev ? 'Poptávka produktu' : 'Poptávkový formulář'}
          </h2>
          {produktNazev && (
            <p className="text-sm text-teal-dark mt-1">{produktNazev}</p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-lg text-gray-400 hover:text-navy hover:bg-gray-100 transition-colors self-start"
            aria-label="Zavřít"
          >
            <IconX className="w-5 h-5" />
          </button>
        )}
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-3 bg-teal-light border border-teal/30 text-teal-dark rounded-xl p-4 mb-6 text-[15px]">
          <IconCheck className="w-5 h-5 shrink-0" />
          Poptávka odeslána! Odpovíme vám zpravidla do 24 hodin.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-[15px]">
          Odeslání se nezdařilo. Zkuste to prosím znovu nebo nás kontaktujte přímo na info@xt-invest.cz
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Jméno a příjmení *</label>
            <input
              name="jmeno"
              type="text"
              required
              placeholder="MUDr. Jan Novák"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Název organizace *</label>
            <input
              name="organizace"
              type="text"
              required
              placeholder="Nemocnice Praha s.r.o."
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">IČO</label>
            <input
              name="ico"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{8}"
              placeholder="12345678"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">E-mail *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="novak@nemocnice.cz"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Telefon</label>
            <input
              name="telefon"
              type="tel"
              placeholder="+420 xxx xxx xxx"
              className="input-field"
            />
          </div>
        </div>

        {/* Zájem o — zobrazí se jen na obecném formuláři, ne při poptávce produktu */}
        {!produktNazev && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Zájem o</label>
            <select
              name="zajem"
              className="input-field"
            >
              {zajemOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Zpráva</label>
          <textarea
            name="zprava"
            rows={4}
            placeholder={produktNazev
              ? `Doplňte prosím množství, frekvenci objednávek nebo jiné požadavky...`
              : `Popište prosím váš zájem nebo konkrétní poptávku...`
            }
            className="input-field resize-none"
          />
        </div>

        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            name="gdprConsent"
            type="checkbox"
            required
            className="mt-0.5 w-4 h-4 shrink-0 accent-teal cursor-pointer"
          />
          <span className="text-[13px] text-gray-500 leading-relaxed">
            Souhlasím se zpracováním osobních údajů pro vyřízení této poptávky.
            Údaje zpracováváme v souladu s{' '}
            <Link href="/ochrana-osobnich-udaju" className="text-teal-dark underline hover:text-teal" target="_blank" rel="noopener">
              Ochranou osobních údajů
            </Link>
            . *
          </span>
        </label>

        <div className="flex items-center gap-4 pt-1">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
          >
            {status === 'loading' ? 'Odesílám…' : 'Odeslat poptávku'}
          </button>
          <p className="text-[13px] text-gray-400">
            * Povinná pole.
          </p>
        </div>
      </form>
    </div>
  )
}
