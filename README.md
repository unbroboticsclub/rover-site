# rover.unbrobotics.ca

Site for the UNB Robotics Rover Project. Astro site, kept separate from the main UNB Robotics site (`unbroboticsclub/frontend`).

- `/` – public project page. Text lives in `src/data/rover.js`; photos in `src/assets/rover/` (Astro resizes them to WebP at build time).
- Colours come from the UNB Rover Team logo (`src/assets/logo/`): black, white and rover red, defined once in `tailwind.config.cjs` and as theme tokens in `src/styles/global.css`.
- Type: Barlow Condensed for headings (`.display`), JetBrains Mono for labels (`.label`), Inter for body text. Shared pieces live in `src/styles/global.css` (`.wrap`, `.bg-grid`, `.frame`), `src/styles/classes.js` (buttons) and `src/components/SectionHead.astro`.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick this repository.
2. Build settings:
   - **Framework preset:** Astro
   - **Root directory:** leave blank
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22`
3. **Save and Deploy.** The site goes live at `<project>.pages.dev`.
4. In the Pages project: **Custom domains → Set up a custom domain** → `rover.unbrobotics.ca`.
   Since `unbrobotics.ca` is already on Cloudflare, it creates the DNS record and HTTPS certificate automatically.

Every push to the production branch redeploys the site; other branches get preview URLs.
