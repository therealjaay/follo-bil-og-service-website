import { Star } from 'lucide-react'
import { reviews } from '../data/business'

function Stars({ n, size = 'size-4' }: { n: number; size?: string }) {
  return (
    <span role="img" className="flex gap-0.5 text-sun-500" aria-label={`${n} av 5 stjerner`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} ${i < n ? 'fill-current' : 'text-ink-200'}`} aria-hidden />
      ))}
    </span>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.7-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.6.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l3.9-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l3.9 3.1C6.3 6.8 8.9 4.8 12 4.8z" />
    </svg>
  )
}

export function Reviews() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.name} className="relative flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
          <div className="flex items-center justify-between">
            <Stars n={r.rating} />
            {r.source === 'Google' && <GoogleMark />}
          </div>
          <p className="mt-4 text-lg font-bold leading-snug tracking-tight text-ink-900">“{r.headline}”</p>
          <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-700">{r.text}</blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white" aria-hidden>
              {r.name.charAt(0)}
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink-900">{r.name}</span>
              <span className="block text-xs text-ink-500">{r.verified ? 'Kunde · verifisert' : r.source}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function RatingBadge({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const surface = compact
    ? 'px-0 py-0'
    : dark
      ? 'px-4 py-3 bg-white/10 ring-1 ring-inset ring-white/15 backdrop-blur'
      : 'px-4 py-3 border border-ink-100 bg-white shadow-card'
  return (
    <a
      href="https://www.google.com/maps/search/Follo+Bil+%26+Service+AS+Ski"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl transition-opacity hover:opacity-80 ${surface}`}
    >
      <span className={`text-3xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-ink-900'}`}>5,0</span>
      <span>
        <Stars n={5} />
        <span className={`mt-0.5 block text-xs ${dark ? 'text-ink-200' : 'text-ink-600'}`}>Fra kundene våre · Google</span>
      </span>
    </a>
  )
}
