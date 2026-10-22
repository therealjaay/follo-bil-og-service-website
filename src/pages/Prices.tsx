import { Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { PageHero, Section } from '../components/Section'
import { formatNok, services } from '../data/services'
import { useSeo } from '../lib/useSeo'

const extra = [
  ['Timepris verksted', 'kr 1 190,- per time'],
  ['Hjulskift', 'fra kr 490,-'],
  ['Dekkhotell', 'fra kr 1 290,- per sesong'],
  ['Omlegging av dekk', 'fra kr 290,- per hjul'],
  ['Bremsevæskeskift', 'fra kr 990,-'],
  ['Batteribytte (inkl. registrering)', 'fra kr 790,- + batteri'],
  ['Lyspære (bytte)', 'fra kr 150,- + pære'],
  ['Etterkontroll EU-kontroll', 'gratis ved utbedring hos oss'],
]

export function Prices() {
  useSeo({
    title: 'Priser – åpne, veiledende priser på service og reparasjon',
    description:
      'Veiledende priser hos Follo Bil & Service i Ski: EU-kontroll, service, oljeskift, bremser, AC, dekkskift og dekkhotell. Alle priser inkl. mva. Du får alltid eksakt pris før vi starter.',
    path: '/priser',
  })

  return (
    <>
      <PageHero
        eyebrow="Priser"
        title="Åpne priser. Ingen overraskelser."
        lead="Vi tror på å vise prisene. Dette er veiledende fra-priser inkl. mva for vanlig personbil – det eksakte tilbudet får du alltid før vi starter på bilen."
      >
        <Button to="/bestill-time" size="lg">
          Bestill time
        </Button>
      </PageHero>

      <Section id="tjenester" title="Tjenester" tone="muted">
        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
          <table className="w-full text-left text-[15px]">
            <thead className="bg-ink-50 text-sm uppercase tracking-wider text-ink-500">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Tjeneste
                </th>
                <th scope="col" className="hidden px-5 py-3 font-semibold sm:table-cell">
                  Tidsbruk
                </th>
                <th scope="col" className="px-5 py-3 text-right font-semibold">
                  Veil. pris
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {services.map((s) => (
                <tr key={s.slug} className="hover:bg-ink-50/60">
                  <td className="px-5 py-4">
                    <Link to={`/tjenester/${s.slug}`} className="font-semibold text-ink-900 hover:text-brand-600">
                      {s.name}
                    </Link>
                    <span className="block text-sm text-ink-500">{s.short}</span>
                  </td>
                  <td className="hidden px-5 py-4 text-ink-600 sm:table-cell">{s.duration}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold">
                    {s.priceFrom ? `fra ${formatNok(s.priceFrom)}` : 'På forespørsel'}
                    {s.priceUnit && <span className="block text-xs font-normal text-ink-500">{s.priceUnit}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="annet" title="Timepris og småjobber">
        <div className="grid gap-8 lg:grid-cols-3">
          <dl className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card lg:col-span-2">
            {extra.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 px-5 py-4 text-[15px]">
                <dt className="text-ink-800">{k}</dt>
                <dd className="whitespace-nowrap font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <aside className="flex gap-4 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
            <Info className="size-6 shrink-0 text-brand-600" aria-hidden />
            <div className="text-[15px] leading-relaxed text-ink-700">
              <p className="font-semibold text-ink-900">Slik leser du prisene</p>
              <p className="mt-2">
                Alle priser er inkl. mva og gjelder vanlig personbil. Deler kommer i tillegg der det er oppgitt. Vi gir deg et eksakt
                tilbud på SMS eller e-post før vi starter, og ringer alltid om vi finner noe uventet.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
