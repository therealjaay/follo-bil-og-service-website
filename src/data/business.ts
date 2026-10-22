export const business = {
  name: 'Follo Bil & Service AS',
  shortName: 'Follo Bil & Service',
  tagline: 'Godkjent bilverksted i Ski',
  orgNr: '934 776 518',
  established: 2024,
  phoneDisplay: '484 21 756',
  phoneHref: 'tel:+4748421756',
  smsHref: 'sms:+4748421756',
  email: 'post@follobs.no',
  address: {
    street: 'Industriveien 15',
    postalCode: '1424',
    city: 'Ski',
    municipality: 'Nordre Follo',
  },
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Industriveien+15,+1424+Ski',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Industriveien+15,+1424+Ski,+Norway&z=15&output=embed&hl=no',
  hours: [
    { days: 'Mandag–fredag', time: '09:00–17:00', open: true },
    { days: 'Lørdag', time: 'Stengt', open: false },
    { days: 'Søndag', time: 'Stengt', open: false },
  ],
  areas: ['Ski', 'Langhus', 'Kolbotn', 'Oppegård', 'Ås', 'Vestby', 'Enebakk', 'Oslo sør'],
  siteUrl: 'https://follobilogserviceas.com',
} as const

export const trustPoints = [
  { title: 'Godkjent bilverksted', text: 'Godkjent av Statens vegvesen for service, reparasjon og EU-kontroll.' },
  { title: 'Alle bilmerker', text: 'Bensin, diesel, hybrid og elbil – vi følger produsentens serviceprogram.' },
  { title: 'Fast pris på forhånd', text: 'Du får alltid et prisoverslag før vi starter. Ingen overraskelser på fakturaen.' },
  { title: 'Lokalt i Ski', text: '3 minutter fra Ski stasjon. Lever bilen om morgenen – hent den etter jobb.' },
] as const

/*
 * Only the first review is a verified quote from the current website.
 * The remaining two are illustrative and must be replaced with real
 * Google reviews before launch.
 */
export const reviews = [
  {
    name: 'Eskild',
    source: 'Kunde',
    rating: 5,
    headline: 'Anbefales på det sterkeste',
    text: 'Veldig fornøyd med servicen og arbeidet! Profesjonelt, raskt og pålitelig. Anbefales på det sterkeste!',
    verified: true,
  },
  {
    name: 'Marianne L.',
    source: 'Google',
    rating: 5,
    headline: 'Time på mandag – uten å overselge',
    text: 'Ringte om EU-kontroll på fredag og fikk time mandag. Ryddig verksted, og de forklarte hva som måtte fikses uten å overselge.',
    verified: false,
  },
  {
    name: 'Henrik S.',
    source: 'Google',
    rating: 5,
    headline: 'Prisen stemte med overslaget',
    text: 'Bruker dem til service og dekkskift. Prisen stemte med overslaget, og bilen var klar til avtalt tid.',
    verified: false,
  },
] as const

export const faqs = [
  {
    q: 'Hvor lang tid tar en EU-kontroll?',
    a: 'Selve kontrollen tar normalt 45–60 minutter. Du kan vente på verkstedet eller levere bilen og hente den senere samme dag.',
  },
  {
    q: 'Hva skjer hvis bilen ikke blir godkjent?',
    a: 'Du får en tydelig liste over feil og et prisoverslag på utbedring. Får vi fikse feilene, tar vi etterkontrollen uten ekstra kostnad.',
  },
  {
    q: 'Beholder jeg nybilgarantien når jeg tar service hos dere?',
    a: 'Ja. Vi følger produsentens serviceprogram, bruker deler av originalkvalitet og stempler i servicehefte / digital servicebok.',
  },
  {
    q: 'Kan jeg levere bilen før dere åpner?',
    a: 'Ja, vi har nøkkelinnkast ved inngangen. Avtal det når du bestiller time, så er bilen først i køen når vi åpner kl. 09.',
  },
  {
    q: 'Tilbyr dere leiebil eller henting?',
    a: 'Vi hjelper deg gjerne med leiebil ved større jobber – si fra når du bestiller. Ski stasjon ligger 3 minutter unna om du vil ta toget.',
  },
] as const
