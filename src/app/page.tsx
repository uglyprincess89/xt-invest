import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { products, company, seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.home.title,
  description: seo.pages.home.description,
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 6)

  return (
    <>
      {/* HERO — s jemnou SVG texturou na pozadí */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-16 px-6 overflow-hidden">
        {/* Abstraktní křivky v pozadí */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="900" cy="100" r="400" fill="none" stroke="white" strokeWidth="80"/>
          <circle cx="1100" cy="500" r="300" fill="none" stroke="white" strokeWidth="60"/>
          <circle cx="100" cy="400" r="250" fill="none" stroke="white" strokeWidth="50"/>
          <circle cx="300" cy="-50" r="200" fill="none" stroke="white" strokeWidth="40"/>
        </svg>

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-teal" />
            Autorizovaný reseller BD pro ČR
          </div>
          <h1 className="text-3xl md:text-4xl font-medium leading-snug mb-5">
            Distributor zdravotnického<br />
            materiálu{' '}
            <em className="not-italic text-teal">Becton Dickinson</em>
            <br />pro Českou republiku
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-xl mb-8">
            Zajišťujeme spolehlivé zásobování nemocnic, klinik a zdravotnických zařízení
            certifikovanými produkty BD — s atraktivními B2B podmínkami pro celou ČR.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/katalog" className="btn-primary">Prohlédnout katalog</Link>
            <Link href="/kontakt" className="btn-outline">Podmínky spolupráce</Link>
          </div>

          {/* Statistiky — strukturovaná mřížka s oddělovači */}
          <div className="border-t border-white/15 pt-6 grid grid-cols-3 gap-0 max-w-sm">
            {[
              { num: '15+', label: 'kategorií produktů' },
              { num: 'BD', label: 'autorizovaný partner' },
              { num: 'ČR', label: 'celá republika' },
            ].map((s, i) => (
              <div key={s.num} className={`px-4 ${i > 0 ? 'border-l border-white/15' : ''}`}>
                <p className="text-2xl font-semibold text-teal">{s.num}</p>
                <p className="text-xs text-white/55 mt-0.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BD STRIP */}
      <div className="bg-blue-50 border-t-4 border-teal px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4 flex-wrap">
          <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-1.5 shrink-0">
            <Image src="/images/bd-logo.svg" alt="Becton Dickinson" width={65} height={25} />
          </div>
          <p className="text-sm text-gray-600 flex-1">
            <strong className="text-navy">Becton, Dickinson and Company</strong> — světový lídr v oblasti zdravotnických pomůcek a diagnostiky
          </p>
          <span className="bg-teal/10 text-teal-dark text-xs font-medium px-3 py-1 rounded-full border border-teal/30 shrink-0">
            Autorizovaný reseller
          </span>
        </div>
      </div>

      {/* KATALOG */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="section-title">Katalog produktů BD</h2>
            <Link href="/katalog" className="text-sm text-teal hover:text-teal-dark transition-colors font-medium">Zobrazit vše →</Link>
          </div>
          <div className="section-bar" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/katalog" className="btn-primary inline-block">Zobrazit všech 15 produktů</Link>
          </div>
        </div>
      </section>

      {/* LÉKÁRNA TEASER — s kontextem */}
      <section className="py-6 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 pl-1">Naše provozovna</p>
          <Link
            href="/lekarna"
            className="flex items-center gap-5 bg-white border border-gray-200 border-l-4 border-l-navy rounded-r-xl p-5 hover:bg-blue-50 hover:border-l-teal transition-all group"
          >
            <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v16M2 10h16" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-navy mb-1">Lékárna u Robina — zásobování léčivy na žádanky</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Maloobchodní i B2B výdej léčiv pro zdravotnická zařízení. Korunní 483/89, Praha 3.
              </p>
            </div>
            <span className="text-teal text-xl group-hover:translate-x-1 transition-transform shrink-0">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
