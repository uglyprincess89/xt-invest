import catalogIndex from '@/data/catalog-index.json'

/**
 * Klientská (lehká) vrstva katalogu. Importuje jen předpočítaný
 * catalog-index.json — NIKDY plný products.json — takže katalogový bundle
 * neroste s popisy a parametry všech produktů. Generuje scripts/generate-catalog-index.mjs.
 */

export type ProductListItem = {
  id: number
  slug: string
  category: string
  categoryLabel: string
  name: string
  ref: string
  image: string
  /** Předpočítaný normalizovaný index pro hledání (bez diakritiky, lowercase). */
  search: string
}

/** Minimální data pro dlaždici/řádek — splňuje je ProductListItem i plný Product. */
export type ProductCardData = {
  slug: string
  name: string
  ref: string
  image: string
  categoryLabel: string
}

export const productList = catalogIndex as ProductListItem[]

export const categories = [
  { id: 'injekce', label: 'Injekční technika' },
  { id: 'odber', label: 'Odběr krve' },
  { id: 'specialni', label: 'Speciální zkumavky' },
]

/** Odstraní diakritiku a sjednotí velikost písmen pro hledání. */
export function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}
