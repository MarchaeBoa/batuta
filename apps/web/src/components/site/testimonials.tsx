import { Star } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  gradient: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Antes eu vivia entre quatro abas e três planilhas. Com a Batuta, abro um painel e sei exatamente onde investir mais. O ROAS subiu 31% no primeiro trimestre.',
    name: 'Marina Rocha',
    role: 'Head de Growth',
    company: 'Nimbus',
    gradient: 'from-brand-500 to-[#9b6cff]',
  },
  {
    quote:
      'O agente faz à noite o que minha equipe levava a manhã inteira para fazer. E o melhor: tudo dentro das regras que definimos. Confiança total.',
    name: 'Diego Salles',
    role: 'CMO',
    company: 'Vértice',
    gradient: 'from-sky-500 to-cyan-400',
  },
  {
    quote:
      'Finalmente um relatório que o board entende sem eu precisar traduzir. A Batuta virou peça central da nossa operação de mídia.',
    name: 'Ana Beatriz Lima',
    role: 'Performance Lead',
    company: 'Lumio',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-zinc-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Clientes"
          title="Times que trocaram o improviso pela regência"
          description="Histórias reais de quem deixou a operação manual para trás e passou a comandar a mídia com método."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-semibold text-white`}
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-zinc-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
