'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'
import { PLANS, type Plan } from '@/lib/data'
import { brl, cn } from '@/lib/utils'

function priceLabel(plan: Plan, yearly: boolean): { big: string; small: string } {
  const isContact = plan.name === 'Filarmônica'
  if (isContact) return { big: 'Sob medida', small: 'fale com a gente' }
  const cents = yearly ? plan.priceYearly : plan.priceMonthly
  if (cents === 0) return { big: 'Grátis', small: 'para sempre' }
  return { big: brl(cents), small: yearly ? '/mês · no anual' : '/mês' }
}

export function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="precos" className="bg-paper py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Preços</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-[2.6rem] sm:leading-[1.05]">
            Pague pela regência, não pelo cano.
          </h2>
          <p className="mt-4 text-ink-soft">
            Medido por movimentos — ações regidas por mês. Cobrado em Pix via Asaas.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-line bg-cream p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm transition-colors',
                !yearly ? 'bg-stage text-paper' : 'text-ink-soft hover:text-ink',
              )}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                'flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors',
                yearly ? 'bg-stage text-paper' : 'text-ink-soft hover:text-ink',
              )}
            >
              Anual
              <span className="rounded-full bg-verdigris/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-verdigris">
                –17%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {PLANS.map((plan, i) => {
            const price = priceLabel(plan, yearly)
            return (
              <Reveal key={plan.name} delay={i * 0.06}>
                <article
                  className={cn(
                    'flex h-full flex-col rounded-2xl border p-7 transition-all duration-300',
                    plan.highlighted
                      ? 'border-brass bg-stage text-cream shadow-[0_30px_70px_-40px_rgba(36,29,21,0.9)]'
                      : 'border-line bg-cream text-ink hover:-translate-y-1 hover:border-brass/40',
                  )}
                >
                  {plan.highlighted && (
                    <span className="mb-3 inline-block rounded-full bg-brass px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-stage">
                      Mais popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                  <p
                    className={cn(
                      'mt-1 text-sm',
                      plan.highlighted ? 'text-cream-soft' : 'text-ink-soft',
                    )}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-semibold tnum">{price.big}</span>
                    <span
                      className={cn(
                        'font-mono text-[11px]',
                        plan.highlighted ? 'text-cream-soft' : 'text-ink-soft',
                      )}
                    >
                      {price.small}
                    </span>
                  </div>
                  <div
                    className={cn(
                      'mt-2 font-mono text-[11px] uppercase tracking-wider',
                      plan.highlighted ? 'text-brass' : 'text-brass-2',
                    )}
                  >
                    {plan.movimentos}
                  </div>

                  <a
                    href="#cta"
                    className={cn(
                      'mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors',
                      plan.highlighted
                        ? 'bg-brass text-stage hover:bg-brass-2'
                        : 'border border-ink/25 text-ink hover:border-ink/50',
                    )}
                  >
                    {plan.priceMonthly === 0 && plan.name !== 'Filarmônica'
                      ? 'Começar grátis'
                      : plan.name === 'Filarmônica'
                        ? 'Falar com vendas'
                        : 'Assinar'}
                  </a>

                  <ul
                    className={cn(
                      'mt-7 space-y-3 border-t pt-6',
                      plan.highlighted ? 'border-cream/15' : 'border-line',
                    )}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm">
                        <Check
                          className={cn(
                            'mt-0.5 h-4 w-4 shrink-0',
                            plan.highlighted ? 'text-brass' : 'text-verdigris',
                          )}
                        />
                        <span className={plan.highlighted ? 'text-cream-soft' : 'text-ink-soft'}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
