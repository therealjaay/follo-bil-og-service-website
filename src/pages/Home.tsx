import { ArrowRight, BadgeCheck, CalendarCheck, Car, Check, Clock, MapPin, Phone, ShieldCheck, Snowflake } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ContactPanel } from '../components/ContactPanel'
import { Faq } from '../components/Faq'
import { RatingBadge, Reviews } from '../components/Reviews'
import { Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { Steps } from '../components/Steps'
import { business, faqs, trustPoints } from '../data/business'
import { featuredServices, formatNok, services } from '../data/services'
import { useSeo } from '../lib/useSeo'

const trustIcons = [BadgeCheck, Car, ShieldCheck, MapPin]

export function Home() {
  useSeo({
    title: 'Bilverksted i Ski – EU-kontroll, service og dekkskift',
    description:
      'Godkjent bilverksted i Ski (Nordre Follo). EU-kontroll, service, bremser, AC og dekkskift for alle bilmerker. Bestill time på nett eller ring 484 21 756.',
    path: '/',
  })

  const eu = services.find((s) => s.slug === 'eu-kontroll')!
  const dekk = services.find((s) => s.slug === 'dekkskift')!

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <img
          src="/img/verksted-ski.jpg"
          srcSet="/img/verksted-ski-800.jpg 800w, /img/verksted-ski.jpg 1600w"
          sizes="100vw"
          alt="Verkstedbygget til Follo Bil & Service i Industriveien 15, Ski – gul fasade med to porter"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/80 to-ink-900/40" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" aria-hidden />

        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_minmax(0,22rem)] lg:py-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-ink-100 ring-1 ring-inset ring-white/15 backdrop-blur">
              <BadgeCheck className="size-4 text-brand-400" aria-hidden />
              Godkjent bilverksted · Industriveien 15, Ski
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Bilverkstedet i Ski som gir deg prisen <span className="text-brand-400">før</span> vi starter.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">
              EU-kontroll, service, bremser, AC og dekkskift for alle bilmerker. Bestill time på nett på under ett minutt – vi
              bekrefter på SMS.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/bestill-time" size="lg">
                <CalendarCheck className="size-5" aria-hidden />
                Bestill time
              </Button>
              <Button href={business.phoneHref} variant="white" size="lg">
                <Phone className="size-5" aria-hidden />
                Ring {business.phoneDisplay}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-300">Tar under ett minutt · uforpliktende · du får prisen før du sier ja.</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200">
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-brand-400" aria-hidden />
                Man–fre 09–17
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-400" aria-hidden />
                Fast pris på forhånd
              </li>
              <li className="flex items-center gap-2">
                <Car className="size-4 text-brand-400" aria-hidden />
                Alle bilmerker – også elbil
              </li>
            </ul>
          </div>

          {/* Floating "what you get" card – Airtasker/Fresha-style hero proof */}
          <aside className="hidden lg:block" aria-label="Dette får du">
            <div className="rounded-3xl bg-white p-6 text-ink-900 shadow-lift ring-1 ring-white/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Dette får du</p>
              <ul className="mt-4 grid gap-3 text-[15px]">
                {[
                  'Svar på SMS innen én virkedag',
                  'Eksakt pris før vi starter',
                  'Gratis etterkontroll etter EU-kontroll',
                  'Nøkkelinnkast – lever når det passer deg',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-ink-100 pt-5">
                <RatingBadge compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Quick picks */}
      <section aria-label="Populære tjenester" className="relative z-10 -mt-8 pb-4">
        <div className="container-x">
          <div className="grid gap-3 rounded-2xl bg-white p-3 shadow-lift ring-1 ring-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                to={`/tjenester/${s.slug}`}
                className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-semibold text-ink-900">{s.name}</span>
                  <span className="block text-sm text-ink-500">{s.priceFrom ? `fra ${formatNok(s.priceFrom)}` : 'Pris på forespørsel'}</span>
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-ink-300" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <Section
        id="hvorfor"
        eyebrow="Hvorfor Follo Bil & Service"
        title={
          <>
            Et lite verksted der du snakker med den som <em className="not-italic text-brand-600">faktisk skrur</em> på bilen din
          </>
        }
        lead="Vi er et godkjent verksted i Ski med korte linjer: du får ærlige råd, fast pris og en bil som er klar når vi sa den skulle være det."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t, i) => {
            const Icon = trustIcons[i]
            return (
              <li key={t.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <Icon className="size-7 text-brand-600" aria-hidden />
                <h3 className="mt-4 text-lg font-bold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{t.text}</p>
              </li>
            )
          })}
        </ul>
      </Section>

      {/* Services */}
      <Section
        id="tjenester"
        tone="muted"
        eyebrow="Tjenester"
        title={
          <>
            Alt bilen trenger – <em className="not-italic text-brand-600">på ett sted</em>
          </>
        }
        lead="Fra EU-kontroll til dekkskift. Veiledende fra-priser inkl. mva. Du får alltid et eksakt tilbud før vi starter."
        action={
          <Button to="/tjenester" variant="ghost">
            Se alle tjenester
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s) => (
            <ServiceCard key={s.slug} service={s} compact />
          ))}
        </div>
      </Section>

      {/* EU-kontroll + Dekkskift feature */}
      <section className="py-16 sm:py-20 lg:py-24" aria-label="EU-kontroll og dekkskift">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-white sm:p-10">
            <div className="absolute -right-10 -top-10 size-56 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
            <ShieldCheck className="size-10 text-brand-400" aria-hidden />
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">EU-kontroll i Ski – ledig tid innen få dager</h2>
            <p className="mt-3 text-ink-300">
              Godkjent kontrollorgan. Kontrollen tar ca. en time, og du får resultatet forklart på vanlig norsk. Blir noe underkjent,
              fikser vi det og tar etterkontrollen gratis.
            </p>
            <p className="mt-6 text-3xl font-extrabold">
              fra {formatNok(eu.priceFrom!)} <span className="text-base font-medium text-ink-300">inkl. mva</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/bestill-time?tjeneste=eu-kontroll">Bestill EU-kontroll</Button>
              <Button to="/eu-kontroll" variant="white">
                Slik foregår det
              </Button>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl bg-sun-100 p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 size-56 rounded-full bg-sun-500/30 blur-3xl" aria-hidden />
            <Snowflake className="size-10 text-ink-900" aria-hidden />
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">Dekkskift i Ski – ferdig på en halvtime</h2>
            <p className="mt-3 text-ink-700">
              Ta med hjulene, så skifter vi, måler mønsterdybde og trekker boltene med riktig moment. Har du kjøpt dekk selv, legger vi
              dem om og avbalanserer.
            </p>
            <p className="mt-6 text-3xl font-extrabold text-ink-900">
              fra {formatNok(dekk.priceFrom!)} <span className="text-base font-medium text-ink-600">hjulskift · omlegging fra 290,-/hjul</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/bestill-time?tjeneste=dekkskift" variant="secondary">
                Bestill dekkskift
              </Button>
              <Button to="/dekkskift" variant="white">
                Om dekkskift
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* How it works */}
      <Section
        id="slik"
        tone="muted"
        eyebrow="Slik fungerer det"
        title={
          <>
            Tre steg – <em className="not-italic text-brand-600">så er bilen i orden</em>
          </>
        }
      >
        <Steps />
      </Section>

      {/* Reviews */}
      <Section
        id="omtaler"
        eyebrow="Kundene våre"
        title="Det kundene sier"
        lead="Vi er et ungt verksted med ambisjon om å være det mest ærlige i Follo. Les hva kundene sier – og legg gjerne igjen en vurdering selv."
        action={<RatingBadge />}
      >
        <Reviews />
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="muted" eyebrow="Ofte stilte spørsmål" title="Lurer du på noe?">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Faq items={faqs} />
          </div>
          <aside className="rounded-2xl bg-ink-900 p-8 text-white lg:col-span-2">
            <h3 className="text-xl font-bold tracking-tight">Finner du ikke svaret?</h3>
            <p className="mt-2 text-ink-300">Ring oss i åpningstiden, eller send en melding – vi svarer innen én virkedag.</p>
            <div className="mt-6 grid gap-3">
              <Button href={business.phoneHref} variant="white">
                <Phone className="size-4" aria-hidden />
                {business.phoneDisplay}
              </Button>
              <Button to="/kontakt" variant="primary">
                Send melding
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {/* Contact */}
      <Section id="kontakt" eyebrow="Finn oss" title="Industriveien 15, Ski" lead="Rett ved Ski stasjon, med gratis parkering utenfor porten.">
        <ContactPanel />
      </Section>
    </>
  )
}
