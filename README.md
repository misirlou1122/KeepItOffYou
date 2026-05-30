# Keep It Off You

A private static study companion for Louisiana Voodoo, Hoodoo, Ifa, Orisha traditions, lwa, ancestor remembrance, and beginner altar care.

The app is built for Azure Static Web Apps from `www/` and is designed to work well as an iPhone standalone PWA. It is intentionally beginner-safe: it supports history, vocabulary, source notes, altar cleanliness, personal journaling, and respectful study without presenting initiatory rites as DIY instructions.

## Local Use

Open `www/index.html` directly, or run the local HTTP server:

```powershell
python -m http.server 8080 --bind 127.0.0.1 --directory www
```

Then open `http://127.0.0.1:8080/index.html`.

## Azure Static Web Apps

When creating the Azure Static Web App, use:

- App location: `./www`
- API location: leave blank
- Output location: empty, because this is a static app

After Azure gives you the default Static Web Apps hostname, add `keepitoffyou.com` as a custom domain in Azure. Azure will show the exact Namecheap DNS records to create, usually a validation TXT record plus an apex ALIAS/ANAME or CNAME-style record depending on the Azure instructions shown for your resource.

## Source Approach

Content is paraphrased from the local PDF library named by the project owner and checked against public references from NPS, NMAAHC, Britannica, Library of Congress, and UNESCO. The PDFs themselves are not bundled into the app.
