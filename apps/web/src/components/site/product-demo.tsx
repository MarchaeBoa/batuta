import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { DashboardMock } from '@/components/site/dashboard-mock'

const highlights = [
  { label: 'Tempo real', value: 'Dados a cada 5 min' },
  { label: 'Plataformas', value: '4 integrações nativas' },
  { label: 'Decisões do agente', value: '120+ por dia' },
]

export function ProductDemo() {
  return (
    <section id="produto" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,86,240,0.12),transparent)] blur-2xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Demonstração"
          title="O seu posto de comando da mídia paga"
          description="Um painel vivo onde KPIs, gráficos, campanhas e ações do agente convivem em tempo real. Tudo o que você vê aqui é renderizado nativamente — nada de telas estáticas."
        />

        <Reveal delay={0.1} className="relative mx-auto mt-12 max-w-5xl">
          <div className="rounded-2xl bg-gradient-to-b from-zinc-200/70 to-transparent p-1.5 shadow-card">
            <DashboardMock />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-center shadow-soft"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {h.label}
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
