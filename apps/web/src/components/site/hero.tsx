import { ArrowRight, Play, TrendingUp, Clock, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { DashboardMock } from '@/components/site/dashboard-mock'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-44">
      {/* Fundo: grade sutil + luz premium */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
        <div className="absolute left-1/2 top-[-12%] h-[560px] w-[min(880px,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,86,240,0.28),rgba(155,108,255,0.16),transparent)] blur-2xl" />
        <div className="absolute right-[8%] top-[28%] h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(155,108,255,0.18),transparent)] blur-2xl" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <a
            href="#produto"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 py-1 pl-1 pr-3 text-xs font-medium text-zinc-600 shadow-soft backdrop-blur transition-colors hover:border-zinc-300"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-brand-500 to-[#9b6cff] px-2 py-0.5 text-[11px] font-semibold text-white">
              <Sparkles className="h-3 w-3" /> Novo
            </span>
            Regência de mídia paga com IA
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Toda a sua mídia paga sob{' '}
            <span className="text-gradient">uma só batuta</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600">
            Conecte Google, Meta, TikTok e LinkedIn em um só lugar. Um agente de IA
            otimiza suas campanhas em tempo real — e a decisão final é sempre sua.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/auth/login" size="lg" className="w-full sm:w-auto">
              Começar agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#produto" variant="secondary" size="lg" className="w-full sm:w-auto">
              <Play className="h-4 w-4 text-brand-500" />
              Ver demonstração
            </Button>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Sem cartão de crédito · Configuração em minutos · Cancele quando quiser
          </p>
        </Reveal>

        {/* Mockup + cards flutuantes */}
        <Reveal delay={0.15} className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          {/* brilho atrás do mockup */}
          <div
            aria-hidden
            className="absolute -inset-x-8 -top-6 bottom-0 -z-10 rounded-[2rem] bg-gradient-to-b from-brand-500/10 to-transparent blur-2xl"
          />

          <div className="relative rounded-2xl bg-gradient-to-b from-zinc-200/70 to-zinc-200/10 p-1.5 shadow-card">
            <DashboardMock />
          </div>

          {/* Card flutuante: ROAS */}
          <div className="absolute -left-3 top-16 hidden animate-float rounded-2xl border border-zinc-200/80 bg-white/90 p-3 shadow-card backdrop-blur sm:-left-6 sm:flex lg:-left-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] text-zinc-500">ROAS médio</p>
                <p className="text-sm font-semibold text-ink">4,8x · +12%</p>
              </div>
            </div>
          </div>

          {/* Card flutuante: tempo economizado */}
          <div className="absolute -right-3 bottom-16 hidden animate-float-slow rounded-2xl border border-zinc-200/80 bg-white/90 p-3 shadow-card backdrop-blur sm:-right-6 sm:flex lg:-right-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] text-zinc-500">Tempo poupado</p>
                <p className="text-sm font-semibold text-ink">18h / semana</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
