# Web 2026 (SEO/výkon/škálování) — k ruční kontrole

Body k rozhodnutí majitele u PR `claude/web-2026-seo-perf-scale` (PR #8).
**Aktualizace 2026-07-07: majitel rozhodl, body 1–4 zapracovány přímo v PR.**

## 1. Indexace katalogu — ✅ ZAPNUTO (rozhodnutí majitele 2026-07-07)
`CATALOG_INDEXABLE = true` v `src/lib/site.ts`, `Disallow: /katalog/` odstraněn
z `robots.txt`. Katalog + všechny produktové detaily jsou v `sitemap.xml`,
mají `index, follow` a strukturovaná data. Po nasazení doporučeno odeslat
sitemap v Google Search Console (urychlí zaindexování).

## 2. Osiřelé obrázky — ✅ SMAZÁNO (7 souborů)
`bd-nexiva-20g`, `bd-phoenix`, `bd-veritor-flu`, `bd-venflon-18g/20g/22g`,
`bd-safetyglide-31g`. Pokud se produkty v budoucnu doplní (z oficiálních BD
zdrojů), fotky jsou dohledatelné v git historii.

## 3. Těžké fotky — ✅ ZKOMPRIMOVÁNO (7 souborů)
Šest JPEGů 5000×5000 px zmenšeno na 1600 px / q82 (~445→61 kB apod. — na webu
se zobrazují max ~640 px, vizuálně beze změny). `bd-300866.png` (průhlednost)
převeden na WebP se zachovanou průhledností (460→50 kB); cesta v
`products.json` aktualizována. Celkem ušetřeno ~2,3 MB. Originály v git historii.

## 4. Kořenový `data/` — ✅ SMAZÁN
Zastaralá 46produktová kopie dat se nikde nepoužívala (kanonická data:
`src/data/`). Odkazy v `README.md` a `HOSTING.md` opraveny na `src/data/`.

## 5. Volitelné CI — ⏳ PŘIDAT RUČNĚ (jediný zbývající ruční krok)
Můj token nemá `workflow` scope, soubor s CI nejde pushnout. Postup (po merge):
1. Na GitHubu: **Add file → Create new file**
2. Název souboru: `.github/workflows/data-validation.yml`
3. Vložit YAML z `docs/agentic-workflow.md` → Příloha A (jen obsah bloku, bez ```)
4. **Commit directly to main**
Od té chvíle GitHub na každém PR sám zvaliduje data a build.

## 6. Připomínka (mimo tento PR): MDR patička
Stále chybí **číslo BD autorizace** a **odpovědná osoba**. Až budou, doplnit do
patičky + JSON-LD.

## 7. Poznámka: `src/data/catalog-index.json` je generovaný
Needitovat ručně — regeneruje se přes `npm run generate:catalog` (a automaticky
při `npm run dev` / `npm run build`).
