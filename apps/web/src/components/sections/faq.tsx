import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { Accordion } from '@/components/ui/accordion'
import { FAQS } from '@/lib/data'

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-cream py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-[2.6rem] sm:leading-[1.05]">
            O que perguntam antes de subir ao pódio.
          </h2>
          <p className="mt-5 text-ink-soft">
            Não achou sua dúvida? Escreva para{' '}
            <span className="font-mono text-brass-2">ola@batuta.app</span>.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={FAQS} />
        </Reveal>
      </Container>
    </section>
  )
}
