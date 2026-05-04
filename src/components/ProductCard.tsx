'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/data'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/katalog/${product.slug}`} className="group block h-full">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal hover:shadow-md transition-all h-full flex flex-col">
        {/* Obrázek */}
        <div className="relative h-40 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute top-2 right-2 bg-navy text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            BD
          </span>
        </div>

        {/* Obsah */}
        <div className="p-3 flex flex-col flex-1">
          {/* Kategorie — tmavší pro lepší čitelnost */}
          <p className="text-[11px] text-teal-dark uppercase tracking-wide font-semibold mb-1">
            {product.categoryLabel}
          </p>
          {/* Název — větší a tučnější */}
          <h3 className="text-sm font-medium text-gray-800 leading-snug mb-2 flex-1">
            {product.name}
          </h3>
          {/* REF — tmavší šedá pro lepší čitelnost */}
          <p className="text-xs text-gray-500 font-medium mb-3">REF: {product.ref}</p>

          <div className="flex items-center justify-between gap-2">
            {/* Skladem — zelená pouze pro tuto info */}
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
              Skladem
            </span>
            {/* Poptat — navy tlačítko, odlišené od zelené */}
            <a
              href={`mailto:info@xt-invest.cz?subject=${encodeURIComponent('Poptávka: ' + product.name + ' - xt-invest.cz')}`}
              onClick={e => e.stopPropagation()}
              className="bg-navy text-white text-xs px-3 py-1.5 rounded-md hover:bg-navy-dark transition-colors font-medium shrink-0"
            >
              Poptat
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}
