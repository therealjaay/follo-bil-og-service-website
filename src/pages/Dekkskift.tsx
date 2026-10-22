import { CalendarClock, Check, Gauge, Phone, Ruler, Wrench } from 'lucide-react'
import { Button } from '../components/Button'
import { Faq } from '../components/Faq'
import { PageHero, Section } from '../components/Section'
import { business } from '../data/business'
import { formatNok } from '../data/services'
import { useSeo } from '../lib/useSeo'

const plans = [
  {
    name: 'Hjulskift',
    price: 490,
    unit: 'per skift',
    text: 'Du tar med hjulene, vi skifter. Inkl. kontroll av mønsterdybde og lufttrykk.',
    items: ['Skift av komplette hjul', 'Måling av mønsterdybde', 'Riktig lufttrykk', 'Momenttrekking av bolter'],
  },
  {
    name: 'Omlegging og avbalansering',
    price: 290,
    unit: 'per hjul',
    text: 'Dekk du har kjøpt selv – på nett eller hos dekkforhandler – legges om på felgen din.',
    items: ['Av- og påmontering av dekk', 'Avbalansering', 'Ny ventil', 'Miljøavgift på gamle dekk'],
    featured: true,
  },
  {
    name: 'Felgreparasjon',
    price: 890,
    unit: 'per felg',
    text: 'Retting av lettmetallfelg etter hull i veien eller fortauskant.',
    items: ['Kontroll av kast og sprekker', 'Retting av felg', 'Avbalansering etterpå', 'Råd om felgen bør byttes'],
  },
]

const tips = [
  [CalendarClock, 'Bestill tidlig i sesongen', 'De to ukene rundt første frost og første varme helg er alltid fulle. Bestill så snart værmeldingen snur.'],
  [Wrench, 'Ta med alt', 'Alle fire hjul, låsebolt-nøkkelen og eventuelle navkapsler. Da går skiftet unna på en halvtime.'],
  [Ruler, 'Vi måler og sier fra', 'Mønsterdybde og skader sjekkes ved hvert skift. Er dekkene på vei ut, får du beskjed – uten salgspress.'],
  [Gauge, 'Etterstramming', 'Kjør innom etter 50–100 km, så etterstrammer vi boltene gratis. Tar to minutter.'],
] as const

const dekkFaq = [
  {
    q: 'Selger dere dekk?',
    a: 'Nei. Vi selger ikke dekk og lagrer ikke hjul, men vi monterer gjerne dekk du har kjøpt selv – for eksempel på nett. Ta dem med, så legger vi om og avbalanserer.',
  },
  {
    q: 'Når er det lov å kjøre med piggdekk?',
    a: 'I Sør-Norge fra 1. november til første mandag etter 2. påskedag. Piggfrie vinterdekk kan brukes hele året, men bør byttes når det blir varmt – de slites raskt og bremser dårligere på tørr asfalt.',
  },
  {
    q: 'Hvor dypt mønster må vinterdekk ha?',
    a: 'Minimum 3 mm på vinterdekk (1,6 mm på sommerdekk). Vi anbefaler å bytte før du når grensen – under 4 mm mister vinterdekk mye grep på snø.',
  },
  {
    q: 'Kan dere reparere felgen min?',
    a: 'Ja, vi tar retting og reparasjon av de fleste lettmetallfelger etter hull i veien eller fortauskant. Er felgen sprukket, anbefaler vi å bytte.',
  },
]

export function Dekkskift() {
  useSeo({
    title: 'Dekkskift i Ski – hjulskift fra 490,-',
    description:
      'Dekkskift og hjulskift i Ski hos Follo Bil & Service. Omlegging og avbalansering av dekk du har kjøpt selv, felgreparasjon og kontroll av mønsterdybde. Bestill time på nett.',
    path: '/dekkskift',
  })

  return (
    <>
      <PageHero
        eyebrow="Dekkskift"
        title="Dekkskift i Ski – ferdig på en halvtime"
        lead="Ta med hjulene, så skifter vi, måler mønsterdybde og trekker boltene med riktig moment. Har du kjøpt dekk selv, legger vi dem om og avbalanserer."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button to="/bestill-time?tjeneste=dekkskift" size="lg">
            Bestill dekkskift
          </Button>
          <Button href={business.phoneHref} variant="white" size="lg">
            <Phone className="size-5" aria-hidden />
            {business.phoneDisplay}
          </Button>
          <p className="text-ink-200">
            <span className="text-2xl font-extrabold text-white">fra {formatNok(490)}</span> inkl. mva
          </p>
        </div>
      </PageHero>

      <Section id="priser" eyebrow="Priser" title="Enkle priser – ingen overraskelser" lead="Veiledende priser inkl. mva for personbil. Store felger (20″+) og runflat kan ha tillegg.">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                p.featured ? 'bg-ink-900 text-white shadow-lift ring-2 ring-brand-500' : 'bg-white shadow-card ring-1 ring-ink-100'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Mest valgt
                </span>
              )}
              <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
              <p className={`mt-1 text-[15px] ${p.featured ? 'text-ink-300' : 'text-ink-600'}`}>{p.text}</p>
              <p className="mt-5 text-4xl font-extrabold tracking-tight">
                {formatNok(p.price)} <span className={`text-sm font-medium ${p.featured ? 'text-ink-300' : 'text-ink-500'}`}>{p.unit}</span>
              </p>
              <ul className="mt-6 grid gap-2.5 text-[15px]">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.featured ? 'text-brand-400' : 'text-emerald-600'}`} aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <Button to="/bestill-time?tjeneste=dekkskift" variant={p.featured ? 'primary' : 'ghost'} className="w-full">
                  Bestill {p.name.toLowerCase()}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="godt-a-vite" tone="muted" eyebrow="Godt å vite" title="Slik får du et raskt dekkskift">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tips.map(([Icon, t, d], i) => (
            <li key={t} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100">
              <div className="flex items-center justify-between">
                <Icon className="size-7 text-brand-600" aria-hidden />
                <span className="text-sm font-bold text-ink-500">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq" eyebrow="Spørsmål og svar" title="Ofte stilte spørsmål om dekk">
        <div className="max-w-3xl">
          <Faq items={dekkFaq} />
        </div>
      </Section>
    </>
  )
}
