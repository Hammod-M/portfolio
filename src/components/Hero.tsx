import photo from '../assets/photo.webp'
import { CV_FILES, LINKS } from '../content'
import { useLocale } from '../i18n'
import { Icon, buttonPrimary, buttonSecondary, iconButton } from './ui'

function CvMenu() {
  const { t, locale } = useLocale()
  const files = [...CV_FILES[locale], ...CV_FILES[locale === 'en' ? 'ru' : 'en']]

  return (
    <details className="relative">
      <summary className={`${buttonPrimary} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
        <Icon.Download />
        {t.ui.downloadCv}
      </summary>
      <div className="absolute left-0 z-30 mt-2 w-56 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-zinc-900">
        <p className="px-3 py-1.5 text-xs text-zinc-500">{t.ui.cvMenu}</p>
        {files.map((file) => (
          <a
            key={file.href}
            href={file.href}
            target="_blank"
            rel="noopener"
            className="block rounded-xl px-3 py-2 text-sm text-zinc-800 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/5"
          >
            {file.label}
          </a>
        ))}
      </div>
    </details>
  )
}

export default function Hero() {
  const { t } = useLocale()

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/25" />
        <div className="absolute top-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/15" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-12 sm:px-6 md:grid-cols-[1.35fr_1fr] md:pt-24">
        <div className="fade-up">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{t.hero.hello}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            {t.hero.name}
          </h1>
          <p className="mt-3 bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl dark:from-indigo-400 dark:to-cyan-300">
            {t.hero.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">{t.hero.lead}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {t.hero.badges.map((badge, index) => (
              <li
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
              >
                {index === 1 && <Icon.Pin />}
                {index === 2 && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CvMenu />
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              <Icon.Telegram />
              {t.hero.telegram}
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconButton}>
              <Icon.LinkedIn />
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconButton}>
              <Icon.GitHub />
            </a>
          </div>
        </div>

        <div className="fade-up mx-auto md:mr-0">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-full bg-linear-to-tr from-indigo-500/30 to-cyan-400/30 blur-2xl" />
            <img
              src={photo}
              alt={t.hero.photoAlt}
              width={576}
              height={576}
              className="relative h-52 w-52 rounded-full object-cover shadow-xl ring-4 ring-white sm:h-64 sm:w-64 lg:h-72 lg:w-72 dark:ring-zinc-900"
            />
          </div>
        </div>
      </div>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 pb-6 sm:px-6 lg:grid-cols-4">
        {t.facts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col-reverse rounded-2xl border border-zinc-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <dt className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{fact.label}</dt>
            <dd className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
