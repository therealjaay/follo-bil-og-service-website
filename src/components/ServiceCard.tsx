import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatNok, type Service } from '../data/services'

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const Icon = service.icon
  return (
    <Link
      to={`/tjenester/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
          <Icon className="size-6" aria-hidden />
        </span>
        {service.priceFrom && (
          <span className="rounded-full bg-ink-50 px-3 py-1 text-sm font-semibold text-ink-800">
            fra {formatNok(service.priceFrom)}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-ink-900">{service.name}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{service.short}</p>
      {!compact && (
        <p className="mt-4 flex items-center gap-1.5 text-sm text-ink-500">
          <Clock className="size-4" aria-hidden />
          {service.duration}
        </p>
      )}
      <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand-600">
        Les mer
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  )
}
