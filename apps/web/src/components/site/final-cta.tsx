import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

export function FinalCTA() {
  return (
    <section className="pb-24 pt-4 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center shadow-card sm:px-12 sm:py-20">
            {/* Iluminação interna */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-30%] h-80 w-[min(720px,90%)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,86,240,0.55),rgba(155,108,255,0.25),transparent)] blur-2xl" />
              <div className="absolute inset-0 bg-dots opacity-[0.15] mask-fade-b" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
                Pegue a batuta. O resto a gente rege.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-zinc-300">
                Conecte suas plataformas hoje e veja, ainda nesta semana, o que uma
                regência de verdade faz pelo seu retorno.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/auth/login" variant="inverted" size="lg" className="w-full sm:w-auto">
                  Começar agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href="#produto" variant="ghost-inverted" size="lg" className="w-full sm:w-auto">
                  Ver demonstração
                </Button>
              </div>
              <p className="mt-5 text-sm text-zinc-400">
                Grátis para começar · Sem cartão de crédito
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
