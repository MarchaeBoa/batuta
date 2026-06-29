import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { STEPS } from '@/lib/data'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-line bg-cream py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-[2.6rem] sm:leading-[1.05]">
            Afine os instrumentos. Depois, reja.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-paper">
              <div className="flex h-full flex-col p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-semibold italic text-brass">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 translate-y-[-6px] bg-line" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
