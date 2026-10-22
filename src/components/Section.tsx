import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  lead?: string
  children: ReactNode
  tone?: 'white' | 'muted' | 'dark'
  align?: 'left' | 'center'
  action?: ReactNode
  className?: string
}

const tones = {
  white: 'bg-white',
  muted: 'bg-ink-50',
  dark: 'bg-ink-900 text-white',
}

export function Section({ id, eyebrow, title, lead, children, tone = 'white', align = 'left', action, className = '' }: SectionProps) {
  const dark = tone === 'dark'
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container-x">
        <div className={`flex flex-col gap-6 ${align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
          <div className={align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}>
            {eyebrow && (
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.12em] ${dark ? 'text-brand-400' : 'text-brand-600'}`}>{eyebrow}</p>
            )}
            <h2 id={id ? `${id}-title` : undefined} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {lead && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-600'}`}>{lead}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
        <div className="mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  )
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow?: string; title: ReactNode; lead?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(228_70_31/0.25),transparent_55%)]" aria-hidden />
      <div className="container-x relative py-14 sm:py-20">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-400">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
