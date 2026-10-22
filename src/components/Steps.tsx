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
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white">{i + 1}</span>
            <s.icon className="size-6 text-brand-600" aria-hidden />
          </div>
          <h3 className="mt-5 text-lg font-bold tracking-tight">{s.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}
