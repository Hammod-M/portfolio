import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { content, type Content, type Locale } from './content'

type LocaleContextValue = { locale: Locale; t: Content }

const LocaleContext = createContext<LocaleContextValue | null>(null)

const BASE = import.meta.env.BASE_URL

// Each language is a separate prerendered page: /portfolio/ and /portfolio/ru/.
export const LOCALE_PATH: Record<Locale, string> = { en: BASE, ru: `${BASE}ru/` }

export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith(LOCALE_PATH.ru) ? 'ru' : 'en'
}

export function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem('lang', locale)
  } catch {
    // storage can be blocked; not critical
  }
}

// Sends visitors to the right language page before hydration. Returns true when navigating away.
export function redirectToPreferredLocale(current: Locale): boolean {
  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  let saved: string | null = null
  try {
    saved = localStorage.getItem('lang')
  } catch {
    // ignore
  }
  const wanted =
    fromQuery === 'en' || fromQuery === 'ru'
      ? fromQuery
      : saved === 'en' || saved === 'ru'
        ? saved
        : current === 'en' && navigator.language.toLowerCase().startsWith('ru')
          ? 'ru'
          : current
  if (wanted === current) return false
  window.location.replace(LOCALE_PATH[wanted] + window.location.hash)
  return true
}

export function LocaleProvider({ initial, children }: { initial: Locale; children: ReactNode }) {
  const value = useMemo(() => ({ locale: initial, t: content[initial] }), [initial])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
