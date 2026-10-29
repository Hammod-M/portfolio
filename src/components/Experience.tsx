import { useLocale } from '../i18n'
import { Card, Chips, Points, Section } from './ui'

export default function Experience() {
  const { t } = useLocale()

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className="relative space-y-6 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-white/10">
        {t.experience.jobs.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className="absolute top-7 -left-[31px] h-3.5 w-3.5 rounded-full border-2 border-zinc-50 bg-linear-to-tr from-indigo-500 to-cyan-400 sm:-left-[39px] dark:border-zinc-950"
            />
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {job.role} <span className="text-zinc-400">·</span>{' '}
                  <span className="text-indigo-600 dark:text-indigo-400">{job.company}</span>
                </h3>
                <p className="text-sm font-medium whitespace-nowrap text-zinc-500">{job.dates}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{job.context}</p>
              <Points items={job.points} className="mt-4" />
              <Chips items={job.stack} className="mt-5" />
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  )
}
