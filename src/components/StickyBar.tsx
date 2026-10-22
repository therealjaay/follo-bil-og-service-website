import { CalendarCheck, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { business } from '../data/business'

export function StickyBar() {
  const { pathname } = useLocation()
  if (pathname === '/bestill-time') return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 pb-safe backdrop-blur lg:hidden" role="region" aria-label="Hurtigvalg">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={business.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-ink-900 text-[15px] font-semibold text-white active:scale-[0.98]"
        >
          <Phone className="size-4" aria-hidden />
          Ring oss
        </a>
        <Link
          to="/bestill-time"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 text-[15px] font-semibold text-white active:scale-[0.98]"
        >
          <CalendarCheck className="size-4" aria-hidden />
          Bestill time
        </Link>
      </div>
    </div>
  )
}
