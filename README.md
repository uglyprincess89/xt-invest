# XT-Invest Medical Supplies — Next.js projekt

Webové stránky XTREME INVEST s.r.o. — autorizovaného distributora BD pro ČR.

## 🚀 Rychlý start

### Požadavky
- Node.js 18.17+ (máte nainstalováno ✓)
- npm 9+

### Spuštění lokálně

```bash
# 1. Přejdete do složky projektu
cd xt-invest

# 2. Nainstalujete závislosti (jednou)
npm install

# 3. Spustíte vývojový server
npm run dev
```

Otevřete prohlížeč na **http://localhost:3000**

---

## 📁 Struktura složek

```
xt-invest/
├── data/                    ← EDITOVATELNÁ DATA (bez kódu)
│   ├── products.json        ← 15 produktů BD (název, ref, parametry, obrázek)
│   ├── seo.json             ← SEO titulky a popisy pro každou stránku
│   └── company.json         ← Firemní údaje, kontakty, otevírací doba
│
├── public/
│   └── images/
│       ├── bd-logo.svg      ← Logo BD
│       ├── xt-invest-logo.svg ← Logo XT-Invest
│       └── products/        ← Fotky produktů (JPG)
│           ├── bd-plastipak-10ml.jpg
│           ├── bd-venflon-18g.jpg
│           └── ... (15 fotek)
│
├── src/
│   ├── app/                 ← Stránky (Next.js App Router)
│   │   ├── page.tsx         ← Domovská stránka
│   │   ├── katalog/
│   │   │   ├── page.tsx     ← Přehled katalogu
│   │   │   └── [slug]/page.tsx ← Detail produktu
│   │   ├── o-nas/page.tsx
│   │   ├── lekarna/page.tsx
│   │   └── kontakt/page.tsx
│   ├── components/          ← Znovupoužitelné komponenty
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ContactForm.tsx
│   └── lib/
│       └── data.ts          ← Helpery pro načítání dat z JSON
```

---

## ✏️ Jak editovat obsah (bez kódu)

### Přidat/upravit produkt
Otevřete `data/products.json` a upravte nebo přidejte položku:

```json
{
  "id": 16,
  "slug": "bd-novy-produkt",
  "category": "injekce",
  "categoryLabel": "Injekční technika",
  "name": "BD Nový produkt™",
  "ref": "123456",
  "image": "/images/products/bd-novy-produkt.jpg",
  "description": "Popis produktu...",
  "params": {
    "Objem": "5 ml",
    "Balení": "100 ks"
  }
}
```

Fotku produktu uložte do `/public/images/products/`.

### Změnit SEO texty
Editujte `data/seo.json` — titulky a popisy pro každou stránku.

### Změnit kontaktní údaje
Editujte `data/company.json` — telefon, e-mail, adresy, otevírací doba.

---

## 🌐 Nasazení

Viz `HOSTING.md` pro podrobné instrukce.

---

## 🎨 Barevné schéma

| Barva | Hex |
|-------|-----|
| Navy (tmavá modrá) | `#1a4d7a` |
| Navy Dark | `#0f3358` |
| Teal (tyrkysová) | `#2bbfa4` |
| Teal Dark | `#1e9e88` |
