# Katalog: datový tok, kontroly a agentický workflow

Tento dokument popisuje, jak katalog technicky funguje a jak do něj **bezpečně a
opakovatelně přidávat produkty** — ať už ručně, nebo s pomocí AI agenta. Cílem je
udržet katalog konzistentní i při růstu na stovky REF.

> **Zlaté pravidlo:** Faktické údaje o zdravotnických prostředcích (název, REF,
> parametry, certifikace CE/IVD) pocházejí **výhradně z oficiálních zdrojů BD**
> (bd.com, oficiální BD katalogy, IFU). Nic se nedomýšlí. Nejisté se označí
> `NEOVĚŘENO` a nechá na člověku. **Ceny se na web nedávají.**

---

## 1. Datový tok

```
src/data/products.json   ← ZDROJ PRAVDY (plná data: name, ref, params, description)
        │
        ├─ (server) src/lib/data.ts ──► SSG detail /katalog/[slug], JSON-LD, sitemap
        │
        └─ scripts/generate-catalog-index.mjs
                   │
                   ▼
        src/data/catalog-index.json   ← ODVOZENÉ (lehká projekce + index hledání)
                   │
                   └─ (klient) src/lib/catalog.ts ──► výpis katalogu, dlaždice, hledání
```

- **`src/data/products.json`** — jediné místo, kde se edituje. Plná data.
- **`src/data/catalog-index.json`** — generované, needitovat ručně. Drží velikost
  klientského bundlu (popisy a strukturované parametry neputují do prohlížeče).
- **`src/lib/site.ts`** — globální konfigurace (absolutní URL, `CATALOG_INDEXABLE`).

Regenerace indexu probíhá automaticky přes `predev` a `prebuild`; ručně:
`npm run generate:catalog`.

---

## 2. Schéma produktu

Formální schéma: [`docs/products.schema.json`](products.schema.json). Zkráceně:

| Pole | Povinné | Fakt? | Pravidlo |
|------|:------:|:-----:|----------|
| `id` | ano | — | unikátní celé číslo; u existujících neměnit |
| `slug` | ano | — | `a-z0-9-`, unikátní; u existujících neměnit (SEO/odkazy) |
| `category` | ano | — | `injekce` \| `odber` \| `specialni` |
| `categoryLabel` | ano | — | musí odpovídat `category` |
| `name` | ano | **ANO** | oficiální název BD vč. ®/™ |
| `ref` | ano | **ANO** | BD REF, unikátní |
| `image` | ano | — | `/images/products/…`, soubor musí existovat |
| `description` | ano | částečně | faktická tvrzení jen z BD; nejisté = `NEOVĚŘENO` |
| `params` | ano | **ANO** | technické parametry klíč→hodnota |
| `subcategory` | ne | — | navigační podskupina (škálování) |
| `keywords` | ne | — | synonyma pro hledání |

---

## 3. Postup přidání produktu (člověk i agent)

1. **Podklady z oficiálního zdroje BD.** Získej název, REF, parametry a
   certifikaci z bd.com / oficiálního BD katalogu / IFU. Ulož odkaz na zdroj.
2. **Zapiš do `src/data/products.json`** nový objekt dle schématu:
   - `id` = nejvyšší dosavadní `id` + 1.
   - `slug` = krátký, výstižný, `bd-…`; zkontroluj unikátnost.
   - `name`, `ref`, `params` **doslova dle BD**. Co nelze ověřit → do hodnoty
     doplň `NEOVĚŘENO` a nahlas člověku.
   - `image` = existující soubor v `public/images/products/`. Není-li oficiální
     foto, použij rodinné (sdílené) foto stejné produktové řady — konvence katalogu.
3. **Ověř data:** `npm run validate:data` (unikátnost id/slug/ref, existence
   obrázku, kategorie, povinná pole). Musí projít.
4. **Regeneruj index:** `npm run generate:catalog`.
5. **Zkontroluj obrázky:** `npm run check:images` (chybějící/těžké/osiřelé).
6. **Build:** `npm run build` (prebuild spustí validaci i generování).
7. **Ověř vizuálně:** dlaždice v `/katalog`, detail `/katalog/<slug>`, mobil ~375 px.
8. **Commit + PR.** Nic nemerguj bez lidské revize. Do popisu PR uveď zdroje BD a
   seznam `NEOVĚŘENO` položek.

**Doporučené dávky:** ~20 produktů na PR — snazší revize (odpovídá dosavadní praxi).

---

## 4. Kontrolní skripty

| Příkaz | Co dělá | Gatuje build? |
|--------|---------|:-------------:|
| `npm run validate:data` | integrita dat (id/slug/ref, obrázky, kategorie, params) | **ano** (přes `prebuild`) |
| `npm run generate:catalog` | regeneruje `catalog-index.json` | — (běží v pre-hoocích) |
| `npm run check:images` | váha/využití obrázků (těžké, osiřelé, chybějící) | ne (report) |

---

## 5. Návrh dalších automatizací (roadmapa)

Konkrétní workflow, které by šlo postupně doplnit. Vše s **člověkem ve smyčce** u
faktických údajů.

1. **Import produktu z BD zdroje (agent + kontrola).**
   Vstup: REF nebo URL bd.com. Agent stáhne oficiální stránku/IFU, vytáhne
   name/params/certifikaci, sestaví návrh objektu do `products.json` s odkazem na
   zdroj a s `NEOVĚŘENO` u čehokoli nejistého. Výstup: PR k lidské revizi.
   *Guardraily:* jen oficiální BD domény; žádné ceny; žádné domýšlení.

2. **Hlídač konzistence dat (CI).**
   `validate:data` v GitHub Actions na každý PR měnící `src/data/**` — viz
   `.github/workflows/data-validation.yml`. Zabrání nekonzistentnímu katalogu.

3. **Kontrola odkazů a obrázků.**
   Rozšířit `check-images` o kontrolu rozměrů a o návrh komprese těžkých fotek;
   samostatný „link checker" na externí odkazy (bd.com, lekarnafamily.cz).

4. **Generátor návrhů popisů.**
   Z ověřených `params` sestaví agent návrh `description` v jednotném B2B tónu.
   Fakta jen z params/BD; text jde vždy na lidskou revizi (medicínský obsah).

5. **Kontrola REF proti master-listu BD.**
   Až bude k dispozici oficiální master-list REF pro ČR (viz
   `notes/BD-konzultace-…`), skript porovná katalog s master-listem a označí
   neznámé/withdrawn REF.

6. **Automatická OG-image na produkt.**
   Generovat social preview (název + REF + BD) přes `next/og` — konzistentní
   sdílení, bez ruční práce.

---

## 6. Mantinely (platí i pro agenty)

- Faktické údaje zdravotnických prostředků **jen z oficiálních BD zdrojů**.
- **Ceny nikdy** na web.
- Nejisté = `NEOVĚŘENO`, nechat na člověku.
- Nic nemergovat bez lidské revize; PR je kontrolní brána.
- Neměnit `id`/`slug` existujících produktů (stabilita odkazů a SEO).
