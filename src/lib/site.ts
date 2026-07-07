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
 * Během auditu REF kódů byl katalog dočasně mimo index (viz public/robots.txt
 * a robots:{index:false} na stránkách). Tento jediný přepínač řídí koherentně:
 *   1. robots meta na /katalog a /katalog/[slug]
 *   2. app/robots.ts (Disallow)
 *   3. app/sitemap.ts (zařazení katalogových URL)
 *
 * ⚠️ ROZHODNUTÍ UŽIVATELE: přepnout na `true` až po odsouhlasení, že data
 * katalogu jsou ověřená a web smí jít do indexu. Viz notes/k-ruční-kontrole.
 */
export const CATALOG_INDEXABLE = false

/** Sestaví absolutní URL z cesty (pro canonical, JSON-LD, sitemap, OG). */
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${clean}`
}
