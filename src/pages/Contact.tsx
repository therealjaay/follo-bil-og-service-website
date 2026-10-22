import { type FormEvent, useState } from 'react'
import { CheckCircle2, Train, Car, ParkingCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { ContactPanel } from '../components/ContactPanel'
import { PageHero, Section } from '../components/Section'
import { business } from '../data/business'
import { useSeo } from '../lib/useSeo'

const inputCls =
  'mt-1.5 block w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none'

export function Contact() {
  useSeo({
    title: 'Kontakt oss – Industriveien 15, Ski',
    description: `Kontakt Follo Bil & Service i Ski. Telefon ${business.phoneDisplay}, e-post ${business.email}. Industriveien 15, 1424 Ski. Åpent man–fre 09–17. Kart og veibeskrivelse.`,
    path: '/kontakt',
  })
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Snakk med oss" lead="Ring, send en melding eller stikk innom. Vi svarer på e-post innen én virkedag." />

      <Section id="info" title="Her finner du oss" lead={`${business.address.street}, ${business.address.postalCode} ${business.address.city} – i industriområdet rett ved Ski stasjon.`}>
        <ContactPanel />
      </Section>

      <Section id="veien" tone="muted" eyebrow="Veibeskrivelse" title="Slik kommer du hit">
        <ul className="grid gap-5 md:grid-cols-3">
          {[
            [Car, 'Med bil', 'Fra E18/E6: følg skilting mot Ski sentrum, ta av til Industriveien. Gratis parkering rett utenfor porten.'],
            [Train, 'Med tog', 'Follobanen tar deg fra Oslo S til Ski på 12 minutter. Fra Ski stasjon er det ca. 3 minutters gange.'],
            [ParkingCircle, 'Levering utenom åpningstid', 'Bruk nøkkelinnkastet ved inngangsdøra. Legg nøkkelen i en konvolutt med reg.nr og telefonnummer.'],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Car
            return (
              <li key={String(t)} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100">
                <I className="size-7 text-brand-600" aria-hidden />
                <h3 className="mt-4 text-lg font-bold tracking-tight">{String(t)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{String(d)}</p>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section id="melding" eyebrow="Send melding" title="Har du et spørsmål?" lead="Ikke klar for å bestille? Spør oss om pris, tid eller om vi kan hjelpe med akkurat din bil.">
        <div className="max-w-2xl">
          {sent ? (
            <div className="flex gap-4 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200">
              <CheckCircle2 className="size-7 shrink-0 text-emerald-600" aria-hidden />
              <div>
                <p className="font-bold text-emerald-900">Takk! Meldingen er sendt.</p>
                <p className="mt-1 text-[15px] text-emerald-800">Vi svarer innen én virkedag. Haster det, ring {business.phoneDisplay}.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="text-sm font-semibold text-ink-700">
                    Navn
                  </label>
                  <input id="c-name" name="name" required autoComplete="name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-phone" className="text-sm font-semibold text-ink-700">
                    Telefon eller e-post
                  </label>
                  <input id="c-phone" name="contact" required className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="c-msg" className="text-sm font-semibold text-ink-700">
                  Melding
                </label>
                <textarea id="c-msg" name="message" rows={4} required placeholder="Hva lurer du på? Ta gjerne med reg.nr." className={inputCls} />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-500">Vi bruker opplysningene kun til å svare deg.</p>
                <Button type="submit" size="lg">
                  Send melding
                </Button>
              </div>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
