import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'

// Marcas fictícias — wordmarks em texto, sem imagens externas.
const brands = ['Nimbus', 'Vértice', 'Lumio', 'Cardume', 'Norte&Co', 'Falcon', 'Praça']

export function LogoCloud() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50 py-12">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium text-zinc-500">
            Mais de <span className="font-semibold text-ink">1.000 times de marketing</span> já
            regem suas campanhas com a Batuta
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-lg font-semibold tracking-tight text-zinc-400 grayscale transition-colors duration-300 hover:text-zinc-600 sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
