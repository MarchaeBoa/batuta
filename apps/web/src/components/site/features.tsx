import { Check, Plug, Bot, BarChart3, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { Eyebrow } from '@/components/ui/section-heading'
import { cn } from '@/lib/cn'

/* ---- Mini-mockups (HTML/SVG, sem imagens externas) ---------------------- */

function IntegrationsMock() {
  const items = [
    { name: 'Google Ads', color: '#3b82f6', status: 'Conectado' },
    { name: 'Meta Ads', color: '#6366f1', status: 'Conectado' },
    { name: 'TikTok Ads', color: '#ec4899', status: 'Conectado' },
    { name: 'LinkedIn Ads', color: '#0ea5e9', status: 'Sincronizando' },
  ]
  return (
    <div className="space-y-2.5">
      {items.map((it) => (
        <div
          key={it.name}
          className="flex items-center justify-between rounded-xl border border-zinc-100 bg-white px-3.5 py-3 shadow-soft"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: it.color }}>
              <Plug className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-ink">{it.name}</span>
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium',
              it.status === 'Conectado' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700',
            )}
          >
            {it.status === 'Conectado' && <Check className="h-3 w-3" />}
            {it.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function AgentMock() {
  const events = [
    { time: '09:12', text: 'Pausou 3 anúncios com CPA acima da meta', tone: 'rose' },
    { time: '10:40', text: 'Aumentou orçamento da campanha "Search BF" em 15%', tone: 'emerald' },
    { time: '13:05', text: 'Sugeriu novo público semelhante no Meta', tone: 'brand' },
    { time: '15:28', text: 'Gerou relatório semanal e enviou ao time', tone: 'zinc' },
  ]
  const dot: Record<string, string> = {
    rose: 'bg-rose-400',
    emerald: 'bg-emerald-400',
    brand: 'bg-brand-500',
    zinc: 'bg-zinc-300',
  }
  return (
    <div className="space-y-3">
      {events.map((e) => (
        <div key={e.time} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className={cn('mt-1.5 h-2 w-2 rounded-full', dot[e.tone])} />
            <span className="mt-1 w-px flex-1 bg-zinc-100" />
          </div>
          <div className="pb-1">
            <p className="text-[11px] font-medium text-zinc-400">{e.time}</p>
            <p className="text-sm text-ink">{e.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ReportMock() {
  const bars = [38, 52, 44, 66, 58, 80, 72]
  return (
    <div>
      <div className="flex items-end justify-between gap-2 px-1">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-28 w-full items-end">
              <div
                className="w-full rounded-md bg-gradient-to-t from-brand-500 to-[#9b6cff]"
                style={{ height: `${b}%`, opacity: 0.55 + i * 0.06 }}
              />
            </div>
            <span className="text-[10px] text-zinc-400">{['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50/70 px-3.5 py-2.5">
        <span className="text-xs text-zinc-600">Relatório semanal · PDF</span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600">
          Exportar <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  )
}

/* ---- Bloco genérico ----------------------------------------------------- */

type Feature = {
  eyebrow: string
  icon: typeof Plug
  title: string
  description: string
  bullets: string[]
  visual: ReactNode
}

const features: Feature[] = [
  {
    eyebrow: 'Integrações',
    icon: Plug,
    title: 'Conecte tudo em minutos',
    description:
      'Autorize cada plataforma com poucos cliques. A Batuta importa contas, campanhas e histórico — e mantém tudo sincronizado, sem planilhas.',
    bullets: ['OAuth oficial de cada canal', 'Sincronização automática a cada 5 min', 'Múltiplas contas por plataforma'],
    visual: <IntegrationsMock />,
  },
  {
    eyebrow: 'Agente de IA',
    icon: Bot,
    title: 'Um maestro que trabalha por você',
    description:
      'O agente acompanha o desempenho 24/7, identifica oportunidades e executa ajustes dentro das regras que você definiu — registrando cada decisão.',
    bullets: ['Otimização contínua de lances e verba', 'Alertas proativos e explicáveis', 'Trilha de auditoria de cada ação'],
    visual: <AgentMock />,
  },
  {
    eyebrow: 'Relatórios',
    icon: BarChart3,
    title: 'Relatórios que a diretoria entende',
    description:
      'Consolide resultados de todos os canais em uma visão única. Compartilhe relatórios claros e prontos para apresentar — em segundos.',
    bullets: ['Visão unificada multicanal', 'Exportação em PDF e link', 'Métricas de negócio, não só de mídia'],
    visual: <ReportMock />,
  },
]

export function Features() {
  return (
    <section id="recursos" className="bg-zinc-50/60 py-20 sm:py-28">
      <Container>
        <div className="space-y-20 sm:space-y-28">
          {features.map((feature, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={feature.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={cn(flip ? 'lg:order-2' : '')}>
                  <Eyebrow>{feature.eyebrow}</Eyebrow>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-zinc-600">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm text-zinc-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.1} className={cn('relative', flip ? 'lg:order-1' : '')}>
                  <div
                    aria-hidden
                    className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/10 to-transparent blur-2xl"
                  />
                  <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-card">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <feature.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-ink">{feature.eyebrow}</span>
                    </div>
                    {feature.visual}
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
