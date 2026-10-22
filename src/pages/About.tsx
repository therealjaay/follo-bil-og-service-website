import { BadgeCheck, Camera, HandCoins, Handshake, MapPin, Wrench } from 'lucide-react'
import { Button } from '../components/Button'
import { Reviews } from '../components/Reviews'
import { PageHero, Section } from '../components/Section'
import { business } from '../data/business'
import { useSeo } from '../lib/useSeo'

const values = [
  { icon: HandCoins, title: 'Pris før arbeid', text: 'Du får alltid et prisoverslag før vi begynner, og vi ringer om vi finner noe uventet.' },
  { icon: Handshake, title: 'Ærlige råd', text: 'Vi skiller mellom det som må fikses nå og det som kan vente. Vi selger ikke jobber du ikke trenger.' },
  { icon: Wrench, title: 'Fagfolk med erfaring', text: 'Lang erfaring fra merkeverksted og frittstående verksted. Vi holder oss oppdatert på elbil og hybrid.' },
]

const facts = [
  ['Etablert', String(business.established)],
  ['Org.nr.', business.orgNr],
  ['Godkjenning', 'Godkjent bilverksted (Statens vegvesen)'],
  ['Adresse', `${business.address.street}, ${business.address.postalCode} ${business.address.city}`],
]

export function About() {
  useSeo({
    title: 'Om oss – et lite, godkjent bilverksted i Ski',
    description:
      'Follo Bil & Service AS er et godkjent bilverksted i Industriveien 15, Ski, etablert 2024. Vi tar service, EU-kontroll, dekk og reparasjoner på alle bilmerker – med fast pris på forhånd.',
    path: '/om-oss',
  })

  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Et lite verksted med store ambisjoner for Follo"
        lead="Vi startet Follo Bil & Service i 2024 fordi vi mener bileiere i Ski fortjener et verksted som er ærlig på pris, enkelt å nå – og som faktisk ringer tilbake."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src="/img/verksted-ski.jpg"
              srcSet="/img/verksted-ski-800.jpg 800w, /img/verksted-ski.jpg 1600w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Verkstedbygget til Follo Bil & Service i Industriveien 15, Ski"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="bg-ink-50 px-5 py-3 text-sm text-ink-600">
              <MapPin className="mr-1 inline size-4 text-brand-600" aria-hidden />
              Industriveien 15, Ski – rett ved Ski stasjon
            </figcaption>
          </figure>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">Historien</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Godkjent verksted, korte linjer</h2>
            <div className="mt-5 grid gap-4 text-lg leading-relaxed text-ink-700">
              <p>
                Follo Bil &amp; Service AS holder til i Industriveien 15 i Ski og er godkjent av Statens vegvesen for service, reparasjoner og
                EU-kontroll. Vi tar alle bilmerker – bensin, diesel, hybrid og elbil.
              </p>
              <p>
                Hos oss snakker du direkte med den som skrur på bilen din. Det gjør det enklere å forklare hva som er galt, hva det
                koster, og hva som faktisk haster.
              </p>
            </div>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k} className="rounded-xl bg-ink-50 p-4 ring-1 ring-ink-100">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">{k}</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-ink-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Section id="verdier" tone="muted" eyebrow="Slik jobber vi" title="Tre løfter til deg som kunde">
        <ul className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100">
              <v.icon className="size-8 text-brand-600" aria-hidden />
              <h3 className="mt-4 text-lg font-bold tracking-tight">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="team"
        eyebrow="Teamet"
        title="Menneskene bak verkstedet"
        lead="Her skal det stå ekte navn, bilder og hvilke bilmerker hver enkelt kan best. Kunder velger verksted basert på folk – ikke logoer."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {['Daglig leder og mekaniker', 'Bilmekaniker', 'Kundemottak og dekkhotell'].map((role) => (
            <li key={role} className="rounded-2xl border-2 border-dashed border-ink-200 bg-white p-6 text-center">
              <span className="mx-auto flex size-24 items-center justify-center rounded-full bg-ink-50 text-ink-400">
                <Camera className="size-8" aria-hidden />
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ink-500">Bilde og navn kommer</p>
              <p className="mt-1 font-semibold text-ink-900">{role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="godkjent" tone="dark" eyebrow="Trygghet" title="Hva betyr «godkjent bilverksted»?">
        <div className="grid gap-8 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-ink-300 lg:col-span-2">
            Godkjent bilverksted er en ordning fra Statens vegvesen. Den betyr at verkstedet er kontrollert og godkjent til å utføre
            reparasjoner, service og EU-kontroll, og at vi oppfyller krav til kompetanse, utstyr, dokumentasjon og arbeidsrutiner. For
            deg betyr det at arbeidet er sporbart, at garantien din beholdes – og at du har en trygg part å forholde deg til om noe skulle
            være feil.
          </p>
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
            <BadgeCheck className="size-10 text-brand-400" aria-hidden />
            <p className="mt-3 text-xl font-bold">Godkjent bilverksted</p>
            <p className="mt-1 text-sm text-ink-300">Statens vegvesen · personbil og varebil</p>
            <Button to="/bestill-time" className="mt-5 w-full">
              Bestill time
            </Button>
          </div>
        </div>
      </Section>

      <Section id="omtaler" eyebrow="Kundene våre" title="Det kundene sier">
        <Reviews />
      </Section>
    </>
  )
}
