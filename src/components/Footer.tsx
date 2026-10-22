import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { services } from '../data/services'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ink-950 pb-24 text-ink-300 lg:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Lite, godkjent bilverksted i Ski. Vi tar oss av service, EU-kontroll, dekk og reparasjoner på alle bilmerker – med
            fast pris på forhånd.
          </p>
          <p className="mt-4 text-xs text-ink-400">Org.nr. {business.orgNr} · Etablert {business.established}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Tjenester</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to={`/tjenester/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/tjenester" className="font-medium text-brand-400 hover:text-brand-100">
                Alle tjenester →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Kontakt</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={business.phoneHref} className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Åpningstider</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {business.hours.map((h) => (
              <li key={h.days} className="flex items-center justify-between gap-4 border-b border-ink-800 pb-2">
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-brand-400" aria-hidden />
                  {h.days}
                </span>
                <span className={h.open ? 'text-white' : 'text-ink-400'}>{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-400">Nøkkelinnkast for levering utenom åpningstid.</p>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. Alle rettigheter reservert.</p>
          <p className="flex gap-4">
            <Link to="/kontakt" className="hover:text-white">
              Personvern
            </Link>
            <Link to="/kontakt" className="hover:text-white">
              Informasjonskapsler
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
