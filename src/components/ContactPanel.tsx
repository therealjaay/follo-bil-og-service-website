import type { ReactNode } from 'react'
import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { business } from '../data/business'
import { Button } from './Button'

const rows: { icon: typeof MapPin; label: string; value: ReactNode; note?: string }[] = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: `${business.address.street}, ${business.address.postalCode} ${business.address.city}`,
    note: '3 min fra Ski stasjon · gratis parkering utenfor',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: (
      <a href={business.phoneHref} className="hover:text-brand-600">
        {business.phoneDisplay}
      </a>
    ),
    note: 'Ring eller send SMS i åpningstiden',
  },
  {
    icon: Mail,
    label: 'E-post',
    value: (
      <a href={`mailto:${business.email}`} className="hover:text-brand-600">
        {business.email}
      </a>
    ),
    note: 'Vi svarer innen én virkedag',
  },
  {
    icon: Clock,
    label: 'Åpningstider',
    value: (
      <ul className="grid gap-1 text-[15px] font-normal">
        {business.hours.map((h) => (
          <li key={h.days} className="flex justify-between gap-4">
            <span className="text-ink-700">{h.days}</span>
            <span className={`font-medium ${h.open ? 'text-ink-900' : 'text-ink-500'}`}>{h.time}</span>
          </li>
        ))}
      </ul>
    ),
  },
]

export function OpenNow() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const open = day >= 1 && day <= 5 && hour >= 9 && hour < 17
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${open ? 'bg-emerald-50 text-emerald-700' : 'bg-ink-100 text-ink-600'}`}>
      <span className={`size-2 rounded-full ${open ? 'bg-emerald-500' : 'bg-ink-400'}`} aria-hidden />
      {open ? 'Åpent nå · stenger 17:00' : 'Stengt nå · åpner man–fre 09:00'}
    </span>
  )
}

export function ContactPanel() {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <OpenNow />
        <dl className="mt-6 grid gap-6">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[2.75rem_1fr] gap-x-4">
              <dt className="col-span-2 grid grid-cols-subgrid items-center">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <row.icon className="size-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-ink-500">{row.label}</span>
              </dt>
              <dd className="col-start-2 mt-0.5 text-base font-medium text-ink-900">{row.value}</dd>
              {row.note && <dd className="col-start-2 text-sm text-ink-600">{row.note}</dd>}
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={business.mapsUrl} target="_blank" rel="noreferrer" variant="secondary">
            <Navigation className="size-4" aria-hidden />
            Veibeskrivelse
          </Button>
          <Button to="/bestill-time">Bestill time</Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-card lg:col-span-3">
        <iframe
          title={`Kart til ${business.name}, ${business.address.street}, ${business.address.city}`}
          src={business.mapsEmbedUrl}
          className="h-[320px] w-full lg:h-full lg:min-h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  )
}
