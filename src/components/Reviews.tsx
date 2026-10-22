import { Star } from 'lucide-react'
import { reviews } from '../data/business'

function Stars({ n }: { n: number }) {
  return (
    <span role="img" className="flex gap-0.5 text-sun-500" aria-label={`${n} av 5 stjerner`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < n ? 'fill-current' : 'text-ink-200'}`} aria-hidden />
      ))}
    </span>
  )
}

export function Reviews() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.name} className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
          <Stars n={r.rating} />
          <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-800">“{r.text}”</blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white" aria-hidden>
              {r.name.charAt(0)}
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink-900">{r.name}</span>
              <span className="block text-xs text-ink-500">{r.source}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function RatingBadge() {
  return (
    <a
      href="https://www.google.com/maps/search/Follo+Bil+%26+Service+AS+Ski"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-card"
    >
      <span className="text-3xl font-extrabold tracking-tight text-ink-900">5,0</span>
      <span>
        <Stars n={5} />
        <span className="mt-0.5 block text-xs text-ink-600">Kundevurderinger · Google</span>
      </span>
    </a>
  )
}
