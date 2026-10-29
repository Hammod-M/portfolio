import { LOCALE_PATH, rememberLocale, useLocale } from '../i18n'
import { useTheme } from '../useTheme'
import { Icon } from './ui'

export default function Header() {
  const { t, locale } = useLocale()
  const other = locale === 'en' ? 'ru' : 'en'
  const { dark, toggle } = useTheme()
  const links = [
    ['experience', t.nav.experience],
    ['projects', t.nav.projects],
    ['skills', t.nav.skills],
    ['contact', t.nav.contact],
  ] as const

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-md dark:border-white/5 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-zinc-900 dark:text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
            HM
          </span>
          <span className="hidden sm:inline">{t.hero.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LOCALE_PATH[other]}
            hrefLang={other}
            lang={other}
            onClick={() => rememberLocale(other)}
            aria-label={t.ui.language}
            title={t.ui.language}
            className="inline-flex h-9 items-center rounded-full border border-zinc-300 px-3 text-xs font-semibold text-zinc-700 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-300 dark:hover:border-white/30"
          >
            {other.toUpperCase()}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={t.ui.theme}
            title={t.ui.theme}
            className="grid h-9 w-9 place-items-center rounded-full border border-zinc-300 text-zinc-700 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-300 dark:hover:border-white/30"
          >
            {dark ? <Icon.Sun /> : <Icon.Moon />}
          </button>
        </div>
      </div>
    </header>
  )
}
