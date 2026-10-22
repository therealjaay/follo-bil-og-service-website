import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-[0_8px_20px_-8px_rgb(201_58_18/0.6)] hover:bg-brand-700',
  secondary: 'bg-ink-900 text-white hover:bg-ink-800',
  ghost: 'bg-transparent text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-50',
  white: 'bg-white text-ink-900 hover:bg-ink-100',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-13 px-6 text-base',
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode }

type ButtonProps = CommonProps & ComponentPropsWithoutRef<'button'> & { to?: undefined; href?: undefined }
type LinkProps = CommonProps & { to: string; href?: undefined } & Omit<ComponentPropsWithoutRef<typeof Link>, 'to'>
type AnchorProps = CommonProps & { href: string; to?: undefined } & ComponentPropsWithoutRef<'a'>

export function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('to' in props && props.to !== undefined) {
    const { to, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as LinkProps
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if ('href' in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AnchorProps
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
