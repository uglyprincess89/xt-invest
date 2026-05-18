# BD account manager — konzultace (cca 2026-05-20)

> Otázky a body, které je třeba s BD vyjasnit. Sestaveno po hluboké revizi proti
> oficiálnímu EMEA katalogu *BD Integrated Diagnostic Solutions Specimen Management
> Product Catalogue (EMEA EN)* a interní tabulce XTREME INVEST.

---

## A. Otevřené anomálie — vyžaduje potvrzení BD

### A1. SST II Advance 5 mL — REF 362783 v EMEA katalogu chybí

**Co máme:** interní tabulka XTREME INVEST uvádí `TUBE SST II PLH 13X100 5.0 PLBL CE MD/BL — 362783`.

**Co říká EMEA katalog (p. 23):** žádný SST II 5 mL nemá REF 362783. Existují tyto 5,0 mL varianty:

| REF | Velikost | Štítek | Cap |
|---|---|---|---|
| 367955 | 13×100 | Paper | gold Hemogard |
| 366566 | 13×100 | See thru | gold Hemogard |
| 368968 | 13×100 | Paper | dark cap (variant) |

**Naše prozatímní volba:** **367955** (Paper label nejlépe odpovídá popisu „PLBL"). Web už toto REF používá.

**Otázky pro BD:**
1. Je REF `362783` v EMEA katalogu, jen není v tomto vydání PDF?
2. Pokud ne, je 367955 správný náhradní REF pro „SST II Advance 5 mL plastic, paper label, gold Hemogard"?
3. Je 362783 legacy / withdrawn REF? Pokud ano, kdy?
4. Pod kterým REF nám BD fakturuje SST II 5 mL v posledních objednávkách XTREME INVEST?

### A2. UltraTouch Push Button 21G — rozpor mezi REF v naší tabulce a popisem

**Naše interní tabulka:** `BD VACUTAINER ULTRATOUCH Push Button 21G — 367393`

**EMEA katalog (p. 47):**
- **367393** = UltraTouch 21G, jehla 19 mm, **hadička 178 mm (7")**, **s Luer adaptérem**, BEZ pre-attached holder. Balení 50/200.
- **368689** = UltraTouch 21G **s Pre-Attached Holder**, **hadička 305 mm (12")**, individuální sterilní blistr. Balení 20/100.

**Problém:** popis produktu na našem webu mluvil o „**předmontovaný držák + individuální sterilní obal**" — což je 368689, NIKOLI 367393.

**Otázky pro BD:**
1. Pod kterým REF nám aktuálně fakturujete UltraTouch 21G? (367393 nebo 368689?)
2. Pokud 367393, máme v sortimentu i 368689? Doporučuje BD pro CZ trh raději variantu s preattached holderem (rychlejší příprava, individuální sterilita) nebo s luer adapterem (lacinější, větší balení)?
3. Pro jakou klinickou indikaci doporučujete kterou variantu?

### A3. Discardit II 2 mL — koncentrický vs. excentrický Luer Slip

**Web říká** v parametrech: „Konektor: Luer Slip, **koncentrický**" (po Sprint 1 opravě)
**Předchozí stav** webu: „excentrický"
**EMEA Specimen Management katalog** Discardit neobsahuje (je to mimo Specimen Management line — patří do general syringes).

**Co teď uděláme:** prozatímní revert na „excentrický" (původní stav), dokud BD nepotvrdí.

**Otázky pro BD:**
1. Je Discardit II 2 mL (REF 300928) skutečně **koncentrický** nebo **excentrický** Luer Slip?
2. Je k Discardit II 2 mL k dispozici IFU PDF, abychom mohli ověřit specifikaci?

### A4. CPT 4 mL / 8 mL Citrate — paralelní REF řady EMEA vs. US

**Pozorování:** US BD katalog uvádí pro stejné fyzické produkty jiná REF (362760/362761) než EMEA katalog (362781/362782).

**Otázky pro BD:**
1. Je tato paralelní REF řada **úmyslná** (různá GLN registrace, různý packaging, různá CE certifikace)?
2. Můžeme **garantovat zákazníkům**, že REF 362781/362782 z EMEA = identický produkt jako 362760/362761 z US?
3. Existuje seznam **všech XT-Invest fakturovatelných REF** s mapováním na produktovou rodinu? (potřebovali bychom „master list" pro náš e-shop)

---

## B. Strategické otázky pro CZ trh

### B1. Master REF seznam pro CZ
- Existuje aktuální (2026) **kompletní seznam EMEA REF, které BD prodává v ČR** přes XTREME INVEST?
- Existují varianty (Paper / See thru / různé štítky), které BD dodává jen některým distributorům?

### B2. Regulace
- Které z našich 46 produktů jsou:
  - **CE IVD** (Vacutainer, PAXgene, PPT)?
  - **MDD / MDR class** (jehly, stříkačky, sety)?
  - **RUO** (P100, P800)?
- Můžete poskytnout **DoC (Declaration of Conformity)** pro každý REF, který prodáváme? Potřebujeme to pro nákupní oddělení nemocnic.

### B3. IFU PDF
- Můžeme dostat **balíček IFU PDF** ke všem 46 REF? Plánujeme je nabízet ke stažení na webu.
- Která BD URL je oficiální zdroj IFU (BD.com? PreAnalytiX.com?)?

### B4. Vigilance / MDR čl. 87
- Jaký je **proces vigilance** pro nás jako distributora — kdy musíme hlásit incident BD a kdy SÚKL?
- Můžete poskytnout **kontakt na BD vigilance kontaktní osobu** pro EMEA?

### B5. Autorizace
- Můžete potvrdit **číslo autorizace** XTREME INVEST s.r.o. jako BD obchodního partnera pro ČR? Potřebujeme to doplnit do patičky webu (MDR požadavek).
- Můžeme **použít BD logo** na webu? Jaké jsou brand guidelines?

### B6. Produktové fotky
- Můžeme dostat **oficiální produktové fotky** všech 46 REF v rozlišení vhodném pro web (≥2000×2000 px)?
- Nebo nám BD doporučí dodavatele, kde si tyto fotky stáhnout?

### B7. Sklad & expedice
- Jaká je standardní **dodací lhůta** od BD pro každou kategorii (Vacutainer / PAXgene / Devices)?
- Máme nárok na **konsignační sklad** v Praze? Za jakých podmínek?

---

## C. Kompletní revizní status — co je teď na webu

Po Sprintech 0–3 v PR #3 jsou na produkci (po merge) tyto REF:

### Speciální zkumavky / Cell preservation
| Slug | REF | PDF p. | Status |
|---|---|---|---|
| bd-vacutainer-cpt-4ml | 362781 | 34 | OK (EMEA) |
| bd-vacutainer-cpt-8ml | 362782 | 34 | OK (EMEA) |
| bd-vacutainer-sst-ii-5ml-plbl | **367955** | 23 | ⚠️ — viz A1, naše tabulka má 362783 |
| paxgene-blood-ccfdna-tube | 768165 | 35 | OK |
| paxgene-blood-rna-tube | 762165 | 36 | OK |
| paxgene-blood-dna-tube | 761165 | 37 | OK |
| bd-vacutainer-ppt-5ml | 362791 | 38 | OK |
| bd-p100-kit-24-tubes | 366448 | 39 | OK |
| bd-p800-tube-2ml | 366420 | 40 | OK |

### Odběr krve
| Slug | REF | PDF p. | Status |
|---|---|---|---|
| bd-vacutainer-citrate-2-7ml | 363048 | 19 | OK |
| bd-vacutainer-edta-4ml | 368861 | 30 | OK |
| bd-vacutainer-serum-10ml | 367896 | 20 | OK |
| bd-vacutainer-serum-4ml-silicone | 369032 | 20 | OK (popis opraven na Silica activator) |
| bd-vacutainer-one-use-holder | 364815 | 56 | OK |
| bd-vacutainer-luer-adapter | 367300 | 56 | OK |
| bd-vacutainer-eclipse-21g | 368609 | 54 | OK |
| bd-vacutainer-eclipse-22g | 368610 | 54 | OK |
| bd-vacutainer-eclipse-21g-preattached | 368650 | 54 | OK |
| bd-vacutainer-eclipse-22g-preattached | 368651 | 54 | OK |
| bd-vacutainer-safetylok-23g-7 | 367284 | 50 | OK |
| bd-vacutainer-safetylok-25g-7 | 367295 | 50 | OK |
| bd-vacutainer-safetylok-21g-12 | 367286 | 50 | OK |
| bd-vacutainer-safetylok-23g-12 | 367288 | 50 | OK |
| bd-vacutainer-pushbutton-21g-12 | 367344 | 48 | OK |
| bd-vacutainer-pushbutton-23g-12 | 367342 | 48 | OK |
| bd-vacutainer-pushbutton-25g-12 | 367341 | 48 | OK |
| bd-vacutainer-ultratouch-21g | **367393** | 47 | ⚠️ — viz A2 |
| bd-microtainer-quikheel-teal | 368103 | 45 | OK (popis opraven na newborn/infant) |

### Injekční technika (NENÍ v EMEA Specimen Management katalogu)
- 16 produktů (Microlance, Discardit, Emerald, Plastipak, Tuberculin). Ověřeny z BD oficiálních produktových stránek, ne z tohoto PDF.
- **Diskuze:** patří tyto produkty do našeho sortimentu / autorizace BD? Nebo prodáváme jen Specimen Management line + injekční jako sekundární?

---

## D. Co od BD potřebujeme reálně přinést (checklist na schůzku)

- [ ] Master REF list pro CZ (XLSX nebo CSV)
- [ ] Mapping EMEA REF ↔ US REF (pro produkty, které mají paralelní řady)
- [ ] IFU PDF pro všech 46 REF (nebo URL, odkud je stáhnout)
- [ ] DoC pro všech 46 REF
- [ ] Číslo naší autorizace + povolené použití BD loga
- [ ] Produktové fotky (≥2000×2000 px)
- [ ] Kontakt na BD vigilance manažera EMEA
- [ ] Potvrzení / vyvrácení SST II 362783 (A1)
- [ ] Potvrzení UltraTouch 367393 vs 368689 (A2)
- [ ] Potvrzení Discardit 2 mL koncentrický vs. excentrický (A3)

---

*Dokument vygenerován 2026-05-18 jako součást Sprint 3 katalogové revize.
Po každé schůzce s BD aktualizovat odpovědi a archivovat.*
