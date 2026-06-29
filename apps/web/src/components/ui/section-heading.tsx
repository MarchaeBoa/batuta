import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-soft',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed text-zinc-600',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
