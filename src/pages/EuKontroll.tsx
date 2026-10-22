import { AlertTriangle, CalendarClock, CheckCircle2, ClipboardList, Phone, RotateCcw, Search } from 'lucide-react'
import { Button } from '../components/Button'
import { Faq } from '../components/Faq'
import { PageHero, Section } from '../components/Section'
import { business } from '../data/business'
import { formatNok, getService } from '../data/services'
import { useSeo } from '../lib/useSeo'

const flow = [
  { icon: CalendarClock, title: 'Sjekk fristen', text: 'Fristen står på vegvesen.no (søk på reg.nr). Bestill gjerne 3–4 uker før, så har du tid til eventuelle utbedringer.' },
  { icon: Search, title: 'Vi kontrollerer', text: 'Kontrollen følger Statens vegvesens kontrollprogram: bremser, lys, hjul, styring, understell, utslipp og sikkerhetsutstyr.' },
  { icon: ClipboardList, title: 'Du får en tydelig rapport', text: 'Vi går gjennom resultatet sammen med deg. Hva er kritisk, hva må fikses før godkjenning – og hva kan vente.' },
  { icon: RotateCcw, title: 'Gratis etterkontroll', text: 'Må noe utbedres, får du pris først. Lar du oss fikse det, tar vi etterkontrollen uten ekstra kostnad.' },
]

const euFaq = [
  { q: 'Hvor ofte må bilen på EU-kontroll?', a: 'Personbil kontrolleres første gang når den er 4 år, deretter annethvert år. Varebil og bil med tilhengerfeste for tung henger har egne regler. Fristen finner du på vegvesen.no.' },
  { q: 'Hva skjer om jeg bommer på fristen?', a: 'Kjører du etter fristen, kan bilen bli avskiltet ved kontroll. Bestill time så snart du kan – vi har som regel ledig innen 2–3 virkedager.' },
  { q: 'Må jeg vente på verkstedet?', a: 'Nei. Du kan vente (ca. en time) eller levere bilen om morgenen og hente den senere samme dag. Ski stasjon er 3 minutter unna.' },
  { q: 'Kan dere fikse feil med en gang?', a: 'Mindre ting som pærer og viskerblader fikser vi ofte på stedet. Større feil får du et prisoverslag på, og vi finner en tid som passer.' },
  { q: 'Hva koster EU-kontroll hos dere?', a: `Veiledende pris er fra ${formatNok(getService('eu-kontroll')!.priceFrom!)} inkl. mva for personbil. Etterkontroll er gratis når vi utfører utbedringene.` },
]

export function EuKontroll() {
  useSeo({
    title: 'EU-kontroll i Ski – godkjent kontrollorgan, ledig tid raskt',
    description:
      'EU-kontroll (periodisk kjøretøykontroll) i Ski hos Follo Bil & Service. Godkjent av Statens vegvesen. Ca. 1 time, gratis etterkontroll ved utbedring hos oss. Bestill time på nett.',
    path: '/eu-kontroll',
  })
  const eu = getService('eu-kontroll')!

  return (
    <>
      <PageHero
        eyebrow="EU-kontroll"
        title="EU-kontroll i Ski – uten stress"
        lead="Godkjent kontrollorgan. Kontrollen tar ca. en time, og du får resultatet forklart på vanlig norsk – ikke bare en utskrift."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button to="/bestill-time?tjeneste=eu-kontroll" size="lg">
            Bestill EU-kontroll
          </Button>
          <Button href={business.phoneHref} variant="white" size="lg">
            <Phone className="size-5" aria-hidden />
            {business.phoneDisplay}
          </Button>
          <p className="text-ink-200">
            <span className="text-2xl font-extrabold text-white">fra {formatNok(eu.priceFrom!)}</span> inkl. mva
          </p>
        </div>
      </PageHero>

      <Section id="slik" eyebrow="Slik foregår det" title="Fire steg fra bestilling til godkjent bil">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {flow.map((f, i) => (
            <li key={f.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <f.icon className="size-7 text-brand-600" aria-hidden />
                <span className="text-sm font-bold text-ink-300">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{f.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="vanlige-feil" tone="muted" eyebrow="Godt å vite" title="De vanligste grunnene til at biler blir underkjent">
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="grid gap-3">
            {[
              ['Lys', 'Defekte pærer, feil justering eller matte lykteglass. Billig å fikse – gjør det før kontrollen.'],
              ['Bremser', 'Slitte klosser/skiver, ujevn bremsevirkning eller gammel bremsevæske.'],
              ['Hjuloppheng og styring', 'Slark i bærearmer, styreledd eller hjullager.'],
              ['Dekk', 'Mønsterdybde under 1,6 mm (3 mm på vinterdekk) eller skader.'],
              ['Rust og understell', 'Gjennomrust i bærende deler eller lekkasjer.'],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4 rounded-xl bg-white p-4 shadow-card ring-1 ring-ink-100">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-sun-500" aria-hidden />
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="text-[15px] text-ink-600">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-ink-900 p-8 text-white">
            <CheckCircle2 className="size-8 text-emerald-400" aria-hidden />
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight">Kombiner med service – spar ett besøk</h3>
            <p className="mt-3 text-ink-300">
              Mange velger å ta EU-kontroll og service samtidig. Da sjekker vi bremser, lys og understell uansett, og du slipper å levere
              bilen to ganger.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/bestill-time?tjeneste=service">Bestill service + EU-kontroll</Button>
              <Button to="/tjenester/service" variant="white">
                Om service
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="Spørsmål og svar" title="Ofte stilte spørsmål om EU-kontroll">
        <div className="max-w-3xl">
          <Faq items={euFaq} />
        </div>
      </Section>
    </>
  )
}
