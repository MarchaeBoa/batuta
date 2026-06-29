import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { STATS } from '@/lib/data'
import { cn } from '@/lib/utils'

const TONE = {
  brass: 'text-brass-2',
  verdigris: 'text-verdigris',
  wine: 'text-wine',
}

export function Stats() {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="text-center lg:text-left">
            <div className={cn('font-display text-4xl font-semibold tnum sm:text-5xl', TONE[s.tone])}>
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              {s.label}
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
