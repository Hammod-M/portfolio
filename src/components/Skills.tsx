import { useLocale } from '../i18n'
import { Card, Section } from './ui'

export default function Skills() {
  const { t } = useLocale()

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group) => (
          <Card key={group.name}>
            <h3 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
