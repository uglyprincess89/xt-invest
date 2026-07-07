import KatalogClient from '@/components/KatalogClient'
import type { Metadata } from 'next'
import { products, seo } from '@/lib/data'
import { CATALOG_INDEXABLE, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: seo.pages.katalog.title,
  description: seo.pages.katalog.description,
  alternates: { canonical: '/katalog' },
  robots: { index: CATALOG_INDEXABLE, follow: true },
}

/** ItemList katalogu pro vyhledávače — jen když je katalog indexovatelný. */
function CatalogJsonLd() {
  if (!CATALOG_INDEXABLE) return null
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Katalog produktů BD',
    url: absoluteUrl('/katalog'),
    isPartOf: { '@id': `${absoluteUrl('/')}#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absoluteUrl(`/katalog/${p.slug}`),
        name: p.name,
      })),
    },
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export default function KatalogPage() {
  return (
    <>
      <CatalogJsonLd />
      <KatalogClient />
    </>
  )
}
