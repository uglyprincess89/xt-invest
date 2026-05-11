'use client'
import { useState } from 'react'

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
  onClose?: () => void   // pokud je vyplněno, zobrazí se tlačítko Zavřít (modal režim)
}

export default function ContactForm({ produktNazev, onClose }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    const zajem = produktNazev
      ? `Poptávka produktu: ${produktNazev}`
      : data.get('zajem') as string

    const payload = {
      jmeno:      data.get('jmeno') as string,
      organizace: data.get('organizace') as string,
      email:      data.get('email') as string,
      telefon:    data.get('telefon') as string,
      zajem,
      zprava:     data.get('zprava') as string,
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
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-medium text-navy">
            {produktNazev ? 'Poptávka produktu' : 'Poptávkový formulář'}
          </h2>
          {produktNazev && (
            <p className="text-xs text-teal-dark mt-0.5">{produktNazev}</p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
            aria-label="Zavřít"
          >
            ✕
          </button>
        )}
      </div>

      {status === 'success' && (
        <div className="bg-teal/10 border border-teal/30 text-teal-dark rounded-lg p-4 mb-5 text-sm">
          ✓ Poptávka odeslána! Odpovíme vám zpravidla do 24 hodin.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-5 text-sm">
          Odeslání se nezdařilo. Zkuste to prosím znovu nebo nás kontaktujte přímo na info@xt-invest.cz
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Jméno a příjmení *</label>
            <input
              name="jmeno"
              type="text"
              required
              placeholder="MUDr. Jan Novák"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Název organizace *</label>
            <input
              name="organizace"
              type="text"
              required
              placeholder="Nemocnice Praha s.r.o."
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">E-mail *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="novak@nemocnice.cz"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Telefon</label>
            <input
              name="telefon"
              type="tel"
              placeholder="+420 xxx xxx xxx"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal"
            />
          </div>
        </div>

        {/* Zájem o — zobrazí se jen na obecném formuláři, ne při poptávce produktu */}
        {!produktNazev && (
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Zájem o</label>
            <select
              name="zajem"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal bg-white"
            >
              {zajemOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Zpráva</label>
          <textarea
            name="zprava"
            rows={4}
            placeholder={produktNazev
              ? `Doplňte prosím množství, frekvenci objednávek nebo jiné požadavky...`
              : `Popište prosím váš zájem nebo konkrétní poptávku...`
            }
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal resize-none"
          />
        </div>

        <div className="flex items-start gap-4">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-teal text-white font-medium px-7 py-3 rounded-lg hover:bg-teal-dark transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Odesílám...' : 'Odeslat poptávku'}
          </button>
          <p className="text-xs text-gray-400 pt-1">
            * Povinná pole. Vaše údaje zpracováváme v souladu s GDPR.
          </p>
        </div>
      </form>
    </div>
  )
}
