import { Vault, Layers, Zap } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { PILLARS } from '@/lib/data'

const ICONS = { vault: Vault, layers: Layers, zap: Zap }

export function Pillars() {
  return (
    <section className="bg-paper py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>A camada de interface mudou</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-[2.6rem] sm:leading-[1.05]">
            O cano virou commodity. O valor subiu uma camada.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Conectar uma IA à conta de anúncios ficou de graça. O gargalo agora é
            interpretar, coordenar e travar com segurança — e é aí que a Batuta rege.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[p.icon]
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-40px_rgba(36,29,21,0.6)]">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-stage text-brass">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-label text-brass-2">
                    {p.movimento}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
