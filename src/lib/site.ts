import { seo } from '@/lib/data'

/**
 * Centrální konfigurace webu — jediné místo pravdy pro absolutní URL,
 * indexovatelnost a další globální přepínače. Nahrazuje roztroušené
 * hardcodované 'https://www.xt-invest.cz' v komponentách.
 */

/** Absolutní základ webu, bez koncového lomítka. */
export const siteUrl: string = seo.default.siteUrl.replace(/\/+$/, '')

/**
 * Má být katalog (/katalog a /katalog/[slug]) indexovatelný vyhledávači?
 *
 * Jediný přepínač řídí koherentně:
 *   1. robots meta na /katalog a /katalog/[slug]
 *   2. zařazení katalogových URL do app/sitemap.ts
 *   3. Product/ItemList JSON-LD na katalogu
 *
 * Zapnuto 2026-07-07 po odsouhlasení majitelem (data katalogu ověřena proti
 * oficiálním BD zdrojům). Musí zůstat v souladu s public/robots.txt — při
 * vypnutí vrať i `Disallow: /katalog/`.
 */
export const CATALOG_INDEXABLE = true

/** Sestaví absolutní URL z cesty (pro canonical, JSON-LD, sitemap, OG). */
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${clean}`
}
