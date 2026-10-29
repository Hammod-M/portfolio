import { useLocale } from '../i18n'
import { Card, Chips, Icon, Points, Section } from './ui'

export default function Projects() {
  const { t } = useLocale()
  const { items, galleryTitle, works, liveSite } = t.projects

  return (
    <Section id="projects" title={t.projects.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{project.name}</h3>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                {project.tag}
              </span>
            </div>
            <p className="mt-3 leading-relaxed">{project.description}</p>
            <Points items={project.points} className="mt-4" />
            <Chips items={project.stack} className="mt-5" />
            {'note' in project && project.note && (
              <p className="mt-auto pt-5 text-sm text-zinc-500 dark:text-zinc-400">{project.note}</p>
            )}
          </Card>
        ))}
      </div>

      <h3 className="mt-14 text-lg font-semibold text-zinc-900 dark:text-white">{galleryTitle}</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <figure
            key={work.title}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <img
                src={work.image}
                alt={work.title}
                width={805}
                height={571}
                loading="lazy"
                className="aspect-[805/571] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
              <span className="text-zinc-700 dark:text-zinc-300">{work.title}</span>
              {work.href && (
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  {liveSite}
                  <Icon.ArrowUpRight />
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
