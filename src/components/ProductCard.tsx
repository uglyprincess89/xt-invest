'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/data'

export default function ProductCard({ product }: { product: Product }) {
  const mailtoSubject = encodeURIComponent(
    `Poptávka: ${product.name} (REF: ${product.ref})`
  )
  const mailtoBody = encodeURIComponent(
    `Dobrý den,\n\nrád bych poptal následující produkt:\n\n` +
    `Název: ${product.name}\n` +
    `REF: ${product.ref}\n` +
    `Kategorie: ${product.categoryLabel}\n\n` +
    `Prosím o zaslání cenové nabídky pro:\n` +
    `Počet kusů: \nOrganizace: \n\nDěkuji.`
  )
  const mailtoHref = `mailto:info@xt-invest.cz?subject=${mailtoSubject}&body=${mailtoBody}`

  return (
    <div className="group h-full">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col"
        style={{transition:'all 0.2s ease'}}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'scale(1.02)'
          el.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)'
          el.style.borderColor = '#2bbfa4'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'scale(1)'
          el.style.boxShadow = 'none'
          el.style.borderColor = '#dce6ef'
        }}
      >
        <Link href={`/katalog/${product.slug}`} className="block">
          <div className="relative h-40 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-contain p-3"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw" />
            <span className="absolute top-2 right-2 bg-[#044ED7] text-white text-[10px] font-semibold px-2 py-0.5 rounded">
              BD
            </span>
          </div>
        </Link>

        <div className="p-3 flex flex-col flex-1">
          <Link href={`/katalog/${product.slug}`} className="block flex-1">
            <p className="text-[11px] text-teal-dark uppercase tracking-wide font-semibold mb-1">
              {product.categoryLabel}
            </p>
            <h3 className="text-sm font-medium text-gray-800 leading-snug mb-2">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 font-medium mb-3">REF: {product.ref}</p>
          </Link>

          {/* Detail link bez "skladem" tvrzení */}
          <div className="flex items-center justify-end mb-2">
            <Link
              href={`/katalog/${product.slug}`}
              className="text-[11px] text-teal-dark hover:text-teal font-medium"
            >
              Detail produktu →
            </Link>
          </div>

          {/* Hlavní CTA */}
          <a
            href={mailtoHref}
            className="block bg-navy hover:bg-navy-dark text-white text-xs font-semibold py-2 rounded-md text-center transition-colors"
          >
            Poptat tento produkt
          </a>
        </div>
      </div>
    </div>
  )
}
