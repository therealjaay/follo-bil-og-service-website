import { Check, ChevronRight, Clock, Lightbulb, Phone } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { PageHero, Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { business } from '../data/business'
import { formatNok, getService, services } from '../data/services'
import { useSeo } from '../lib/useSeo'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  useSeo({
    title: service ? `${service.name} i Ski` : 'Tjeneste',
    description: service ? `${service.name} hos Follo Bil & Service i Ski. ${service.short} Bestill time på nett.` : '',
    path: `/tjenester/${slug ?? ''}`,
  })

  if (!service) return <Navigate to="/tjenester" replace />

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const Icon = service.icon

  return (
    <>
      <PageHero eyebrow="Tjeneste" title={`${service.name} i Ski`} lead={service.short}>
        <nav aria-label="Brødsmulesti" className="mb-6 -mt-2 text-sm text-ink-300">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-white">
                Hjem
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden />
            <li>
              <Link to="/tjenester" className="hover:text-white">
                Tjenester
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden />
            <li aria-current="page" className="text-white">
              {service.name}
            </li>
          </ol>
        </nav>
        <div className="flex flex-wrap gap-3">
          <Button to={`/bestill-time?tjeneste=${service.slug}`}>Bestill {service.name.toLowerCase()}</Button>
          <Button href={business.phoneHref} variant="white">
            <Phone className="size-4" aria-hidden />
            {business.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                <Icon className="size-7" aria-hidden />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Om {service.name.toLowerCase()}</h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{service.intro}</p>

            <h3 className="mt-10 text-xl font-bold tracking-tight">Dette er inkludert</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-ink-50 p-4 text-[15px] leading-relaxed text-ink-800">
                  <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4 rounded-2xl border border-sun-500/40 bg-sun-100 p-6">
              <Lightbulb className="size-6 shrink-0 text-ink-900" aria-hidden />
              <div>
                <h3 className="font-bold">Godt å vite</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-800">{service.good}</p>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-lift">
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-500">Veiledende pris</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">
                {service.priceFrom ? (
                  <>
                    fra {formatNok(service.priceFrom)}
                    {service.priceUnit && <span className="block text-base font-medium text-ink-500">{service.priceUnit}</span>}
                  </>
                ) : (
                  'På forespørsel'
                )}
              </p>
              <p className="mt-1 text-sm text-ink-500">inkl. mva. Eksakt pris før vi starter.</p>
              <p className="mt-5 flex items-center gap-2 text-[15px] text-ink-700">
                <Clock className="size-4 text-brand-600" aria-hidden />
                Tidsbruk: {service.duration}
              </p>
              <div className="mt-6 grid gap-3">
                <Button to={`/bestill-time?tjeneste=${service.slug}`} size="lg">
                  Bestill time
                </Button>
                <Button href={business.phoneHref} variant="ghost" size="lg">
                  <Phone className="size-4" aria-hidden />
                  Ring {business.phoneDisplay}
                </Button>
              </div>
              <p className="mt-4 text-xs text-ink-500">Man–fre 09–17 · {business.address.street}, {business.address.city}</p>
            </div>
          </aside>
        </div>
      </section>

      <Section id="relatert" tone="muted" title="Andre tjenester">
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} compact />
          ))}
        </div>
      </Section>
    </>
  )
}
