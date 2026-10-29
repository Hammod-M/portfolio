import type { ReactNode, SVGProps } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
        <span aria-hidden className="h-6 w-1.5 rounded-full bg-linear-to-b from-indigo-500 to-cyan-400" />
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/50 transition hover:border-zinc-300 sm:p-7 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  )
}

export function Chips({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Points({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 text-[15px] leading-relaxed ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export const buttonPrimary =
  'inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200'

export const buttonSecondary =
  'inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10'

export const iconButton =
  'grid h-10 w-10 place-items-center rounded-full border border-zinc-300 bg-white/60 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-white'

type IconProps = SVGProps<SVGSVGElement>

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const Icon = {
  Telegram: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="18" height="18" {...props}>
      <path d="M9.78 15.27 9.4 20.4c.54 0 .78-.23 1.06-.51l2.55-2.44 5.28 3.86c.97.54 1.66.26 1.92-.89l3.48-16.3c.31-1.44-.52-2-1.47-1.65L1.8 10.4c-1.4.54-1.38 1.33-.24 1.68l5.24 1.63L18.97 6.1c.57-.38 1.1-.17.67.21Z" />
    </svg>
  ),
  GitHub: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="18" height="18" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  LinkedIn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="18" height="18" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  Mail: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden width="18" height="18" {...stroke} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Download: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden width="18" height="18" {...stroke} {...props}>
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16" />
    </svg>
  ),
  ArrowUpRight: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden width="14" height="14" {...stroke} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  Sun: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden width="18" height="18" {...stroke} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  Moon: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden width="18" height="18" {...stroke} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  ),
  Pin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden width="14" height="14" {...stroke} {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
}
