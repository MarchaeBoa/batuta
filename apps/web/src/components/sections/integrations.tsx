import { Container } from '@/components/ui/container'
import { Marquee } from '@/components/ui/marquee'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { PlatformIcon } from '@/components/icons'
import { PLATFORMS, AI_CLIENTS } from '@/lib/data'

export function Integrations() {
  return (
    <section id="integracoes" className="border-b border-line bg-cream py-20">
      <Container>
        <Reveal className="text-center">
          <SectionLabel>Parceiros de integração</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            Os instrumentos já estão no palco. Você entra como maestro.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-12 space-y-5">
        <Marquee>
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className="mx-3 flex items-center gap-3 rounded-full border border-line bg-paper px-6 py-3 text-ink"
            >
              <PlatformIcon name={p.icon} className="h-6 w-6 text-brass-2" />
              <span className="whitespace-nowrap font-display text-lg">{p.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee className="[&_.animate-marquee]:[animation-direction:reverse]">
          {AI_CLIENTS.map((c) => (
            <div
              key={c.name}
              className="mx-3 flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-verdigris" />
              <span className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-ink-soft">
                {c.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
