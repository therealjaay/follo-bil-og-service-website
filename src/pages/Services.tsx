import { Phone } from 'lucide-react'
import { Button } from '../components/Button'
import { PageHero, Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { business } from '../data/business'
import { services } from '../data/services'
import { useSeo } from '../lib/useSeo'

export function Services() {
  useSeo({
    title: 'Tjenester – service, EU-kontroll, bremser, dekk og reparasjon',
    description:
      'Oversikt over alle tjenester hos Follo Bil & Service i Ski: service, EU-kontroll, bremser, AC, oljeskift, diagnose, dekk, dekkhotell og reparasjoner. Veiledende priser.',
    path: '/tjenester',
  })

  return (
    <>
      <PageHero
        eyebrow="Tjenester"
        title="Alt bilen trenger – på ett sted i Ski"
        lead="Vi er godkjent verksted for alle bilmerker. Prisene under er veiledende fra-priser inkl. mva – du får alltid et eksakt tilbud før vi starter."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/bestill-time">Bestill time</Button>
          <Button href={business.phoneHref} variant="white">
            <Phone className="size-4" aria-hidden />
            {business.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section id="alle" title="Våre tjenester" tone="muted">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section
        id="ikke-funnet"
        title="Finner du ikke det du leter etter?"
        lead="Vi tar de fleste jobber på personbil og varebil. Beskriv problemet, så gir vi deg et ærlig svar på om vi kan hjelpe – og hva det vil koste."
        action={<Button to="/kontakt">Spør oss</Button>}
      >
        <ul className="flex flex-wrap gap-2 text-sm">
          {[
            'Karosseriarbeid',
            'Bilglass og steinsprut',
            'Felgreparasjon',
            'Hjulstilling',
            'Eksos og partikkelfilter',
            'Registerreim',
            'Clutch og girkasse',
            'Støtdempere',
            'Lys og pærer',
            'Vindusviskere',
          ].map((t) => (
            <li key={t} className="rounded-full bg-ink-50 px-4 py-2 font-medium text-ink-700 ring-1 ring-inset ring-ink-100">
              {t}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
