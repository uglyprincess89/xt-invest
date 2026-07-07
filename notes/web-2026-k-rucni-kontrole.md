# Web 2026 (SEO/výkon/škálování) — k ruční kontrole

Body, které vyžadují tvé rozhodnutí nebo dodání podkladu. Vygenerováno k PR
větve `claude/web-2026-seo-perf-scale`. Nic z toho jsem sám nepřeklopil.

## 1. Indexace katalogu — TVÉ ROZHODNUTÍ (největší SEO páka)
Katalog i detaily jsou zatím `noindex` a nejsou v `sitemap.xml` — koherentní se
současným `robots.txt` (`Disallow: /katalog/`) z auditu REF. Vše je nově řízeno
jedním přepínačem.

**Až budou data ověřená a chceš katalog do vyhledávačů:**
1. `src/lib/site.ts` → `CATALOG_INDEXABLE = true`
2. `public/robots.txt` → smaž řádek `Disallow: /katalog/`

Sitemap se pak katalogem naplní automaticky, detaily dostanou `index` a
strukturovaná data. **Doporučení: zapnout** — jinak katalog nevydělává na SEO.

## 2. Osiřelé obrázky (7) — rozhodnout
Soubory v `public/images/products/` bez produktu v datech:
`bd-nexiva-20g`, `bd-phoenix`, `bd-veritor-flu`, `bd-venflon-18g/20g/22g`,
`bd-safetyglide-31g`. Buď doplnit produkty (z ověřených BD zdrojů), nebo obrázky
odstranit. Nemazal jsem je (nevytvořil jsem je). `npm run check:images`.

## 3. Těžké zdrojové obrázky (7 nad 250 kB) — kandidáti na kompresi
`bd-300866.png` (461 kB), `bd-300869.jpg` (446 kB), `bd-300867.jpg` (394 kB),
`bd-305959.jpg` (376 kB), `bd-301229.jpg` (358 kB), `bd-301231.jpg` (354 kB),
`bd-300629.jpg` (321 kB). Vercel je servíruje jako AVIF/WebP, ale zdroj zbytečně
váží repo/build. Nesahal jsem na tvé ověřené fotky — kompresi nech na sebe.

## 4. Duplicitní `data/` v kořeni — zvážit odstranění
Kořenový `data/*.json` (46 produktů) je **zastaralý a nikde se nepoužívá** —
kanonická data jsou `src/data/*.json` (91). Doporučuji kořenový `data/` smazat,
ať nemate. Nemazal jsem (mimo mnou vytvořené soubory).

## 5. Volitelné CI — přidat ručně
Návrh workflow (validace + build na každém PR) je v
`docs/agentic-workflow.md` → Příloha A. Do PR jsem ho nemohl přidat jako soubor
(push workflow vyžaduje token s `workflow` scope). Pokud CI chceš, zkopíruj YAML
do `.github/workflows/data-validation.yml`. Nic nenasazuje.

## 6. Připomínka (mimo tento PR): MDR patička
Stále chybí **číslo BD autorizace** a **odpovědná osoba** (měl jsi dodat). Až
budeš mít, doplníme do patičky + JSON-LD.

## 7. Poznámka: `src/data/catalog-index.json` je generovaný
Needituj ručně — regeneruje se přes `npm run generate:catalog` (a automaticky
při `npm run dev` / `npm run build`).
