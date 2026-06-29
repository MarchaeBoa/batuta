import { Zap, Layers, Clock, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: 'Automação que age',
    description:
      'Ajustes de lances, orçamento e segmentação acontecem sozinhos, com base em desempenho real — não em palpites.',
  },
  {
    icon: Layers,
    title: 'Escala sem caos',
    description:
      'Centralize todas as plataformas em um painel só. Mais campanhas, mais contas, a mesma clareza.',
  },
  {
    icon: Clock,
    title: 'De volta o seu tempo',
    description:
      'Pare de exportar planilhas e cruzar relatórios. A Batuta consolida tudo e devolve horas à sua semana.',
  },
  {
    icon: ShieldCheck,
    title: 'Você no controle',
    description:
      'O agente propõe e executa, mas com limites que você define. Aprovações, alçadas e trilha de auditoria completas.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Por que a Batuta"
          title="Feita para quem leva performance a sério"
          description="Quatro pilares que transformam operação de mídia em regência: previsível, escalável e sob seu comando."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-50/60 group-hover:opacity-100"
                />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-[#9b6cff] text-white shadow-glow-sm">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
