import type { LucideIcon } from 'lucide-react'
import {
  Battery,
  CarFront,
  CircleGauge,
  Disc3,
  Droplets,
  Fan,
  ShieldCheck,
  Snowflake,
  SprayCan,
  Wrench,
} from 'lucide-react'

export type Service = {
  slug: string
  name: string
  short: string
  icon: LucideIcon
  priceFrom?: number
  priceUnit?: string
  duration: string
  intro: string
  includes: string[]
  good: string
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'eu-kontroll',
    name: 'EU-kontroll',
    short: 'Periodisk kjøretøykontroll – godkjent kontrollorgan.',
    icon: ShieldCheck,
    priceFrom: 990,
    duration: 'ca. 1 time',
    intro:
      'Vi er godkjent av Statens vegvesen for EU-kontroll av personbil og varebil. Kontrollen tar rundt en time, og du får resultatet forklart på vanlig norsk – ikke bare en utskrift.',
    includes: [
      'Full periodisk kjøretøykontroll etter Statens vegvesens kontrollprogram',
      'Gjennomgang av resultatet med deg – hva som må fikses nå og hva som kan vente',
      'Prisoverslag på eventuelle utbedringer før vi gjør noe',
      'Gratis etterkontroll når vi utbedrer feilene',
    ],
    good: 'Sjekk fristen din på vegvesen.no og bestill i god tid – vi har ofte ledig tid innen 2–3 virkedager.',
    featured: true,
  },
  {
    slug: 'service',
    name: 'Service og vedlikehold',
    short: 'Service etter produsentens program. Garantien beholdes.',
    icon: Wrench,
    priceFrom: 2990,
    duration: '½–1 dag',
    intro:
      'Regelmessig service er den billigste forsikringen mot dyre reparasjoner. Vi følger produsentens serviceintervaller for ditt bilmerke, bruker deler av original kvalitet og oppdaterer servicehefte eller digital servicebok.',
    includes: [
      'Motorolje og oljefilter, luft-, pollen- og drivstoffilter etter intervall',
      'Kontroll av bremser, hjuloppheng, styring, lys og væskenivåer',
      'Diagnose og nullstilling av serviceindikator',
      'Stempel i servicehefte / registrering i digital servicebok',
    ],
    good: 'Kombiner service og EU-kontroll i samme besøk – da slipper du å levere bilen to ganger.',
    featured: true,
  },
  {
    slug: 'bremser',
    name: 'Bremseservice',
    short: 'Klosser, skiver, bremsevæske og kalipere.',
    icon: Disc3,
    priceFrom: 2490,
    priceUnit: 'per aksel',
    duration: '2–3 timer',
    intro:
      'Ulyder, vibrasjon i rattet eller lengre bremselengde? Vi måler slitasjen på klosser og skiver, sjekker bremsevæsken og gir deg et fast pristilbud før vi bytter noe.',
    includes: [
      'Måling av klosser, skiver og bremsevæskens kokepunkt',
      'Bytte av klosser og skiver med deler av original kvalitet',
      'Skifte av bremsevæske (anbefalt hvert 2. år)',
      'Kontroll av håndbrekk, slanger og kalipere',
    ],
    good: 'Bremsevæske trekker til seg fukt over tid. Har det gått mer enn to år, bør den skiftes selv om bremsene føles fine.',
    featured: true,
  },
  {
    slug: 'dekk-og-dekkhotell',
    name: 'Dekkskift og dekkhotell',
    short: 'Hjulskift, dekkhotell, nye dekk og felgreparasjon.',
    icon: Snowflake,
    priceFrom: 490,
    duration: '30–45 min',
    intro:
      'Slipp å bære hjul i trappa. Vi skifter, vasker og lagrer hjulene dine tørt og trygt – og sier fra når mønsterdybden begynner å bli lav. Vi hjelper også med nye dekk, omlegging, avbalansering og felgreparasjon.',
    includes: [
      'Hjulskift med kontroll av mønsterdybde og lufttrykk',
      'Dekkhotell: vask, merking og lagring på pall innendørs',
      'Nye dekk fra kjente merker – vi henter inn pris på din dimensjon',
      'Omlegging, avbalansering og reparasjon av felg',
    ],
    good: 'Med dekkhotell står hjulene allerede hos oss når sesongen snur. Du får SMS når det er tid for skift, og bestiller time på nett.',
    featured: true,
  },
  {
    slug: 'ac-service',
    name: 'AC-service',
    short: 'Påfyll, lekkasjesøk og desinfisering.',
    icon: Fan,
    priceFrom: 1490,
    duration: '1–1½ time',
    intro:
      'Et klimaanlegg mister 10–15 % gass i året. Blir det dårlig kjøling eller vond lukt, tømmer vi anlegget, trykktester for lekkasje og fyller på riktig mengde gass og olje.',
    includes: [
      'Tømming, vakuumering og påfyll av korrekt gassmengde (R134a / R1234yf)',
      'Lekkasjesøk med UV-sporstoff',
      'Desinfisering av fordamper mot vond lukt',
      'Kontroll av kompressor, kondensator og pollenfilter',
    ],
    good: 'Bruk AC-en noen minutter hver uke – også om vinteren. Det smører pakningene og forebygger lekkasje.',
  },
  {
    slug: 'oljeskift',
    name: 'Oljeskift',
    short: 'Rask oljeskift med riktig olje til din motor.',
    icon: Droplets,
    priceFrom: 1290,
    duration: '30–45 min',
    intro:
      'Trenger du bare olje og filter mellom servicene? Vi bruker olje som oppfyller produsentens spesifikasjon og tar en rask sjekk av væskenivåer og lys mens bilen står på løfteren.',
    includes: ['Motorolje etter produsentens spesifikasjon', 'Nytt oljefilter og pakning', 'Nullstilling av serviceindikator', 'Kontroll av væskenivåer og lys'],
    good: 'Kjører du mye korte turer, bør du vurdere oljeskift oftere enn intervallet tilsier.',
  },
  {
    slug: 'diagnose',
    name: 'Feilsøking og diagnose',
    short: 'Motorlampe, feilkoder og elektriske feil.',
    icon: CircleGauge,
    priceFrom: 790,
    duration: '1 time',
    intro:
      'Lyser motorlampen, eller oppfører bilen seg rart? Vi leser ut feilkoder med moderne diagnoseutstyr, finner årsaken og gir deg et tydelig svar på hva som må gjøres – og hva det koster.',
    includes: ['Utlesing av feilkoder på alle systemer', 'Feilsøking av elektrisk anlegg, sensorer og motorstyring', 'Skriftlig forklaring og prisoverslag', 'Sletting av feilkoder etter utbedring'],
    good: 'Blinker motorlampen (ikke bare lyser), bør du stoppe og ringe oss før du kjører videre.',
  },
  {
    slug: 'reparasjon',
    name: 'Reparasjoner',
    short: 'Clutch, registerreim, eksos, hjuloppheng og mer.',
    icon: CarFront,
    duration: 'Etter avtale',
    intro:
      'Fra en ulyd i hjulopphenget til registerreim og clutch – vi tar både små og store reparasjoner på alle bilmerker. Du får alltid et prisoverslag først, og vi ringer deg hvis vi finner noe uventet underveis.',
    includes: ['Motor, clutch og girkasse', 'Registerreim og vannpumpe', 'Eksosanlegg og partikkelfilter', 'Hjuloppheng, støtdempere og styring'],
    good: 'Jo tidligere du kommer inn med en ulyd, desto rimeligere blir reparasjonen som regel.',
  },
  {
    slug: 'understellsbehandling',
    name: 'Understellsbehandling',
    short: 'Antirust som beskytter mot salt og fukt.',
    icon: SprayCan,
    duration: '1 dag',
    intro:
      'Norske vintre med salt og fukt er harde mot understellet. Vi rengjør, tørker og påfører antirustbehandling som forlenger bilens levetid og gjør neste EU-kontroll enklere.',
    includes: ['Vask og tørk av understell', 'Antirustbehandling av understell og hulrom', 'Kontroll av eksisterende rustskader', 'Anbefalt intervall 2–3 år'],
    good: 'Best effekt får du på høsten, før saltet kommer.',
  },
  {
    slug: 'batteri-og-elektro',
    name: 'Batteri og elektro',
    short: 'Batteritest, dynamo, lys og elektriske feil.',
    icon: Battery,
    duration: '30 min – 2 timer',
    intro:
      'Treg start om morgenen? Vi tester batteri og ladesystem, bytter batteri med riktig registrering i bilens styreenhet, og feilsøker lys og elektriske feil.',
    includes: ['Batteritest og bytte med registrering', 'Kontroll av dynamo og startmotor', 'Lyspærer, LED og justering av lys', 'Feilsøking av elektriske feil'],
    good: 'Et bilbatteri varer typisk 4–6 år. Test det gratis når du er innom for service.',
  },
]

export const featuredServices = services.filter((s) => s.featured)

export function getService(slug: string | undefined) {
  return services.find((s) => s.slug === slug)
}

export const formatNok = (n: number) => `${n.toLocaleString('nb-NO')},-`
