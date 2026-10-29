import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import './index.css'
import App from './App'
import { LocaleProvider, localeFromPath, redirectToPreferredLocale } from './i18n'

const locale = localeFromPath(window.location.pathname)

if (!redirectToPreferredLocale(locale)) {
  const root = document.getElementById('root')!
  const app = (
    <StrictMode>
      <LocaleProvider initial={locale}>
        <App />
      </LocaleProvider>
    </StrictMode>
  )
  // Production pages are prerendered; the dev server serves an empty root.
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}
