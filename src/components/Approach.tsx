import { useLocale } from '../i18n'
import { Card, Section } from './ui'

export default function Approach() {
  const { t } = useLocale()

  return (
    <Section id="approach" title={t.approach.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.approach.items.map((item, index) => (
          <Card key={item.title}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 leading-relaxed">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
