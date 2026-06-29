import { Lock, ArrowDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/primitives'

type Tone = 'allow' | 'hold' | 'block'

const LEDGER: { call: string; verb: string; tone: Tone; note: string }[] = [
  { call: 'batuta_list_campaigns', verb: 'allow', tone: 'allow', note: 'leitura — sempre passa' },
  { call: 'update_budget +R$50', verb: 'executed', tone: 'allow', note: 'dentro do teto e do gatilho' },
  { call: 'update_budget +R$200', verb: 'blocked', tone: 'block', note: 'furaria o teto · folga R$160' },
  { call: 'delete_campaign', verb: 'queued', tone: 'hold', note: 'destrutiva — pede aval' },
]

const TONE_CLASS: Record<Tone, string> = {
  allow: 'text-verdigris border-verdigris/40 bg-verdigris/10',
  hold: 'text-brass border-brass/40 bg-brass/10',
  block: 'text-[#e7b9bc] border-wine/50 bg-wine/15',
}

export function Cofre() {
  return (
    <section id="cofre" className="relative overflow-hidden bg-stage py-24 text-cream">
      <div className="absolute inset-0 staff-lines-dark opacity-50" aria-hidden />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionLabel tone="cream">Movimento I · O Cofre de Orçamento</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-paper text-balance sm:text-[2.7rem] sm:leading-[1.04]">
            Uma trava. Não um aviso depois do estrago.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-soft">
            Nenhum MCP oficial trava orçamento — o agente pode gastar até a conta secar. A
            Batuta coloca um portão antes da plataforma: toda mutação cruza o Cofre, e a
            decisão é pura, testada e reversível.
          </p>

          <div className="mt-8 rounded-xl border border-cream/12 bg-stage-2/70 p-5 font-mono text-xs leading-relaxed text-cream-soft">
            <div className="text-cream">agente → tool de escrita</div>
            <ArrowDown className="my-1 h-3.5 w-3.5 text-brass" />
            <div className="flex items-center gap-2 text-cream">
              <Lock className="h-3.5 w-3.5 text-brass" /> guard() → Cofre.evaluate()
            </div>
            <div className="mt-2 space-y-1 pl-5">
              <div>
                <span className="text-verdigris">├─ allow</span> → executa + audita
              </div>
              <div>
                <span className="text-brass">├─ hold</span> → enfileira aprovação + audita
              </div>
              <div>
                <span className="text-[#e7b9bc]">└─ block</span> → audita e NÃO executa
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-brass/25 bg-stage-2/80 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-label text-cream-soft">
              <span>$ pnpm demo</span>
              <span>conta g-123-456-7890</span>
            </div>
            <ul className="space-y-2.5">
              {LEDGER.map((row) => (
                <li
                  key={row.call}
                  className="flex items-center justify-between gap-3 rounded-lg border border-cream/8 bg-stage/60 px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="truncate font-mono text-sm text-cream">{row.call}</div>
                    <div className="font-mono text-[11px] text-cream-soft">{row.note}</div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${TONE_CLASS[row.tone]}`}
                  >
                    {row.verb}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[11px] text-cream-soft">
              Toda mutação passou pelo guard. Nenhuma furou o teto.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
