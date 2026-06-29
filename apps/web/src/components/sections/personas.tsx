import { Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { PERSONAS } from '@/lib/data'

export function Personas() {
  return (
    <section className="bg-paper py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Para quem rege</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-[2.6rem] sm:leading-[1.05]">
            Um pódio para cada tipo de operação.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.audience} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-cream p-7">
                <div className="font-mono text-[11px] uppercase tracking-label text-brass-2">
                  {p.audience}
                </div>
                <p className="mt-4 font-display text-xl italic leading-snug text-ink">
                  “{p.quote}”
                </p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-verdigris" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
