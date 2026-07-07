import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug, products } from '@/lib/data'
import { CATALOG_INDEXABLE } from '@/lib/site'
import ProductDetail from '@/components/ProductDetail'
import ProductJsonLd from '@/components/ProductJsonLd'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  const canonical = `/katalog/${product.slug}`
  return {
    title: `${product.name} | XT-Invest`,
    description: `${product.description} REF: ${product.ref}.`,
    alternates: { canonical },
    robots: { index: CATALOG_INDEXABLE, follow: true },
    openGraph: {
      type: 'website',
      url: canonical,
      title: `${product.name} | XT-Invest`,
      description: `BD ${product.categoryLabel} — REF ${product.ref}.`,
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      <ProductJsonLd product={product} />
      <ProductDetail product={product} />
    </>
  )
}
