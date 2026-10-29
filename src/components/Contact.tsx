import { CV_FILES, LINKS } from '../content'
import { useLocale } from '../i18n'
import { Icon, Section, buttonPrimary, buttonSecondary } from './ui'

export default function Contact() {
  const { t } = useLocale()

  return (
    <Section id="contact" title={t.contact.title}>
      <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-white/10 dark:bg-white/[0.03]">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{t.contact.text}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
            <Icon.Telegram />
            Telegram
          </a>
          <a href={LINKS.phone} className={buttonSecondary}>
            <Icon.Phone />
            {LINKS.phoneText}
          </a>
          <a href={LINKS.email} className={buttonSecondary}>
            <Icon.Mail />
            {LINKS.emailText}
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
            <Icon.LinkedIn />
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
            <Icon.GitHub />
            GitHub
          </a>
        </div>

        <h3 className="mt-10 text-sm font-semibold text-zinc-900 dark:text-white">{t.contact.cvTitle}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...CV_FILES.en, ...CV_FILES.ru].map((file) => (
            <a
              key={file.href}
              href={file.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm text-zinc-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <Icon.Download width={14} height={14} />
              {file.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-12 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:border-white/10">
        <p>© 2026 {t.hero.name}</p>
        <p>{t.footer}</p>
      </footer>
    </Section>
  )
}
