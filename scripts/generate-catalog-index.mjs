#!/usr/bin/env node
/**
 * Generuje src/data/catalog-index.json — lehkou projekci produktů pro katalogový
 * KLIENT (dlaždice, hledání, řazení). Klient tak nikdy neimportuje plný
 * products.json (popisy + strukturované params), což drží velikost bundlu při
 * škálování na stovky REF. Plná data zůstávají jen na serveru (SSG detail, JSON-LD).
 *
 * Zdroj pravdy: src/data/products.json. Výstup je odvozený a verzovaný, aby web
 * běžel i bez build kroku; regeneruje se automaticky přes predev/prebuild.
 *
 * Spuštění:  node scripts/generate-catalog-index.mjs  (nebo npm run generate:catalog)
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'src/data/products.json')
const OUT = join(ROOT, 'src/data/catalog-index.json')

const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

const products = JSON.parse(readFileSync(SRC, 'utf8'))

const index = products.map((p) => ({
  id: p.id,
  slug: p.slug,
  category: p.category,
  categoryLabel: p.categoryLabel,
  name: p.name,
  ref: p.ref,
  image: p.image,
  // Předpočítaný index pro hledání: název, REF, kategorie, popis, hodnoty
  // parametrů a případná klíčová slova — vše bez diakritiky a malými písmeny.
  search: normalize(
    [p.name, p.ref, p.categoryLabel, p.description, ...Object.values(p.params ?? {}), ...(p.keywords ?? [])].join(' ')
  ),
}))

writeFileSync(OUT, JSON.stringify(index) + '\n', 'utf8')
console.log(`  ✓ catalog-index.json: ${index.length} položek (${(JSON.stringify(index).length / 1024).toFixed(1)} kB)`)
