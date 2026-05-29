'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

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
    <div className="max-w-5xl mx-auto px-6 py-10">
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
          <p className="text-xs text-teal-dark uppercase tracking-widest font-medium mb-2">{product.categoryLabel}</p>
          <h1 className="text-xl font-medium text-navy mb-2 leading-snug">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-navy/5 border border-navy/10 text-navy text-xs font-mono font-semibold px-2 py-1 rounded">
              REF {product.ref}
            </span>
            <span className="text-xs text-gray-400">BD katalogové číslo</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
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

          <button
            onClick={() => setModalOpen(true)}
            className="block w-full text-center bg-teal text-white font-semibold py-3.5 rounded-xl hover:bg-teal-dark transition-colors text-sm"
          >
            Poptat cenu (REF&nbsp;{product.ref}) →
          </button>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link href="/katalog" className="text-sm text-teal hover:text-teal-dark transition-colors">← Zpět na katalog</Link>
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
