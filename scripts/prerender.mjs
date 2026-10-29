// Turns the client build into static HTML pages: dist/index.html (EN) and dist/ru/index.html (RU).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const { render, SITE } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const pages = {
  en: { url: SITE, file: 'index.html', ogLocale: 'en_US' },
  ru: { url: `${SITE}ru/`, file: 'ru/index.html', ogLocale: 'ru_RU' },
}
const attr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [locale, page] of Object.entries(pages)) {
  const { html, meta, photo, person } = render(locale)
  const head = [
    `<title>${attr(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    `<link rel="canonical" href="${page.url}" />`,
    `<link rel="alternate" hreflang="en" href="${pages.en.url}" />`,
    `<link rel="alternate" hreflang="ru" href="${pages.ru.url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${pages.en.url}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:url" content="${page.url}" />`,
    `<meta property="og:image" content="${SITE}og.png" />`,
    `<meta property="og:locale" content="${page.ogLocale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<link rel="preload" as="image" href="${photo}" fetchpriority="high" />`,
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
  const out = template
    .replace('<html lang="en">', `<html lang="${locale}">`)
    .replace('<!--head-tags-->', head)
    .replace('<!--app-html-->', html)
  const target = path.join(dist, page.file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, out)
  console.log(`prerendered ${page.file} (${(out.length / 1024).toFixed(1)} KB)`)
}
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
