import { cn } from '@/lib/cn'

/**
 * Marca da Batuta — um traço de regência (a "batuta") sobre um gradiente.
 * Tudo em SVG inline, sem dependência de arquivos externos.
 */
export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string
  withWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-500 to-[#9b6cff] shadow-glow-sm">
        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M2.5 12.5C4.5 12.5 4.5 5.5 7 5.5C9.5 5.5 9 12 11.5 12C14 12 14.5 6 15.5 6"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="15.2" cy="5.6" r="1.5" fill="white" />
        </svg>
      </span>
      {withWordmark && (
        <span className="text-[17px] font-semibold tracking-tight text-ink">Batuta</span>
      )}
    </span>
  )
}
