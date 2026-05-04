# Hosting — XT-Invest

Tento dokument popisuje dvě možnosti nasazení webu.

---

## 🆓 Možnost A: Vercel (DOPORUČENO — zdarma, nejjednodušší)

Vercel je platforma od tvůrců Next.js. Bezplatný plán je pro tento web zcela dostačující.

### Postup krok za krokem

**1. Vytvořte GitHub účet**
- Jděte na [github.com](https://github.com) a zaregistrujte se (zdarma)

**2. Nahrajte projekt na GitHub**
```bash
# V terminálu ve složce projektu:
git init
git add .
git commit -m "První verze XT-Invest webu"
git branch -M main
git remote add origin https://github.com/VÁŠ-ÚČET/xt-invest.git
git push -u origin main
```

**3. Nasaďte na Vercel**
- Jděte na [vercel.com](https://vercel.com) → Sign up → Continue with GitHub
- New Project → Import váš repozitář `xt-invest`
- Klikněte Deploy — web je online za ~2 minuty

**Výsledek:** Web běží na adrese `xt-invest.vercel.app` (nebo vlastní doméně)

### Aktualizace webu
Kdykoli pushujete změnu na GitHub, Vercel automaticky nasadí novou verzi.

---

## 🖥️ Možnost B: Český VPS (vlastní server)

### Technické požadavky
| Komponenta | Minimum | Doporučeno |
|------------|---------|------------|
| Node.js | 18.17 LTS | 20 LTS |
| RAM | 512 MB | 1 GB |
| Disk | 2 GB | 5 GB |
| OS | Ubuntu 22.04 | Ubuntu 24.04 |

### Postup nasazení na VPS

```bash
# 1. Na serveru — nainstalujte Node.js (pokud není)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Nahrajte projekt na server (SCP nebo Git)
scp -r ./xt-invest user@VÁŠ-SERVER:/var/www/

# 3. Na serveru — sestavte produkční build
cd /var/www/xt-invest
npm install
npm run build

# 4. Spusťte server
npm start
# Web běží na portu 3000
```

### Nginx reverse proxy (doporučeno)

```nginx
server {
    listen 80;
    server_name xt-invest.cz www.xt-invest.cz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### PM2 — aby web běžel po restartu serveru

```bash
npm install -g pm2
pm2 start npm --name "xt-invest" -- start
pm2 startup    # automatický start po restartu
pm2 save
```

### SSL certifikát (HTTPS — zdarma)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d xt-invest.cz -d www.xt-invest.cz
```

---

## 🔄 Aktualizace obsahu produktů (bez redeploymentu)

Soubory v `data/` (products.json, seo.json, company.json) se načítají při buildu.
Pro změnu obsahu:

1. Upravte JSON soubor
2. Spusťte `npm run build` znovu
3. Restartujte: `pm2 restart xt-invest`

---

## 📞 Podpora

Pokud narazíte na problém s nasazením, kontaktujte vývojáře.
