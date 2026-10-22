export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="size-9 shrink-0" aria-hidden>
        <rect width="64" height="64" rx="14" fill={light ? '#ffffff' : '#0f1f33'} />
        <path d="M14 44 26 20h24l-4 8H30l-2 4h14l-4 8H24l-2 4z" fill="#e4461f" />
      </svg>
      <span className="leading-none">
        <span className={`block text-[17px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}>
          Follo Bil <span className="text-brand-500">&amp;</span> Service
        </span>
        <span className={`mt-0.5 block text-[11px] font-medium uppercase tracking-[0.14em] ${light ? 'text-ink-300' : 'text-ink-500'}`}>
          Godkjent bilverksted · Ski
        </span>
      </span>
    </span>
  )
}
