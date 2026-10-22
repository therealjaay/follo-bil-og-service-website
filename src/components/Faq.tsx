import { ChevronDown } from 'lucide-react'

type Item = { readonly q: string; readonly a: string }

export function Faq({ items }: { items: readonly Item[] }) {
  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
      {items.map((item, i) => (
        <details key={item.q} className="group px-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="size-5 shrink-0 text-ink-400 transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="pb-5 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
