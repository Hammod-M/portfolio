# Portfolio — Hammod Muborakshoi

Personal site of a frontend / fullstack developer (React, TypeScript, Node.js, Go).

**Live:** https://hammod-m.github.io/portfolio/ · English and Russian (`?lang=ru`), light and dark theme.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · self-hosted Inter font · no UI kit.

Both language versions are prerendered to static HTML at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`) and hydrated on the client, so search engines and link previews see the full content. Each page ships its own canonical URL, hreflang links, Open Graph tags and schema.org `Person` data; `sitemap.xml` and a custom `404.html` are included.
All text lives in `src/content.ts` (EN/RU), so the site and the CV share the same facts.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run deploy    # build and publish dist/ to the gh-pages branch
```
