#!/usr/bin/env node
/**
 * Hygiena obrázků katalogu — informativní report (negatuje build).
 *
 * Doplňuje validate-data.mjs (ta hlídá existenci a gatuje build) o pohled na
 * VÁHU a využití obrázků, což je klíčové při škálování na stovky produktů:
 *   - chybějící (referencované, ale bez souboru)
 *   - osiřelé (soubor bez reference v datech)
 *   - těžké (nad prahem — kandidáti na kompresi kvůli Core Web Vitals)
 *   - přehled formátů
 *
 * Spuštění:  node scripts/check-images.mjs   (nebo npm run check:images)
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve, extname } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC_DIR = join(ROOT, 'public')
const PRODUCT_IMG_DIR = join(PUBLIC_DIR, 'images/products')
const HEAVY_KB = 250 // práh „těžkého" obrázku (zdroj; Vercel je servíruje jako AVIF/WebP)

const products = JSON.parse(readFileSync(join(ROOT, 'src/data/products.json'), 'utf8'))
const referenced = new Set(products.map((p) => p.image))

const kb = (bytes) => (bytes / 1024).toFixed(0)

// Chybějící
const missing = [...referenced].filter((img) => !existsSync(join(PUBLIC_DIR, img)))

// Na disku
const files = existsSync(PRODUCT_IMG_DIR) ? readdirSync(PRODUCT_IMG_DIR) : []
const orphans = []
const heavy = []
const byExt = {}
let totalBytes = 0

for (const f of files) {
  const rel = `/images/products/${f}`
  const size = statSync(join(PRODUCT_IMG_DIR, f)).size
  totalBytes += size
  const ext = extname(f).toLowerCase().replace('.', '')
  byExt[ext] = (byExt[ext] ?? 0) + 1
  if (!referenced.has(rel)) orphans.push({ f, size })
  if (size > HEAVY_KB * 1024) heavy.push({ f, size })
}

heavy.sort((a, b) => b.size - a.size)
orphans.sort((a, b) => b.size - a.size)

console.log(`\n  Obrázky katalogu — ${files.length} souborů, ${kb(totalBytes)} kB celkem, formáty: ${JSON.stringify(byExt)}\n`)

if (missing.length) {
  console.log('  ✗ CHYBĚJÍCÍ (referencované v datech, soubor chybí):')
  for (const m of missing) console.log(`      public${m}`)
  console.log('')
}

if (heavy.length) {
  console.log(`  ⚠ TĚŽKÉ zdrojové obrázky (> ${HEAVY_KB} kB) — kandidáti na kompresi:`)
  for (const h of heavy) console.log(`      ${kb(h.size).padStart(4)} kB  ${h.f}`)
  console.log('')
}

if (orphans.length) {
  console.log('  ℹ OSIŘELÉ (soubor bez reference v datech):')
  for (const o of orphans) console.log(`      ${kb(o.size).padStart(4)} kB  ${o.f}`)
  console.log('')
}

if (!missing.length && !heavy.length && !orphans.length) {
  console.log('  ✓ Vše v pořádku.\n')
}

console.log(`  Souhrn: ${missing.length} chybí · ${heavy.length} těžkých · ${orphans.length} osiřelých\n`)
