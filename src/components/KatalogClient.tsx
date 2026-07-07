'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'
import { productList, categories, normalize, type ProductListItem } from '@/lib/catalog'

type ViewMode = 'grid' | 'list'
type SortMode = 'doporucene' | 'nazev' | 'kategorie'

/** Kolik produktů vykreslit najednou; „Zobrazit další" přidá stejný počet. */
const PAGE_SIZE = 24

const sortOptions: { id: SortMode; label: string }[] = [
  { id: 'doporucene', label: 'Doporučené' },
  { id: 'nazev', label: 'Název A–Z' },
  { id: 'kategorie', label: 'Podle kategorie' },
]

/** Tokenizované hledání: každé slovo dotazu musí být v předpočítaném indexu. */
function matchesQuery(p: ProductListItem, terms: string[]): boolean {
  if (terms.length === 0) return true
  return terms.every((t) => p.search.includes(t))
}

function sortProducts(list: ProductListItem[], mode: SortMode): ProductListItem[] {
  if (mode === 'doporucene') return list
  const copy = [...list]
  if (mode === 'nazev') {
    copy.sort((a, b) => a.name.localeCompare(b.name, 'cs'))
  } else if (mode === 'kategorie') {
    copy.sort((a, b) => a.categoryLabel.localeCompare(b.categoryLabel, 'cs') || a.name.localeCompare(b.name, 'cs'))
  }
  return copy
}

export default function KatalogClient() {
  const [activeCategory, setActiveCategory] = useState<string>('vse')
  const [query, setQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<SortMode>('doporucene')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE)
  const [modalOpen, setModalOpen] = useState(false)
  const [poptatProduct, setPoptatProduct] = useState<ProductListItem | null>(null)

  const filtered = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    const byCategory =
      activeCategory === 'vse' ? productList : productList.filter((p) => p.category === activeCategory)
    return sortProducts(byCategory.filter((p) => matchesQuery(p, terms)), sortBy)
  }, [activeCategory, query, sortBy])

  // Po každé změně filtru/hledání/řazení začni zas od první stránky.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeCategory, query, sortBy])

  const visible = filtered.slice(0, visibleCount)
  const remaining = filtered.length - visible.length

  return (
    <>
      {/* HERO */}
      <PageHero overline="Becton Dickinson" title="Katalog produktů BD">
        <p>Injekční technika • Odběrový materiál • Kanyly • Laboratorní řešení</p>
      </PageHero>

      {/* FILTR + GRID */}
      <section className="py-12 md:py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Search + sort + view toggle */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <label htmlFor="katalog-hledat" className="sr-only">Hledat v katalogu produktů BD</label>
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                id="katalog-hledat"
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Hledat produkt, REF, popis…"
                className="w-full pl-11 pr-10 py-3 text-[15px] bg-white border border-gray-200 rounded-xl shadow-card transition-shadow duration-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 text-gray-800 placeholder:text-gray-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-navy"
                  aria-label="Vymazat hledání"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Řazení */}
            <div className="shrink-0">
              <label htmlFor="katalog-razeni" className="sr-only">Řadit produkty</label>
              <select
                id="katalog-razeni"
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortMode)}
                className="h-full w-full md:w-auto bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-[15px] text-gray-700 shadow-card focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 cursor-pointer"
              >
                {sortOptions.map(o => <option key={o.id} value={o.id}>Řadit: {o.label}</option>)}
              </select>
            </div>

            <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-card shrink-0 self-start">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-pressed={viewMode === 'grid'}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                </svg>
                Mřížka
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-pressed={viewMode === 'list'}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
                Seznam
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5">
            <button
              onClick={() => setActiveCategory('vse')}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                activeCategory === 'vse'
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
              }`}
            >
              Vše ({productList.length})
            </button>
            {categories.map(cat => {
              const count = productList.filter(p => p.category === cat.id).length
              if (count === 0) return null
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-navy text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              )
            })}
          </div>

          {/* Počet výsledků */}
          <p className="text-xs text-gray-500 mb-4 font-medium" aria-live="polite">
            {filtered.length === productList.length
              ? <>Zobrazeno {visible.length} z {productList.length} produktů</>
              : <>Nalezeno {filtered.length} z {productList.length} produktů</>}
            {query && <> · hledáno: <span className="text-navy">„{query}"</span></>}
          </p>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
              <p className="text-sm text-gray-600 mb-3">Žádné produkty neodpovídají zadanému hledání.</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory('vse') }}
                className="text-sm text-navy font-semibold hover:text-teal-dark"
              >
                Vymazat filtry →
              </button>
            </div>
          )}

          {/* GRID view */}
          {viewMode === 'grid' && filtered.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {visible.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* LIST view */}
          {viewMode === 'list' && filtered.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {/* Hlavička seznamu — viditelná jen na desktopu */}
              <div className="hidden md:grid grid-cols-[60px_minmax(0,3fr)_minmax(0,1.4fr)_110px_180px] gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-[11px] uppercase tracking-wider font-semibold text-gray-500">
                <span></span>
                <span>Produkt</span>
                <span>Kategorie</span>
                <span>REF</span>
                <span className="text-right">Akce</span>
              </div>
              <ul>
                {visible.map((product, i) => (
                  <li
                    key={product.id}
                    className={`grid grid-cols-[44px_1fr] md:grid-cols-[60px_minmax(0,3fr)_minmax(0,1.4fr)_110px_180px] gap-3 px-4 py-3 items-center ${
                      i !== visible.length - 1 ? 'border-b border-gray-100' : ''
                    } hover:bg-gray-50/60 transition-colors`}
                  >
                    <Link
                      href={`/katalog/${product.slug}`}
                      className="relative w-11 h-11 md:w-[60px] md:h-[60px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-md overflow-hidden shrink-0 block"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-1.5"
                        sizes="60px"
                      />
                    </Link>

                    <div className="min-w-0">
                      <Link
                        href={`/katalog/${product.slug}`}
                        className="block text-sm font-medium text-gray-800 hover:text-navy leading-snug"
                      >
                        {product.name}
                      </Link>
                      <p className="text-[11px] text-gray-500 mt-0.5 md:hidden">
                        {product.categoryLabel} · REF: {product.ref}
                      </p>
                    </div>

                    <span className="hidden md:inline-block text-[11px] font-semibold text-navy uppercase tracking-wide">
                      {product.categoryLabel}
                    </span>

                    <span className="hidden md:block text-xs text-gray-600 font-medium">
                      {product.ref}
                    </span>

                    <div className="hidden md:flex items-center gap-2 justify-end">
                      <Link
                        href={`/katalog/${product.slug}`}
                        className="text-xs text-navy font-semibold hover:text-teal-dark px-2 py-1.5"
                      >
                        Detail
                      </Link>
                      <button
                        onClick={() => setPoptatProduct(product)}
                        className="text-xs bg-navy hover:bg-navy-dark text-white font-semibold px-3 py-1.5 rounded-md transition-colors"
                      >
                        Poptat
                      </button>
                    </div>

                    {/* Mobile actions */}
                    <div className="col-span-2 flex gap-2 mt-1 md:hidden">
                      <Link
                        href={`/katalog/${product.slug}`}
                        className="flex-1 text-xs text-navy font-semibold border border-gray-200 rounded-md text-center py-2"
                      >
                        Detail
                      </Link>
                      <button
                        onClick={() => setPoptatProduct(product)}
                        className="flex-1 text-xs bg-navy hover:bg-navy-dark text-white font-semibold py-2 rounded-md"
                      >
                        Poptat
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Zobrazit další (progresivní render pro velké katalogy) */}
          {remaining > 0 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-navy text-sm font-semibold px-6 py-3 rounded-xl shadow-card hover:border-navy transition-colors"
              >
                Zobrazit další ({Math.min(PAGE_SIZE, remaining)} z {remaining})
              </button>
            </div>
          )}

          {/* CTA pod katalogem */}
          <div className="relative isolate overflow-hidden mt-16 bg-navy-ink rounded-2xl p-10 text-white text-center">
            <div
              className="absolute inset-0 -z-10 bg-[linear-gradient(155deg,#0a2036_10%,#0f3358_70%,#164a70_120%)]"
              aria-hidden="true"
            />
            <div
              className="absolute -top-20 left-1/2 -z-10 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-teal/[0.12] blur-[90px]"
              aria-hidden="true"
            />
            <h3 className="text-h3 mb-3">Nenašli jste co hledáte?</h3>
            <p className="text-white/70 text-[15px] mb-7 max-w-xl mx-auto">
              Náš sortiment BD je širší a průběžně jej rozšiřujeme. Kontaktujte nás a připravíme individuální nabídku.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              Nezávazně poptat
            </button>
          </div>
        </div>
      </section>

      {/* Modal s obecným formulářem */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl">
            <ContactForm onClose={() => setModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Modal s formulářem pro konkrétní produkt (z list view) */}
      {poptatProduct && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setPoptatProduct(null) }}
        >
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl">
            <ContactForm
              produktNazev={poptatProduct.name}
              onClose={() => setPoptatProduct(null)}
            />
          </div>
        </div>
      )}
    </>
  )
}
