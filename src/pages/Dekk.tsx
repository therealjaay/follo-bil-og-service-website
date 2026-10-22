import { Bell, Check, Droplets, Phone, Ruler, Warehouse } from 'lucide-react'
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
    name: 'Dekkhotell',
    price: 1290,
    unit: 'per sesong',
    text: 'Vi skifter, vasker og lagrer hjulene dine. SMS når det er tid for neste skift.',
    items: ['Alt i Hjulskift', 'Vask og merking', 'Tørr innendørs lagring', 'SMS-varsel ved sesongskifte', 'Bestill neste skift på nett'],
    featured: true,
  },
  {
    name: 'Omlegging',
    price: 290,
    unit: 'per hjul',
    text: 'Nye dekk på eksisterende felg. Inkl. avbalansering og ny ventil.',
    items: ['Av- og påmontering av dekk', 'Avbalansering', 'Ny ventil', 'Miljøavgift på gamle dekk'],
  },
]

const dekkFaq = [
  { q: 'Når er det lov å kjøre med piggdekk?', a: 'I Sør-Norge fra 1. november til første mandag etter 2. påskedag. Piggfrie vinterdekk kan brukes hele året, men bør byttes når det blir varmt – de slites raskt og bremser dårligere på tørr asfalt.' },
  { q: 'Hvor dypt mønster må vinterdekk ha?', a: 'Minimum 3 mm på vinterdekk (1,6 mm på sommerdekk). Vi anbefaler å bytte før du når grensen – under 4 mm mister vinterdekk mye grep på snø.' },
  { q: 'Hva skjer hvis dekkene mine er for slitt?', a: 'Vi sier fra når vi skifter, og henter inn pris på nye dekk i din dimensjon. Du bestemmer – vi selger aldri dekk du ikke trenger.' },
  { q: 'Kan dere reparere felgen min?', a: 'Ja, vi tar retting og reparasjon av de fleste lettmetallfelger etter hull i veien eller fortauskant.' },
]

export function Dekk() {
  useSeo({
    title: 'Dekkskift og dekkhotell i Ski – fra 490,-',
    description:
      'Hjulskift, dekkhotell, nye dekk, omlegging og felgreparasjon i Ski. Vi skifter, vasker og lagrer hjulene dine – og sender SMS når sesongen snur. Bestill time på nett.',
    path: '/dekk-og-dekkhotell',
  })

  return (
    <>
      <PageHero
        eyebrow="Dekk og dekkhotell"
        title="Slipp å bære hjul i trappa"
        lead="Vi skifter, vasker og lagrer hjulene dine innendørs i Ski. Når sesongen snur får du SMS, bestiller time på nett – og hjulene står klare når du kommer."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/bestill-time?tjeneste=dekk-og-dekkhotell" size="lg">
            Bestill hjulskift
          </Button>
          <Button href={business.phoneHref} variant="white" size="lg">
            <Phone className="size-5" aria-hidden />
            {business.phoneDisplay}
          </Button>
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
                <Button to="/bestill-time?tjeneste=dekk-og-dekkhotell" variant={p.featured ? 'primary' : 'ghost'} className="w-full">
                  Bestill {p.name.toLowerCase()}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="slik" tone="muted" eyebrow="Dekkhotell" title="Slik fungerer dekkhotellet">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Ruler, 'Vi måler og skifter', 'Mønsterdybde, skader og lufttrykk sjekkes ved hvert skift. Du får beskjed i god tid før dekkene må byttes.'],
            [Droplets, 'Vask og merking', 'Hjulene vaskes og merkes med posisjon, slik at de roteres riktig neste sesong.'],
            [Warehouse, 'Tørr lagring innendørs', 'Lagring på pall i tørt, mørkt lager – det forlenger levetiden på gummien.'],
            [Bell, 'SMS når sesongen snur', 'Vi sender SMS med lenke til timebestilling. Hjulene står klare når du kommer.'],
          ].map(([Icon, t, d], i) => {
            const I = Icon as typeof Ruler
            return (
              <li key={String(t)} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100">
                <div className="flex items-center justify-between">
                  <I className="size-7 text-brand-600" aria-hidden />
                  <span className="text-sm font-bold text-ink-300">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{String(t)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{String(d)}</p>
              </li>
            )
          })}
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
