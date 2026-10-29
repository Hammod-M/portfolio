import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import photo from './assets/photo.webp'
import { content, LINKS, type Locale } from './content'
import { LocaleProvider } from './i18n'

export const SITE = 'https://hammod-m.github.io/portfolio/'

export function render(locale: Locale) {
  const t = content[locale]
  const html = renderToString(
    <StrictMode>
      <LocaleProvider initial={locale}>
        <App />
      </LocaleProvider>
    </StrictMode>,
  )
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.hero.name,
    jobTitle: t.hero.role,
    description: t.meta.description,
    url: locale === 'en' ? SITE : `${SITE}ru/`,
    image: new URL(photo, 'https://hammod-m.github.io').href,
    email: LINKS.email,
    telephone: LINKS.phoneText.replace(/\s/g, ''),
    address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
    worksFor: { '@type': 'Organization', name: 'Polyframe AI' },
    sameAs: [LINKS.linkedin, LINKS.github, LINKS.telegram],
    knowsAbout: ['React', 'TypeScript', 'Next.js', 'Node.js', 'NestJS', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
  }
  return { html, meta: t.meta, photo, person }
}
