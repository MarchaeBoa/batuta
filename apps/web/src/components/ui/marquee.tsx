import { cn } from '@/lib/utils'

/** Marquee infinito por CSS. Duplica os filhos para um loop sem emenda. */
export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('group relative overflow-hidden', className)}>
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
