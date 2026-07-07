import type { Product } from '@/lib/data'
import { absoluteUrl } from '@/lib/site'

/**
 * Strukturovaná data produktu (schema.org) pro detailovou stránku.
 *
 * Záměrně BEZ `offers`/ceny — ceny na webu nejsou (B2B, individuální nabídka).
 * Product bez ceny je validní structured data; nese název, REF (sku/mpn),
 * výrobce BD, kategorii, obrázek a technické parametry jako additionalProperty.
 * Přidán i BreadcrumbList pro drobečkovou navigaci ve výsledcích vyhledávání.
 */
export default function ProductJsonLd({ product }: { product: Product }) {
  const url = absoluteUrl(`/katalog/${product.slug}`)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    description: product.description,
    sku: product.ref,
    mpn: product.ref,
    category: product.categoryLabel,
    image: absoluteUrl(product.image),
    url,
    brand: { '@type': 'Brand', name: 'BD' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Becton, Dickinson and Company',
      url: 'https://www.bd.com',
    },
    additionalProperty: Object.entries(product.params).map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Domů', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Katalog', item: absoluteUrl('/katalog') },
      { '@type': 'ListItem', position: 3, name: product.name, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
