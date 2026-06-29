import Link from 'next/link'
import { cn } from '@/lib/utils'

/** Rótulo de seção em mono, estilo indicação de andamento numa partitura. */
export function SectionLabel({
  children,
  className,
  tone = 'brass',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'brass' | 'cream'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label',
        tone === 'brass' ? 'text-brass-2' : 'text-cream-soft',
        className,
      )}
    >
      <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  )
}

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'outline-light'
  className?: string
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200'
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-brass text-stage hover:bg-brass-2 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(190,140,54,0.8)]',
    outline:
      'border border-ink/25 text-ink hover:border-ink/50 hover:-translate-y-0.5',
    'outline-light':
      'border border-cream/30 text-cream hover:border-cream/60 hover:-translate-y-0.5',
    ghost: 'text-ink/80 hover:text-ink',
  }
  const isHash = href.startsWith('#')
  const cls = cn(base, variants[variant], className)
  if (isHash) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft',
        className,
      )}
    >
      {children}
    </span>
  )
}
