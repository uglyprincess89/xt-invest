'use client'
import { useState } from 'react'

const zajemOptions = [
  'Produkty BD — injekční technika',
  'Produkty BD — odběr krve',
  'Produkty BD — kanyly',
  'Produkty BD — diagnostika',
  'Zásobování léčivy (Lékárna u Robina)',
  'Jiné',
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const zajem = data.get('zajem') as string
    const zprava = data.get('zprava') as string
    const jmeno = data.get('jmeno') as string
    const organizace = data.get('organizace') as string

    const subject = encodeURIComponent(`Poptávka: ${zajem} - xt-invest.cz`)
    const body = encodeURIComponent(
      `Jméno: ${jmeno}\nOrganizace: ${organizace}\nZájem: ${zajem}\n\nZpráva:\n${zprava}`
    )
    window.location.href = `mailto:info@xt-invest.cz?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-base font-medium text-navy mb-5">Poptávkový formulář</h2>

      {sent && (
        <div className="bg-teal/10 border border-teal/30 text-teal-dark rounded-lg p-4 mb-5 text-sm">
          Děkujeme za poptávku! Otevřeli jsme váš e-mailový klient s předvyplněnou zprávou.
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

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Zájem o</label>
          <select
            name="zajem"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal bg-white"
          >
            {zajemOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Zpráva</label>
          <textarea
            name="zprava"
            rows={4}
            placeholder="Popište prosím váš zájem nebo konkrétní poptávku..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-teal resize-none"
          />
        </div>

        <div className="flex items-start gap-4">
          <button
            type="submit"
            className="bg-teal text-white font-medium px-7 py-3 rounded-lg hover:bg-teal-dark transition-colors text-sm"
          >
            Odeslat poptávku
          </button>
          <p className="text-xs text-gray-400 pt-1">
            * Povinná pole. Vaše údaje zpracováváme v souladu s GDPR.
          </p>
        </div>
      </form>
    </div>
  )
}
