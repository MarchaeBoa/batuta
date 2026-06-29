import { Container } from '@/components/ui/container'
import { Marquee } from '@/components/ui/marquee'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { TESTIMONIALS, type Testimonial } from '@/lib/data'

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-3 flex w-[340px] shrink-0 flex-col rounded-2xl border border-line bg-paper p-6">
      <blockquote className="flex-1 font-display text-lg leading-snug text-ink">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-stage font-display text-base text-brass">
          {t.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-ink">{t.name}</div>
          <div className="truncate font-mono text-[11px] uppercase tracking-wider text-ink-soft">
            {t.role} · {t.company}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2)
  const rowA = TESTIMONIALS.slice(0, half)
  const rowB = TESTIMONIALS.slice(half)
  return (
    <section className="border-y border-line bg-cream py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <SectionLabel>Quem já entregou a batuta</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-[2.6rem] sm:leading-[1.05]">
            A plateia aprovou a regência.
          </h2>
        </Reveal>
      </Container>
      <div className="mt-14 space-y-5">
        <Marquee>
          {rowA.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee className="[&_.animate-marquee]:[animation-direction:reverse]">
          {rowB.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
