import type { MetadataRoute } from 'next'
import { products } from '@/lib/data'
import { siteUrl, CATALOG_INDEXABLE } from '@/lib/site'

/**
 * Dynamická mapa webu. Katalogové URL se zařadí jen když je katalog
 * indexovatelný (CATALOG_INDEXABLE) — signály robots/sitemap tak zůstávají
 * koherentní. Po zapnutí indexace se stovky produktů promítnou automaticky.
 */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/o-nas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/lekarna`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/kontakt`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/ochrana-osobnich-udaju`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  if (!CATALOG_INDEXABLE) return staticRoutes

  return [
    ...staticRoutes,
    { url: `${siteUrl}/katalog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...products.map((p) => ({
      url: `${siteUrl}/katalog/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
