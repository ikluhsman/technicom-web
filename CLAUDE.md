# technicom-web

Public-facing website for Technicom Corp (www.technicomcorp.com). Simple static Nuxt site — primarily a contact/landing page.

## Stack

- **Nuxt 4** (`^4.0.0`)
- **@nuxt/ui v3** — component library (includes Tailwind v4)
- **Tailwind CSS v4** — via @nuxt/ui, no separate tailwind.config.ts
- **TypeScript**
- **Static generation** — Nitro preset: `static`, served via nginx

## Project Structure

Nuxt 4 uses the `app/` directory as `srcDir`:

```
app/
  app.vue              # Root layout wrapper
  pages/index.vue      # Only page — hero/landing
  layouts/default.vue  # UApp wrapper, footer, CookieBanner slot
  components/
    Logo.vue           # Logo component
    CookieBanner.vue   # Cookie consent banner
  assets/css/main.css  # @tailwindcss + @nuxt/ui imports, @theme colors, base font 18px
public/                # favicon.svg, logo.png, logo.svg, robots.txt, tower.jpg
nuxt.config.ts
```

## Design System

- **Primary color:** orange — defined via `@theme` CSS variables in `app/assets/css/main.css`
- **Neutral:** zinc (default)
- **Font:** Exo 2 Italic Bold (Google Fonts) — logo wordmark only
- **Color mode:** light default, light fallback, `classSuffix: ''`

> In Nuxt 4 / @nuxt/ui v3, colors are NOT set via `ui.colors` in nuxt.config.ts — use the `@theme` block in CSS instead.

## Development

```bash
npm run dev       # dev server
npm run generate  # static site build → .output/public/
npm run preview   # preview generated output
```

No `.env` required.

## Deployment

Deployed on **Netlify** via static generation. Config in `netlify.toml`:
- Build command: `npm run generate`
- Publish directory: `.output/public`
- Node 22

## Conventions

- Single-page site — keep it simple, avoid adding unnecessary pages or components
- No app.config.ts — all config lives in nuxt.config.ts
- SEO meta managed with `useSeoMeta()` in pages
- Static assets in `public/` (not `app/assets/`)
