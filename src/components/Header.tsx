import { useEffect, useState } from 'react'
import { CalendarCheck, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business } from '../data/business'
import { Button } from './Button'
import { Logo } from './Logo'

const nav = [
  { to: '/tjenester', label: 'Tjenester' },
  { to: '/eu-kontroll', label: 'EU-kontroll' },
  { to: '/dekk-og-dekkhotell', label: 'Dekk og dekkhotell' },
  { to: '/priser', label: 'Priser' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-18">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo />
        </Link>

        <nav aria-label="Hovedmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                      isActive ? 'text-brand-600' : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={business.phoneHref} variant="ghost">
            <Phone className="size-4" aria-hidden />
            {business.phoneDisplay}
          </Button>
          <Button to="/bestill-time">
            <CalendarCheck className="size-4" aria-hidden />
            Bestill time
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl text-ink-900 hover:bg-ink-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
          <nav aria-label="Mobilmeny" className="container-x py-4">
            <ul className="divide-y divide-ink-100">
              <li>
                <NavLink to="/" end className="block py-3.5 text-lg font-semibold text-ink-900">
                  Hjem
                </NavLink>
              </li>
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `block py-3.5 text-lg font-semibold ${isActive ? 'text-brand-600' : 'text-ink-900'}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <Button to="/bestill-time" size="lg">
                <CalendarCheck className="size-5" aria-hidden />
                Bestill time
              </Button>
              <Button href={business.phoneHref} variant="ghost" size="lg">
                <Phone className="size-5" aria-hidden />
                Ring {business.phoneDisplay}
              </Button>
            </div>
            <dl className="mt-8 grid gap-1 text-sm text-ink-600">
              <div>
                <dt className="sr-only">Adresse</dt>
                <dd>
                  {business.address.street}, {business.address.postalCode} {business.address.city}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Åpningstider</dt>
                <dd>Man–fre 09:00–17:00</dd>
              </div>
            </dl>
          </nav>
        </div>
      )}
    </header>
  )
}
