# Rozšíření katalogu — položky k ruční kontrole

Druhá vlna rozšíření katalogu (46 → 87 produktů). Tento soubor shrnuje, co
**nebylo založeno** nebo je **s nižší jistotou** a čeká na tvou osobní kontrolu.
Data všech založených karet pocházejí výhradně z oficiálních BD zdrojů
(bd.com produktové stránky, oficiální BD EMEA packaging SKU katalog pro Itálii —
IDS/MDS, FDA GUDID). Nic není domýšleno z paměti.

## A) NEZALOŽENO — nedohledáno v žádném dostupném oficiálním BD zdroji

Tyto REF nemají produktovou stránku na bd.com (zkoušeno en-us / en-uk / en-no / en-in),
nejsou v oficiálním BD packaging katalogu (Itálie IDS/MDS) ani ve FDA GUDID.
Ponechány k doplnění po ověření z tvého interního BD podkladu / e-katalogu.

| REF | Popis ze seznamu | Poznámka |
|-----|------------------|----------|
| 368338 | SIGNAL 22x1 NON INT (Eclipse Signal jehla 22G) | Produkt reálně existuje (distributoři uvádějí 22G × 1", 25 mm), ale bez oficiální BD stránky/katalogového záznamu. Ověř REF a délku. |
| 360220 | PrecisionGlide MSN 22G × 1" | Bez per-REF bd.com stránky. Pozor: 22G×1,5" je i pod REF 360221 **a** 360211 — možná duplicitní/starší REF. |
| 360221 | PrecisionGlide MSN 22G × 1,5" | Stejná specifikace jako **360211** (založeno). Ověř, zda nejde o totéž. |
| 360222 | PrecisionGlide MSN 21G × 1" | Bez per-REF bd.com stránky. |
| 360223 | PrecisionGlide MSN 21G × 1,5" | Stejná specifikace jako **360213** (založeno). Ověř, zda nejde o totéž. |
| 360225 | PrecisionGlide MSN 20G × 1,6" | Neobvyklá délka „1.6" v seznamu — ověř (běžně 1,5"). |
| 360227 | PrecisionGlide MSN 18G × 1,5" | Bez per-REF bd.com stránky. |
| 303299 | SYRINGE 1ML DN 27GA 3/8 SP120 (1 ml s jehlou 27G × 3/8") | Nedohledáno. Blízké 303176 (1 ml + 26G × 3/8") je založeno. Ověř REF. |

## B) Ponecháno dle tvého pokynu „nech na ruční kontrolu"

| REF | Popis | Stav |
|-----|-------|------|
| 362783 | TUBE SST II PLH 13X100 5.0 PLBL CE MD/BL | **NEZALOŽENO.** V paměti evidovaná anomálie (SST II 362783 vs. 367955). Pozn.: bd.com má sousední REF 362782 = „SST II 5 ml 13×100" — ověř přesné provedení a barvu uzávěru. |
| 367393 | ULTRATOUCH Push Button 21G / PBBCS UTW 21X.75 7' | **JIŽ ZALISTOVÁNO** (beze změny). Historická anomálie 367393 vs. 368689 (368689 = UltraTouch 21G × 0,75", 12" hadička, plně sterilní balení). Zkontroluj, že stávající karta 367393 odpovídá. |

## C) Založeno, ale s NIŽŠÍ jistotou / upozornění

| REF | Karta | Co ověřit |
|-----|-------|-----------|
| 368837 | Eclipse Signal 21G × 1 1/4" (32 mm) | Gauge 21G potvrzen z bd.com; **délka 1 1/4" (32 mm) je ze SKU popisu**, ne přímo z bd.com stránky (ta délku neuvádí). |
| 304100 | Microlance™ jehla 24G × 1" | Rozměr z oficiálního BD MDS katalogu; **generace (Microlance™ II) a barva (šedá dle ISO)** nejsou per-REF potvrzeny z bd.com. |
| 303174 | Inzulínová stříkačka 1 ml U-100 | Z BD MDS katalogu („SYRINGE 1ML LS U100"); provedení Luer Slip. Bez bd.com stránky. |
| 300300, 300700, 301000, 301750, 303800, 304300, 304727 | Microlance™ 3 jehly (MDS) | Gauge + délka ověřeny z oficiálního BD MDS katalogu; **barva dle ISO 6009**, bevel/wall dle SKU popisu; CE 0318 a balení dle rodiny Microlance™ 3 (shodné u sourozeneckých REF ověřených na bd.com). |

## D) Obrázky

- **22 karet má oficiální produktové foto z bd.com** (staženo z `og:image`, pojmenováno `bd-<REF>.<ext>`).
- **19 karet používá stávající rodinné foto** (stejná konvence jako dosavadní katalog — jedno foto pro variantní REF):
  - Zkumavky SST II 8,5 ml (367953) a **PST II 4,5 ml (367376)** → `bd-vacutainer-sst2-5ml.jpg`.
    **Pozn.: PST II má světle zelený uzávěr — foto je z SST II (zlatý). Doplnit oficiální PST II foto.**
  - EST 3,0 ml (362725) → `bd-vacutainer-sst.jpg` (neutrální zkumavka).
  - Eclipse Signal jehly (368835, 368837) → `bd-vacutainer-eclipse.jpg`.
  - Multi-sample jehly (360211, 360213) → `bd-vacutainer-jehla-21g.jpg`.
  - Microlance™ 3 jehly bez staženého fota (300300, 300700, 301000, 301750, 303262, 303800, 304100, 304300, 304727) → `bd-microlance-3.jpg`.
  - Stříkačky bez staženého fota (303174, 303176, 309658) → `bd-tuberculin-1ml.jpg` / `bd-plastipak-5ml-ll.jpg`.

## E) Vyřešené nejasnosti (potvrzeno proti bd.com)

- **305959** „10 ml II San agustin" = BD Plastipak™ 10 ml Luer-Lok™ („San Agustin" je závod výroby).
- **300629** „L3 ST 20 LC" = BD Plastipak™ 20 ml Luer-Lok™.
- **300866** = 50 ml excentrický Luer Slip (bd.com potvrzuje 50 ml; italský packaging list uváděl 60 ml — řídím se produktovou stránkou).
- **362725** „EST … S E" = EST™ (Evacuated Secondary Tube) — **sekundární zkumavka bez aditiva**, nikoli sérová.
- **367953** = SST™ II Advance 8,5 ml (potvrzeno FDA GUDID, výrobce Becton Dickinson U.K.).

---
Vygenerováno automaticky při rozšíření katalogu. Ceny na web nedávány (dle zadání).
