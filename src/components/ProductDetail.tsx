'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { IconArrowRight } from '@/components/icons'

interface Product {
  name: string
  ref: string
  image: string
  categoryLabel: string
  description: string
  params: Record<string, string>
}

export default function ProductDetail({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-navy">Domů</Link>
        <span>/</span>
        <Link href="/katalog" className="hover:text-navy">Katalog</Link>
        <span>/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden flex items-center justify-center h-80 relative">
          <Image
            src={product.image}
            alt={`${product.name} — BD ${product.categoryLabel}, REF ${product.ref}`}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <span className="absolute top-4 right-4 bg-navy text-white text-xs font-medium px-2.5 py-1 rounded">BD</span>
        </div>

        <div>
          <p className="text-overline uppercase text-teal-dark mb-2">{product.categoryLabel}</p>
          <h1 className="text-h2 text-navy mb-3">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-navy/5 border border-navy/10 text-navy text-xs font-mono font-semibold px-2 py-1 rounded">
              REF {product.ref}
            </span>
            <span className="text-xs text-gray-400">BD katalogové číslo</span>
          </div>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="border border-gray-200/80 rounded-xl overflow-hidden shadow-card mb-6">
            <div className="bg-navy px-4 py-2">
              <h2 className="text-white text-sm font-medium">Technické parametry</h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.params).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 text-gray-500 w-2/5">{key}</td>
                    <td className="px-4 py-2.5 text-navy font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Dostupnost ověříme po vaší poptávce
          </div>

          <button onClick={() => setModalOpen(true)} className="btn-primary group w-full">
            Poptat cenu (REF&nbsp;{product.ref})
            <IconArrowRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
          </button>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-100">
        <Link href="/katalog" className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy hover:text-teal-dark transition-colors">
          <IconArrowRight className="w-4 h-4 rotate-180 transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transition-none" />
          Zpět na katalog
        </Link>
      </div>

      {/* Modal s formulářem */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl">
            <ContactForm
              produktNazev={product.name}
              produktRef={product.ref}
              onClose={() => setModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
