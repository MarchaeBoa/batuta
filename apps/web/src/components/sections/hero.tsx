import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button, SectionLabel } from '@/components/ui/primitives'
import { Reveal } from '@/components/ui/reveal'
import { CofreMeter } from '@/components/cofre-meter'
import { PlatformIcon } from '@/components/icons'
import { PLATFORMS } from '@/lib/data'

function ChatMock() {
  return (
    <div className="rounded-2xl border border-cream/12 bg-stage-2/80 p-4 backdrop-blur">
      <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-cream-soft">
        <span className="h-2 w-2 rounded-full bg-verdigris" />
        agente conectado · via mcp
      </div>
      <div className="ml-auto mb-3 w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-cream/10 px-3.5 py-2 text-sm text-cream">
        Sobe o orçamento da campanha Black Friday pra R$ 1.240/dia.
      </div>
      <div className="flex gap-2.5">
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/20 font-display text-[11px] text-brass">
          B
        </span>
        <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-wine/30 bg-wine/10 px-3.5 py-2 text-sm text-cream">
          <span className="font-medium text-[#e7b9bc]">Barrado pelo Cofre.</span> Furaria o
          teto de R$ 1.200/dia. Folga: R$ 160. Quer que eu suba só até o limite?
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-stage text-cream">
      <div className="absolute inset-0 staff-lines-dark opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(190,140,54,0.22), transparent 70%)' }}
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <Reveal>
            <SectionLabel tone="cream">Regência sobre os MCPs oficiais</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-paper text-balance sm:text-6xl">
              Reja seus anúncios direto do{' '}
              <span className="italic text-brass">ChatGPT</span> e do{' '}
              <span className="italic text-brass">Claude</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
              A Batuta é a camada de regência acima dos MCPs de Google, Meta e TikTok. O
              agente toca em linguagem natural — e o <strong className="font-semibold text-cream">Cofre
              de Orçamento</strong> é o teto que ele não atravessa.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#cta" variant="primary">
                Começar grátis <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#integracoes" variant="outline-light">
                Ver integrações
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-label text-cream-soft">
                Rege por cima de
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-cream/80">
                {PLATFORMS.slice(0, 4).map((p) => (
                  <span key={p.name} className="flex items-center gap-2 text-sm">
                    <PlatformIcon name={p.icon} className="h-5 w-5" />
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="space-y-4">
          <ChatMock />
          <CofreMeter />
        </Reveal>
      </Container>
    </section>
  )
}
