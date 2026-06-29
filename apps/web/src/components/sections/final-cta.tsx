import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/primitives'
import { Reveal } from '@/components/ui/reveal'

export function FinalCta() {
  return (
    <section id="cta" className="bg-paper py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brass/30 bg-stage px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 staff-lines-dark opacity-50" aria-hidden />
            <div
              className="absolute -top-24 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(190,140,54,0.28), transparent 70%)' }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-paper text-balance sm:text-5xl sm:leading-[1.05]">
                Pronto para reger seus anúncios?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-cream-soft">
                O agente toca. A batuta é sua. Comece grátis e ponha um teto que a IA não
                atravessa — em menos de cinco minutos.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="#topo" variant="primary">
                  Começar grátis <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#precos" variant="outline-light">
                  Ver planos
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
