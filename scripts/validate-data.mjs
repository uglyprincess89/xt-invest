#!/usr/bin/env node
/**
 * Validace katalogových dat — bez externích závislostí (čistý Node).
 *
 * Kontroluje src/data/products.json proti pravidlům, na kterých stojí
 * škálování katalogu i agentický workflow (přidávání produktů z BD zdrojů):
 *   - unikátní a validní id / slug / ref
 *   - povinná pole a jejich typy
 *   - kategorie z povolené množiny + konzistence categoryLabel
 *   - existence obrázku v public/
 *   - neprázdné params
 *   - varování: nereferencované („osiřelé") obrázky, sdílené fotky
 *
 * Spuštění:  node scripts/validate-data.mjs
 * Exit 0 = OK (jen varování projdou), Exit 1 = chyba (blokuje build přes prebuild).
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PRODUCTS_PATH = join(ROOT, 'src/data/products.json')
const PUBLIC_DIR = join(ROOT, 'public')
const PRODUCT_IMG_DIR = join(PUBLIC_DIR, 'images/products')

// Musí zůstat v souladu s `categories` v src/lib/data.ts.
const ALLOWED_CATEGORIES = new Set(['injekce', 'odber', 'specialni'])
const CATEGORY_LABELS = {
  injekce: 'Injekční technika',
  odber: 'Odběr krve',
  specialni: 'Speciální zkumavky',
}

const errors = []
const warnings = []
const err = (m) => errors.push(m)
const warn = (m) => warnings.push(m)

/** @type {Array<Record<string, any>>} */
let products
try {
  products = JSON.parse(readFileSync(PRODUCTS_PATH, 'utf8'))
} catch (e) {
  console.error(`✗ Nelze načíst ${PRODUCTS_PATH}: ${e.message}`)
  process.exit(1)
}

if (!Array.isArray(products) || products.length === 0) {
  console.error('✗ products.json musí být neprázdné pole.')
  process.exit(1)
}

const ids = new Map()
const slugs = new Map()
const refs = new Map()
const usedImages = new Set()
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

for (const [i, p] of products.entries()) {
  const at = `#${i} (${p?.name ?? p?.slug ?? p?.ref ?? 'neznámý'})`

  // id
  if (typeof p.id !== 'number' || !Number.isInteger(p.id)) err(`${at}: id musí být celé číslo.`)
  else if (ids.has(p.id)) err(`${at}: duplicitní id ${p.id} (též ${ids.get(p.id)}).`)
  else ids.set(p.id, at)

  // slug
  if (typeof p.slug !== 'string' || !p.slug) err(`${at}: chybí slug.`)
  else {
    if (!SLUG_RE.test(p.slug)) err(`${at}: slug „${p.slug}" není URL-safe (jen a-z, 0-9, pomlčky).`)
    if (slugs.has(p.slug)) err(`${at}: duplicitní slug „${p.slug}" (též ${slugs.get(p.slug)}).`)
    else slugs.set(p.slug, at)
  }

  // ref (BD katalogové číslo — musí být unikátní)
  if (typeof p.ref !== 'string' || !p.ref.trim()) err(`${at}: chybí ref (BD REF).`)
  else if (refs.has(p.ref)) err(`${at}: duplicitní ref „${p.ref}" (též ${refs.get(p.ref)}).`)
  else refs.set(p.ref, at)

  // kategorie
  if (!ALLOWED_CATEGORIES.has(p.category)) {
    err(`${at}: neznámá category „${p.category}" (povoleno: ${[...ALLOWED_CATEGORIES].join(', ')}).`)
  } else if (CATEGORY_LABELS[p.category] && p.categoryLabel !== CATEGORY_LABELS[p.category]) {
    err(`${at}: categoryLabel „${p.categoryLabel}" ≠ očekávaný „${CATEGORY_LABELS[p.category]}".`)
  }

  // název, popis
  if (typeof p.name !== 'string' || !p.name.trim()) err(`${at}: chybí name.`)
  if (typeof p.description !== 'string' || !p.description.trim()) err(`${at}: chybí description.`)

  // params
  if (!p.params || typeof p.params !== 'object' || Array.isArray(p.params) || Object.keys(p.params).length === 0) {
    err(`${at}: params musí být neprázdný objekt.`)
  }

  // obrázek
  if (typeof p.image !== 'string' || !p.image.startsWith('/images/')) {
    err(`${at}: image musí být cesta začínající /images/.`)
  } else {
    usedImages.add(p.image)
    const abs = join(PUBLIC_DIR, p.image)
    if (!existsSync(abs)) err(`${at}: obrázek neexistuje: public${p.image}`)
  }
}

// Varování: osiřelé (nereferencované) obrázky produktů
if (existsSync(PRODUCT_IMG_DIR)) {
  for (const f of readdirSync(PRODUCT_IMG_DIR)) {
    const rel = `/images/products/${f}`
    if (!usedImages.has(rel)) warn(`osiřelý obrázek (nikde nereferencován): public${rel}`)
  }
}

// Info: sdílené obrázky (rodinné foto) — jen přehled, není to chyba
const imgCount = new Map()
for (const p of products) imgCount.set(p.image, (imgCount.get(p.image) ?? 0) + 1)
const shared = [...imgCount.entries()].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1])

// Report
console.log(`\n  Validace katalogu — ${products.length} produktů, ${refs.size} unikátních REF, ${usedImages.size} obrázků\n`)
if (shared.length) {
  console.log(`  ℹ ${shared.length} sdílených (rodinných) fotek, nejčastější:`)
  for (const [img, n] of shared.slice(0, 3)) console.log(`      ${n}× ${img.replace('/images/products/', '')}`)
  console.log('')
}
for (const w of warnings) console.log(`  ⚠ ${w}`)
if (warnings.length) console.log('')

if (errors.length) {
  for (const e of errors) console.error(`  ✗ ${e}`)
  console.error(`\n  Validace selhala: ${errors.length} chyb, ${warnings.length} varování.\n`)
  process.exit(1)
}

console.log(`  ✓ Data v pořádku (${warnings.length} varování).\n`)
process.exit(0)
