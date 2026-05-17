import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { jmeno, organizace, ico, email, telefon, zajem, zprava, produktRef } = await req.json()

  if (!jmeno || !organizace || !email || !zajem) {
    return NextResponse.json({ error: 'Chybí povinná pole' }, { status: 400 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'XT-Invest <noreply@contact.xt-invest.cz>',
      to: ['info@xt-invest.cz'],
      reply_to: email,
      subject: produktRef
        ? `Poptávka REF ${produktRef} | ${organizace}`
        : `Poptávka: ${zajem} | ${jmeno}`,
      text: `
NOVÁ POPTÁVKA Z WEBU XT-INVEST.CZ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Jméno:        ${jmeno}
Organizace:   ${organizace}
IČO:          ${ico || 'neuvedeno'}
E-mail:       ${email}
Telefon:      ${telefon || 'neuvedeno'}
Zájem o:      ${zajem}
${produktRef ? `BD REF:       ${produktRef}\n` : ''}
Zpráva:
${zprava || '(bez zprávy)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Odesláno z poptávkového formuláře xt-invest.cz
      `.trim(),
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Odeslání selhalo' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
