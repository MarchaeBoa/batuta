import { Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/cn'

type Plan = {
  name: string
  price: string
  period?: string
  description: string
  cta: string
  href: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Essencial',
    price: 'R$ 0',
    period: '/mês',
    description: 'Para quem está começando a organizar a operação.',
    cta: 'Começar grátis',
    href: '/auth/login',
    features: [
      '1 plataforma de anúncios',
      'Até R$ 5 mil em mídia/mês',
      'Painel unificado',
      'Relatórios essenciais',
    ],
  },
  {
    name: 'Profissional',
    price: 'R$ 297',
    period: '/mês',
    description: 'Para times que querem escalar com automação.',
    cta: 'Começar agora',
    href: '/auth/login',
    highlighted: true,
    features: [
      'Todas as plataformas',
      'Agente de IA e automações ilimitadas',
      'Mídia ilimitada',
      'Relatórios avançados',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Escala',
    price: 'Sob medida',
    description: 'Para agências e operações com várias contas.',
    cta: 'Falar com vendas',
    href: 'mailto:contato@batuta.app',
    features: [
      'Múltiplas contas e workspaces',
      'Alçadas, aprovações e governança',
      'Especialista dedicado e SLA',
      'SSO e controles avançados',
    ],
  },
]

export function Pricing() {
  return (
    <section id="precos" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-8 h-64 w-[min(820px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,86,240,0.10),transparent)] blur-2xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Preços"
          title="Planos que crescem com você"
          description="Comece de graça e evolua quando fizer sentido. Sem fidelidade, sem surpresas — cancele quando quiser."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border bg-white p-7 transition-all duration-300',
                  plan.highlighted
                    ? 'border-brand-300 shadow-glow ring-1 ring-brand-200 lg:-translate-y-2'
                    : 'border-zinc-200/80 shadow-soft hover:-translate-y-1 hover:shadow-card',
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500 to-[#9b6cff] px-3 py-1 text-[11px] font-semibold text-white shadow-glow-sm">
                    Mais popular
                  </span>
                )}

                <h3 className="text-sm font-semibold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-ink">{plan.price}</span>
                  {plan.period && <span className="pb-1 text-sm text-zinc-500">{plan.period}</span>}
                </div>

                <Button
                  href={plan.href}
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                          plan.highlighted ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600',
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Todos os planos incluem criptografia, trilha de auditoria e atualizações contínuas.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
