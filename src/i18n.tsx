import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Locale } from './content'

type LocaleContextValue = { locale: Locale; t: Content; setLocale: (locale: Locale) => void }

const LocaleContext = createContext<LocaleContextValue | null>(null)

function initialLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'ru') return fromUrl
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ru') return saved
  } catch {
    // storage can be blocked; fall back to the browser language
  }
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content[locale].meta.title
    try {
      localStorage.setItem('lang', locale)
    } catch {
      // not critical
    }
  }, [locale])

  const value = useMemo(() => ({ locale, t: content[locale], setLocale }), [locale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
