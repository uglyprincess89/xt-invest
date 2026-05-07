import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { jmeno, organizace, email, telefon, zajem, zprava } = await req.json()

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
      from: 'XT-Invest web <noreply@xt-invest.cz>',
      to: ['info@xt-invest.cz'],
      reply_to: email,
      subject: `Poptávka: ${zajem} | ${jmeno}`,
      text: `
NOVÁ POPTÁVKA Z WEBU XT-INVEST.CZ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Jméno:        ${jmeno}
Organizace:   ${organizace}
E-mail:       ${email}
Telefon:      ${telefon || 'neuvedeno'}
Zájem o:      ${zajem}

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
