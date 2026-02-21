# Technicom Web

Marketing and contact site for Technicom Corporation, a communication tower space leasing and co-location services company in the greater Milwaukee area.

## Stack

- **[Nuxt 3](https://nuxt.com/)** — Vue 3 meta-framework, statically generated
- **[Nuxt UI Pro](https://ui.nuxt.com/pro)** — component library (requires license)
- **[Tailwind CSS](https://tailwindcss.com/)** — styling via Nuxt UI
- **[Docker](https://www.docker.com/) + Nginx** — containerized static file serving

## Development

```bash
npm install
npm run dev       # start dev server
npm run generate  # build static output
npm run preview   # preview built site
```

## Deployment

The site is built as a fully static site and served via Nginx in Docker.

A `NUXT_UI_PRO_LICENSE` environment variable is required at build time.

```bash
docker compose up --build
```
