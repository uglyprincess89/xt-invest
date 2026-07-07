import productsData from '@/data/products.json'
import companyData from '@/data/company.json'
import seoData from '@/data/seo.json'

export type Product = {
  id: number
  slug: string
  category: string
  categoryLabel: string
  name: string
  ref: string
  image: string
  description: string
  params: Record<string, string>
  /** Volitelná navigační pole (připraveno pro škálování; nemění fakta produktu). */
  subcategory?: string
  keywords?: string[]
  priceUSD?: number
  priceCZK?: number
}

export type Company = typeof companyData
export type SeoData = typeof seoData

// Plná produktová data — jen pro SERVER (SSG detail, JSON-LD, sitemap).
// Katalogový klient používá lehkou vrstvu v '@/lib/catalog'.
export const products: Product[] = productsData as unknown as Product[]
export const company: Company = companyData
export const seo: SeoData = seoData

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

// Kategorie a lehké typy (ProductListItem, ProductCardData) žijí v '@/lib/catalog',
// aby je mohl importovat klient bez tažení plného products.json.
export { categories } from '@/lib/catalog'
