import { type FormEvent, useMemo, useState } from 'react'
import { CalendarCheck, Check, CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { business } from '../data/business'
import { services } from '../data/services'
import { useSeo } from '../lib/useSeo'

type Slot = 'morgen' | 'formiddag' | 'ettermiddag'

type FormState = {
  service: string
  regNr: string
  date: string
  slot: Slot
  keyDrop: boolean
  name: string
  phone: string
  email: string
  message: string
  consent: boolean
}

const slots: { value: Slot; label: string; time: string }[] = [
  { value: 'morgen', label: 'Morgen', time: '09:00–10:30' },
  { value: 'formiddag', label: 'Formiddag', time: '10:30–13:00' },
  { value: 'ettermiddag', label: 'Ettermiddag', time: '13:00–16:00' },
]

function nextWeekday(from: Date, add: number) {
  const d = new Date(from)
  d.setDate(d.getDate() + add)
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

const inputCls =
  'mt-1.5 block w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none aria-[invalid=true]:border-red-500'

const patterns = {
  regNr: /^[A-ZÆØÅ]{2}\s?\d{4,5}$/i,
  phone: /^(\+47)?\s?\d{8}$/,
  email: /^\S+@\S+\.\S+$/,
}

/** Inline "looks good" mark (Tripadvisor-style) shown once a field validates. */
function ValidMark({ show }: { show: boolean }) {
  if (!show) return null
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 animate-[pop_.25s_ease-out]">
      <Check className="size-3.5" strokeWidth={3} aria-hidden />
      <span className="sr-only">Ser bra ut</span>
    </span>
  )
}

export function Booking() {
  useSeo({
    title: 'Bestill time – svar på SMS innen én virkedag',
    description:
      'Bestill verkstedtime hos Follo Bil & Service i Ski. Velg tjeneste, dag og tidspunkt – vi bekrefter på SMS. EU-kontroll, service, dekkskift og mer.',
    path: '/bestill-time',
  })

  const [params] = useSearchParams()
  const preselected = params.get('tjeneste') ?? ''
  const minDate = useMemo(() => nextWeekday(new Date(), 1), [])

  const [form, setForm] = useState<FormState>({
    service: services.some((s) => s.slug === preselected) ? preselected : '',
    regNr: '',
    date: '',
    slot: 'morgen',
    keyDrop: false,
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState<FormState | null>(null)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }))

  function validate(): boolean {
    const e: typeof errors = {}
    if (!form.service) e.service = 'Velg hva du trenger hjelp med'
    if (!patterns.regNr.test(form.regNr.trim())) e.regNr = 'Skriv et gyldig norsk reg.nr, f.eks. AB 12345'
    if (!form.date) e.date = 'Velg en dag'
    if (form.name.trim().length < 2) e.name = 'Skriv navnet ditt'
    if (!patterns.phone.test(form.phone.replace(/\s/g, ''))) e.phone = 'Skriv et gyldig norsk telefonnummer (8 siffer)'
    if (form.email && !patterns.email.test(form.email)) e.email = 'Skriv en gyldig e-postadresse'
    if (!form.consent) e.consent = 'Du må samtykke for at vi skal kunne kontakte deg'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (!validate()) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }
    setSubmitting(true)
    // Prototype: no backend. A real implementation posts to a booking API / workshop system.
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setDone(form)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const chosen = services.find((s) => s.slug === (done ?? form).service)
  const ok = {
    regNr: !errors.regNr && patterns.regNr.test(form.regNr.trim()),
    phone: !errors.phone && patterns.phone.test(form.phone.replace(/\s/g, '')),
    name: !errors.name && form.name.trim().length >= 2,
    email: !errors.email && patterns.email.test(form.email),
  }

  if (done) {
    const slot = slots.find((s) => s.value === done.slot)!
    const dateStr = new Date(done.date).toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long' })
    return (
      <section className="bg-ink-50 py-16 sm:py-24">
        <div className="container-x max-w-2xl">
          <div className="rounded-3xl bg-white p-8 shadow-lift ring-1 ring-ink-100 sm:p-10">
            <CheckCircle2 className="size-14 text-emerald-500" aria-hidden />
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight">Takk, {done.name.split(' ')[0]}! Vi har mottatt forespørselen.</h1>
            <p className="mt-3 text-lg text-ink-600">
              Vi bekrefter tidspunktet på SMS til <strong className="text-ink-900">{done.phone}</strong> innen én virkedag – som regel
              raskere.
            </p>
            <dl className="mt-8 grid gap-4 rounded-2xl bg-ink-50 p-6 text-[15px] sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-ink-500">Tjeneste</dt>
                <dd className="font-semibold">{chosen?.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink-500">Bil</dt>
                <dd className="font-semibold uppercase">{done.regNr}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink-500">Ønsket dag</dt>
                <dd className="font-semibold capitalize">{dateStr}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink-500">Tidspunkt</dt>
                <dd className="font-semibold">
                  {slot.label} ({slot.time}){done.keyDrop && ' · nøkkelinnkast'}
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-ink-500">
              Må du endre? Ring {business.phoneDisplay} eller svar på SMS-en. Vi ses i {business.address.street}, {business.address.city}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/">Til forsiden</Button>
              <Button href={business.mapsUrl} target="_blank" rel="noreferrer" variant="ghost">
                Veibeskrivelse
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-ink-50 py-10 pb-28 sm:py-16 lg:pb-16">
      <div className="container-x grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Bestill time</h1>
          <p className="mt-3 text-lg text-ink-600">
            Tar under ett minutt. Vi bekrefter på SMS innen én virkedag. Haster det?{' '}
            <a href={business.phoneHref} className="font-semibold text-brand-600 underline-offset-2 hover:underline">
              Ring {business.phoneDisplay}
            </a>
            .
          </p>

          <form id="booking-form" onSubmit={onSubmit} noValidate className="mt-8 grid gap-8 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
            <fieldset>
              <legend className="text-lg font-bold">1. Hva trenger bilen?</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <label
                    key={s.slug}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-colors has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 ${
                      errors.service ? 'border-red-300' : 'border-ink-200 hover:bg-ink-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={s.slug}
                      checked={form.service === s.slug}
                      onChange={() => update('service', s.slug)}
                      className="size-4 accent-brand-500"
                    />
                    <s.icon className="size-5 text-brand-600" aria-hidden />
                    <span className="text-[15px] font-medium">{s.name}</span>
                  </label>
                ))}
              </div>
              {errors.service && (
                <p className="mt-2 text-sm font-medium text-red-600" role="alert">
                  {errors.service}
                </p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold">2. Bilen og tidspunkt</legend>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="regNr" className="text-sm font-semibold text-ink-700">
                    Registreringsnummer
                  </label>
                  <div className="relative">
                    <input
                      id="regNr"
                      name="regNr"
                      autoComplete="off"
                      placeholder="AB 12345"
                      value={form.regNr}
                      onChange={(e) => update('regNr', e.target.value.toUpperCase())}
                      aria-invalid={!!errors.regNr}
                      aria-describedby={errors.regNr ? 'regNr-err' : undefined}
                      className={`${inputCls} pr-11 font-mono uppercase tracking-widest`}
                    />
                    <ValidMark show={ok.regNr} />
                  </div>
                  {errors.regNr && (
                    <p id="regNr-err" className="mt-1.5 text-sm font-medium text-red-600">
                      {errors.regNr}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="date" className="text-sm font-semibold text-ink-700">
                    Ønsket dag
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-err' : undefined}
                    className={inputCls}
                  />
                  {errors.date && (
                    <p id="date-err" className="mt-1.5 text-sm font-medium text-red-600">
                      {errors.date}
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold text-ink-700">Når passer det å levere?</p>
              <div className="mt-1.5 grid grid-cols-3 gap-2">
                {slots.map((s) => (
                  <label
                    key={s.value}
                    className="flex cursor-pointer flex-col items-center rounded-xl border border-ink-200 p-3 text-center transition-colors hover:bg-ink-50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50"
                  >
                    <input type="radio" name="slot" value={s.value} checked={form.slot === s.value} onChange={() => update('slot', s.value)} className="sr-only" />
                    <span className="text-[15px] font-semibold">{s.label}</span>
                    <span className="text-xs text-ink-500">{s.time}</span>
                  </label>
                ))}
              </div>

              <label className="mt-4 flex items-start gap-3 text-[15px]">
                <input type="checkbox" checked={form.keyDrop} onChange={(e) => update('keyDrop', e.target.checked)} className="mt-1 size-4 accent-brand-500" />
                <span>
                  Jeg leverer nøkkelen i nøkkelinnkastet før dere åpner
                  <span className="block text-sm text-ink-500">Bilen blir da først i køen når vi åpner kl. 09.</span>
                </span>
              </label>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold">3. Hvordan når vi deg?</legend>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-ink-700">
                    Navn
                  </label>
                  <div className="relative">
                    <input id="name" name="name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} aria-invalid={!!errors.name} className={`${inputCls} pr-11`} />
                    <ValidMark show={ok.name} />
                  </div>
                  {errors.name && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-ink-700">
                    Mobilnummer <span className="font-normal text-ink-500">(for SMS-bekreftelse)</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="912 34 567"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      aria-invalid={!!errors.phone}
                      aria-describedby="phone-help"
                      className={`${inputCls} pr-11`}
                    />
                    <ValidMark show={ok.phone} />
                  </div>
                  {errors.phone ? (
                    <p className="mt-1.5 text-sm font-medium text-red-600">{errors.phone}</p>
                  ) : (
                    <p id="phone-help" className="mt-1.5 text-xs text-ink-500">
                      Brukes bare til å bekrefte timen – ingen nyhetsbrev.
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-semibold text-ink-700">
                    E-post <span className="font-normal text-ink-500">(valgfritt)</span>
                  </label>
                  <div className="relative">
                    <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} className={`${inputCls} pr-11`} />
                    <ValidMark show={ok.email} />
                  </div>
                  {errors.email && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-ink-700">
                    Beskriv gjerne problemet <span className="font-normal text-ink-500">(valgfritt)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="F.eks. «ulyd fra venstre framhjul ved bremsing» eller «motorlampe lyser»"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              <label className="mt-5 flex items-start gap-3 text-[15px]">
                <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} aria-invalid={!!errors.consent} className="mt-1 size-4 accent-brand-500" />
                <span>
                  Jeg samtykker til at Follo Bil &amp; Service kontakter meg om denne forespørselen.{' '}
                  <Link to="/kontakt" className="text-brand-600 underline-offset-2 hover:underline">
                    Personvern
                  </Link>
                </span>
              </label>
              {errors.consent && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.consent}</p>}
            </fieldset>

            <div className="flex flex-col gap-3 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink-500">Uforpliktende. Vi bekrefter tidspunkt og pris før du binder deg.</p>
              <Button type="submit" size="lg" disabled={submitting} className="sm:min-w-56">
                <CalendarCheck className="size-5" aria-hidden />
                {submitting ? 'Sender…' : 'Send forespørsel'}
              </Button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-ink-900 p-7 text-white">
            <h2 className="text-lg font-bold">Det du bestiller</h2>
            {chosen ? (
              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <chosen.icon className="size-6 shrink-0 text-brand-400" aria-hidden />
                <div>
                  <p className="font-semibold">{chosen.name}</p>
                  <p className="text-sm text-ink-300">{chosen.short}</p>
                  <p className="mt-2 text-sm text-ink-200">
                    <Clock className="mr-1 inline size-4 text-brand-400" aria-hidden />
                    {chosen.duration}
                    {chosen.priceFrom && ` · veil. fra ${chosen.priceFrom.toLocaleString('nb-NO')},-`}
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-3 text-ink-300">Velg en tjeneste, så viser vi tidsbruk og veiledende pris her.</p>
            )}
            <ul className="mt-6 grid gap-3 text-[15px] text-ink-200">
              <li className="flex gap-3">
                <ShieldCheck className="size-5 shrink-0 text-brand-400" aria-hidden />
                Godkjent bilverksted – alle merker
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-brand-400" aria-hidden />
                Eksakt pris på SMS før vi starter
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 shrink-0 text-brand-400" aria-hidden />
                Vi ringer før vi gjør mer enn avtalt
              </li>
            </ul>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-ink-300">
              <p className="font-semibold text-white">Heller ringe?</p>
              <a href={business.phoneHref} className="mt-1 block text-2xl font-extrabold text-white">
                {business.phoneDisplay}
              </a>
              <p>Man–fre 09:00–17:00</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile summary bar – Fresha/Trainline-style: what you're booking + primary action always within thumb reach */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 pb-safe backdrop-blur lg:hidden"
        role="region"
        aria-label="Oppsummering"
      >
        <div className="container-x flex items-center justify-between gap-3 py-2.5">
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold text-ink-900">{chosen ? chosen.name : 'Velg tjeneste'}</p>
            <p className="truncate text-xs text-ink-500">
              {chosen?.priceFrom ? `veil. fra ${chosen.priceFrom.toLocaleString('nb-NO')},- · ${chosen.duration}` : 'Uforpliktende · svar på SMS'}
            </p>
          </div>
          <Button type="submit" form="booking-form" disabled={submitting} className="shrink-0">
            {submitting ? 'Sender…' : 'Send forespørsel'}
          </Button>
        </div>
      </div>
    </section>
  )
}
