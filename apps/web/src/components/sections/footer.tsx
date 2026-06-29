import { Container } from '@/components/ui/container'
import { BatutaMark } from '@/components/icons'
import { PLATFORMS, AI_CLIENTS } from '@/lib/data'

const COLS: { title: string; items: string[] }[] = [
  { title: 'Produto', items: ['O Cofre', 'Regência cross-platform', 'Planos aprováveis', 'Trilha auditável'] },
  { title: 'Plataformas', items: PLATFORMS.map((p) => p.name) },
  { title: 'Clientes de IA', items: AI_CLIENTS.map((c) => c.name) },
  { title: 'Recursos', items: ['Documentação', 'Status', 'LGPD', 'Contato'] },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-stage text-brass">
                <BatutaMark className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold text-ink">Batuta</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              A camada de regência acima dos MCPs oficiais de anúncios. O agente toca; a
              batuta é sua.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-label text-brass-2">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#topo" className="text-sm text-ink-soft transition-colors hover:text-ink">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
            © 2026 Batuta · Pix · Asaas · LGPD de fábrica
          </p>
          <p className="font-mono text-[11px] text-ink-soft">Feito no Brasil 🇧🇷</p>
        </div>
      </Container>
    </footer>
  )
}
