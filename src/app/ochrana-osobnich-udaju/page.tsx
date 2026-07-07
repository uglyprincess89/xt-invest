import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů | XT-Invest',
  description: 'Informace o zpracování osobních údajů na webu xt-invest.cz v souladu s GDPR.',
  alternates: { canonical: '/ochrana-osobnich-udaju' },
  robots: { index: true, follow: true },
}

const sidlo = `${company.sidlo.ulice}, ${company.sidlo.cast}, ${company.sidlo.psc} ${company.sidlo.mesto}`

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Správce osobních údajů',
    body: (
      <>
        <p>
          Správcem osobních údajů ve smyslu Nařízení Evropského parlamentu a Rady (EU) 2016/679
          („GDPR") je společnost:
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><strong>{company.name}</strong></li>
          <li>IČO: {company.ico}, DIČ: {company.dic}</li>
          <li>Sídlo: {sidlo}</li>
          <li>E-mail: <a href={`mailto:${company.kontakt.email}`} className="text-teal-dark underline">{company.kontakt.email}</a></li>
          <li>Telefon: <a href={`tel:${company.kontakt.telefon}`} className="text-teal-dark underline">{company.kontakt.telefon}</a></li>
        </ul>
        <p className="mt-3">
          (dále jen „<strong>správce</strong>" nebo „<strong>my</strong>")
        </p>
      </>
    ),
  },
  {
    title: '2. Jaké údaje zpracováváme',
    body: (
      <>
        <p>Při odeslání poptávkového formuláře na tomto webu zpracováváme tyto údaje:</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>jméno a příjmení,</li>
          <li>název organizace,</li>
          <li>IČO (nepovinné),</li>
          <li>e-mailová adresa,</li>
          <li>telefonní číslo (nepovinné),</li>
          <li>obsah zprávy a předmět zájmu (např. BD REF kód poptávaného produktu).</li>
        </ul>
        <p className="mt-3">
          Mimo formulář ukládáme v rámci anonymních statistik návštěvnosti (Vercel Analytics)
          pouze technické údaje bez identifikace osob — bez cookies, bez sledování napříč weby.
        </p>
      </>
    ),
  },
  {
    title: '3. Účel a právní základ zpracování',
    body: (
      <>
        <p>
          Údaje z formuláře zpracováváme za účelem <strong>vyřízení vaší poptávky</strong> a komunikace
          o nabídce zboží či služeb.
        </p>
        <p className="mt-3">Právním základem zpracování je:</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>
            <strong>Čl. 6 odst. 1 písm. b) GDPR</strong> — jednání o smluvním vztahu (předsmluvní opatření)
            učiněná na vaši žádost.
          </li>
          <li>
            <strong>Čl. 6 odst. 1 písm. f) GDPR</strong> — oprávněný zájem správce na evidenci a zpětné
            dohledatelnosti obchodní komunikace.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Doba uchování',
    body: (
      <>
        <p>
          Údaje uchováváme po dobu nezbytně nutnou k vyřízení poptávky a následně po dobu vyplývající
          z účetních a daňových povinností (zpravidla <strong>10 let</strong> dle zákona č. 235/2004 Sb., o DPH,
          a zákona č. 563/1991 Sb., o účetnictví), pokud z poptávky vznikne obchodní vztah. V opačném
          případě údaje vymažeme nejpozději do <strong>3 let</strong> od poslední komunikace.
        </p>
      </>
    ),
  },
  {
    title: '5. Příjemci osobních údajů',
    body: (
      <>
        <p>Vaše údaje předáváme pouze prověřeným zpracovatelům, kteří pro nás zajišťují provoz webu:</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><strong>Vercel Inc.</strong> (USA) — hosting webu, anonymní statistiky návštěvnosti bez cookies.</li>
          <li><strong>Resend, Inc.</strong> (USA) — doručení e-mailové notifikace správci o nové poptávce.</li>
        </ul>
        <p className="mt-3">
          Předávání do třetích zemí (USA) probíhá na základě standardních smluvních doložek schválených
          Evropskou komisí (Čl. 46 GDPR). Údaje nepředáváme žádným dalším třetím stranám pro marketingové
          účely.
        </p>
      </>
    ),
  },
  {
    title: '6. Cookies a sledování',
    body: (
      <>
        <p>
          Tento web <strong>nepoužívá tracking ani marketingové cookies</strong>. V prohlížeči ukládáme pouze:
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><code>cookieConsent</code> v <code>localStorage</code> — vaše potvrzení o seznámení s tímto informačním bannerem (technicky nutné pro skrytí banneru po potvrzení).</li>
        </ul>
        <p className="mt-3">
          Pro anonymní statistiky návštěvnosti využíváme službu Vercel Analytics, která pracuje bez cookies
          a bez identifikace návštěvníků.
        </p>
      </>
    ),
  },
  {
    title: '7. Vaše práva',
    body: (
      <>
        <p>V souvislosti se zpracováním osobních údajů máte tato práva:</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>právo na <strong>přístup</strong> ke svým osobním údajům (Čl. 15 GDPR),</li>
          <li>právo na <strong>opravu</strong> nepřesných údajů (Čl. 16 GDPR),</li>
          <li>právo na <strong>výmaz</strong> („právo být zapomenut", Čl. 17 GDPR),</li>
          <li>právo na <strong>omezení zpracování</strong> (Čl. 18 GDPR),</li>
          <li>právo na <strong>přenositelnost údajů</strong> (Čl. 20 GDPR),</li>
          <li>právo <strong>vznést námitku</strong> proti zpracování na základě oprávněného zájmu (Čl. 21 GDPR),</li>
          <li>právo podat <strong>stížnost u dozorového úřadu</strong> — Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener" className="text-teal-dark underline">www.uoou.cz</a>.</li>
        </ul>
        <p className="mt-3">
          Svá práva můžete uplatnit písemně na adrese sídla správce nebo e-mailem na{' '}
          <a href={`mailto:${company.kontakt.email}`} className="text-teal-dark underline">{company.kontakt.email}</a>.
          Vyřídíme je nejpozději do 30 dnů.
        </p>
      </>
    ),
  },
  {
    title: '8. Zabezpečení údajů',
    body: (
      <p>
        Komunikace s webem probíhá zabezpečeným protokolem HTTPS. Přístup k poptávkám má pouze omezený
        okruh pověřených osob správce. K údajům přistupujeme v rozsahu nezbytném pro vyřízení vaší poptávky.
      </p>
    ),
  },
  {
    title: '9. Účinnost a změny',
    body: (
      <p>
        Tyto zásady jsou účinné od <strong>28. května 2026</strong>. Vyhrazujeme si právo zásady kdykoli
        aktualizovat — aktuální znění je vždy zveřejněno na této stránce.
      </p>
    ),
  },
]

export default function OchranaUdajuPage() {
  return (
    <>
      {/* HERO */}
      <PageHero overline="Právní informace" title="Ochrana osobních údajů">
        <p>
          Informace o zpracování osobních údajů na webu xt-invest.cz v souladu s nařízením GDPR
          a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
        </p>
      </PageHero>

      {/* OBSAH */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <article className="max-w-none text-gray-700 leading-relaxed">
            {sections.map(s => (
              <section key={s.title} className="mb-10">
                <h2 className="text-h3 text-navy mb-4 pb-3 border-b border-gray-100">
                  {s.title}
                </h2>
                <div className="text-[15px] space-y-2">{s.body}</div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
