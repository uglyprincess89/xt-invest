'use client'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/data'

export default function KatalogClient() {
  const [activeCategory, setActiveCategory] = useState<string>('vse')

  const filtered = activeCategory === 'vse'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-navy-dark to-navy text-white py-12 px-6 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
          <circle cx="1000" cy="0" r="250" fill="none" stroke="white" strokeWidth="50"/>
        </svg>
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-2">Becton Dickinson</p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Katalog produktů BD</h1>
          <p className="text-white/70 text-sm">
            Injekční technika • Odběrový materiál • Kanyly • Laboratorní řešení
          </p>
        </div>
      </section>

      {/* FILTR + GRID */}
      <section className="py-8 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveCategory('vse')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'vse'
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
              }`}
            >
              Všechny kategorie ({products.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
                }`}
              >
                {cat.label} ({products.filter(p => p.category === cat.id).length})
              </button>
            ))}
          </div>

          {/* Počet výsledků */}
          <p className="text-xs text-gray-400 mb-4 font-medium">
            Zobrazeno {filtered.length} z {products.length} produktů
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* CTA pod katalogem */}
          <div className="mt-12 bg-navy rounded-2xl p-8 text-white text-center">
            <h3 className="text-lg font-semibold mb-2">Nenašli jste co hledáte?</h3>
            <p className="text-white/70 text-sm mb-5">
              Náš sortiment BD je širší. Kontaktujte nás a připravíme individuální nabídku.
            </p>
            <a
              href="mailto:info@xt-invest.cz?subject=Poptávka produktů BD - xt-invest.cz"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-dark transition-colors text-sm"
            >
              Nezávazně poptat
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
