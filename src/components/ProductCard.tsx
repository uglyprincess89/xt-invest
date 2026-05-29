'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/data'
import ContactForm from '@/components/ContactForm'

export default function ProductCard({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
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
            el.style.borderColor = '#e5e7eb'
          }}
        >
          <Link href={`/katalog/${product.slug}`} className="block">
            <div className="relative h-40 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
              <Image src={product.image} alt={`${product.name} — BD ${product.categoryLabel}, REF ${product.ref}`} fill className="object-contain p-3"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw" />
              <span className="absolute top-2 right-2 bg-[#044ED7] text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                BD
              </span>
            </div>
          </Link>

          <div className="p-3 flex flex-col flex-1">
            <Link href={`/katalog/${product.slug}`} className="block flex-1">
              {/* Opravený kontrast: navy místo teal-dark pro malý text */}
              <p className="text-[11px] text-navy uppercase tracking-wide font-semibold mb-1">
                {product.categoryLabel}
              </p>
              <h3 className="text-sm font-medium text-gray-800 leading-snug mb-2">
                {product.name}
              </h3>
              <p className="text-xs text-gray-600 font-medium mb-3">REF: {product.ref}</p>
            </Link>

            {/* Větší touch target pro "Detail produktu" */}
            <div className="flex items-center justify-end mb-2">
              <Link
                href={`/katalog/${product.slug}`}
                className="text-xs text-navy font-semibold hover:text-teal-dark transition-colors py-1.5 px-2 -mr-2"
              >
                Detail produktu →
              </Link>
            </div>

            {/* Větší tlačítko pro lepší touch target */}
            <button
              onClick={() => setModalOpen(true)}
              className="block w-full bg-navy hover:bg-navy-dark text-white text-xs font-semibold py-3 rounded-md text-center transition-colors"
            >
              Poptat tento produkt
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl">
            <ContactForm
              produktNazev={product.name}
              onClose={() => setModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}
