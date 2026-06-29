import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'inverted' | 'ghost-inverted'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  // Cor principal forte
  primary:
    'bg-brand-500 text-white shadow-glow-sm hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-glow active:translate-y-0',
  secondary:
    'bg-white text-ink ring-1 ring-zinc-200 hover:-translate-y-0.5 hover:ring-zinc-300 hover:shadow-soft active:translate-y-0',
  inverted:
    'bg-white text-ink hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0',
  'ghost-inverted':
    'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsLink = CommonProps & { href: string }
type ButtonAsButton = CommonProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = 'primary', size = 'md', className } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href) {
    const { href } = props
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  const { href: _href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
