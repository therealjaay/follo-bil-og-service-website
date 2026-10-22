import { CalendarCheck, KeyRound, Receipt } from 'lucide-react'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Bestill time på nett eller ring',
    text: 'Velg tjeneste og dag som passer. Vi bekrefter på SMS innen én virkedag – ofte raskere.',
  },
  {
    icon: KeyRound,
    title: 'Lever bilen – eller nøkkelen',
    text: 'Kom innom om morgenen, eller bruk nøkkelinnkastet før vi åpner. Ski stasjon er 3 minutter unna.',
  },
  {
    icon: Receipt,
    title: 'Vi ringer før vi gjør mer enn avtalt',
    text: 'Finner vi noe uventet, får du pris og forklaring først. Du betaler aldri for noe du ikke har sagt ja til.',
  },
]

export function Steps() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
      <span className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-ink-200 max-md:block" aria-hidden />
      <span className="absolute left-[16.67%] right-[16.67%] top-5 hidden h-px bg-ink-200 md:block" aria-hidden />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
          <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white ring-4 ring-ink-50 md:size-11">
            {i + 1}
          </span>
          <div className="pt-1 md:pt-4">
            <s.icon className="mb-3 size-6 text-brand-600 md:mx-auto" aria-hidden />
            <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
            <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink-600">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
