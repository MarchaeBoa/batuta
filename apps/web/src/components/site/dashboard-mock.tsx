import { ArrowUpRight, ArrowDownRight, Bell, Sparkles } from 'lucide-react'
import { cn } from '@/lib/cn'

/* ----------------------------------------------------------------------------
 * Helpers de gráfico — geram paths SVG determinísticos (sem imagens externas).
 * ------------------------------------------------------------------------- */

function linePath(values: number[], w: number, h: number, pad = 6): string {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = (w - pad * 2) / (values.length - 1)
  return values
    .map((v, i) => {
      const x = pad + i * step
      const y = h - pad - ((v - min) / range) * (h - pad * 2)
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

function areaPath(values: number[], w: number, h: number, pad = 6): string {
  return `${linePath(values, w, h, pad)} L ${w - pad} ${h} L ${pad} ${h} Z`
}

const revenue = [22, 31, 27, 40, 47, 57, 63, 71, 67, 83, 91, 104]
const spend = [14, 18, 17, 22, 25, 27, 26, 30, 28, 31, 30, 34]

function Sparkline({ values, className }: { values: number[]; className?: string }) {
  return (
    <svg viewBox="0 0 80 28" className={cn('h-7 w-20', className)} fill="none" preserveAspectRatio="none">
      <path d={linePath(values, 80, 28, 2)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ----------------------------------------------------------------------------
 * KPIs
 * ------------------------------------------------------------------------- */

const kpis = [
  { label: 'Receita', value: 'R$ 402,1k', delta: '+23,1%', up: true, spark: revenue, color: 'text-brand-500' },
  { label: 'Investimento', value: 'R$ 84,2k', delta: '+8,4%', up: true, spark: spend, color: 'text-zinc-400' },
  { label: 'ROAS médio', value: '4,8x', delta: '+0,6', up: true, spark: [3.1, 3.4, 3.2, 3.9, 4.1, 4.4, 4.8], color: 'text-emerald-500' },
  { label: 'Conversões', value: '3.918', delta: '+14,2%', up: true, spark: [12, 16, 15, 19, 22, 25, 28], color: 'text-brand-500' },
]

const platforms = [
  { name: 'Google Ads', pct: 42, color: '#3b82f6' },
  { name: 'Meta Ads', pct: 31, color: '#6366f1' },
  { name: 'TikTok Ads', pct: 18, color: '#ec4899' },
  { name: 'LinkedIn Ads', pct: 9, color: '#0ea5e9' },
]

const campaigns = [
  { name: 'Black Friday · Search', platform: 'Google', status: 'Ativa', roas: '5,2x', spend: 'R$ 18,4k', dot: '#3b82f6' },
  { name: 'Remarketing · Feed', platform: 'Meta', status: 'Ativa', roas: '4,1x', spend: 'R$ 12,1k', dot: '#6366f1' },
  { name: 'Topo de funil · Reels', platform: 'TikTok', status: 'Pausada', roas: '2,3x', spend: 'R$ 6,7k', dot: '#ec4899' },
  { name: 'Leads B2B · InMail', platform: 'LinkedIn', status: 'Ativa', roas: '3,6x', spend: 'R$ 9,8k', dot: '#0ea5e9' },
]

/* ----------------------------------------------------------------------------
 * Dashboard
 * ------------------------------------------------------------------------- */

export function DashboardMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-card',
        className,
      )}
    >
      {/* Barra superior estilo janela */}
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-zinc-300" />
          <span className="h-3 w-3 rounded-full bg-zinc-300" />
          <span className="h-3 w-3 rounded-full bg-zinc-300" />
        </div>
        <div className="ml-3 hidden items-center gap-2 sm:flex">
          <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-ink shadow-soft ring-1 ring-zinc-200">
            Visão geral
          </span>
          <span className="px-2.5 py-1 text-xs text-zinc-400">Campanhas</span>
          <span className="px-2.5 py-1 text-xs text-zinc-400">Relatórios</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden rounded-md bg-white px-2 py-1 text-[11px] text-zinc-500 ring-1 ring-zinc-200 sm:inline">
            Últimos 12 meses
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-[#9b6cff] text-[10px] font-semibold text-white">
            BR
          </span>
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-3">
        {/* Coluna principal */}
        <div className="space-y-4 lg:col-span-2">
          {/* KPIs */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-zinc-100 bg-white p-3 shadow-soft">
                <p className="text-[11px] font-medium text-zinc-500">{kpi.label}</p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-ink">{kpi.value}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex items-center gap-0.5 text-[11px] font-medium',
                      kpi.up ? 'text-emerald-600' : 'text-rose-600',
                    )}
                  >
                    {kpi.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {kpi.delta}
                  </span>
                  <Sparkline values={kpi.spark} className={kpi.color} />
                </div>
              </div>
            ))}
          </div>

          {/* Gráfico de área: Receita vs Investimento */}
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink">Receita vs. Investimento</p>
                <p className="text-xs text-zinc-500">Consolidado de todas as plataformas</p>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-zinc-600">
                  <span className="h-2 w-2 rounded-full bg-brand-500" /> Receita
                </span>
                <span className="inline-flex items-center gap-1.5 text-zinc-600">
                  <span className="h-2 w-2 rounded-full bg-zinc-300" /> Investimento
                </span>
              </div>
            </div>
            <svg viewBox="0 0 640 200" className="h-40 w-full sm:h-48" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5b56f0" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#5b56f0" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[40, 90, 140, 190].map((y) => (
                <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#f1f1f4" strokeWidth="1" />
              ))}
              <path d={areaPath(revenue, 640, 200, 8)} fill="url(#rev-fill)" />
              <path d={linePath(revenue, 640, 200, 8)} stroke="#5b56f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d={linePath(spend, 640, 200, 8)}
                stroke="#d4d4d8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2 6"
              />
            </svg>
          </div>

          {/* Tabela de campanhas */}
          <div className="overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
              <p className="text-sm font-semibold text-ink">Campanhas em destaque</p>
              <span className="text-xs text-zinc-400">4 de 37</span>
            </div>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-zinc-400">
                  <th className="px-4 py-2 font-medium">Campanha</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 text-right font-medium">ROAS</th>
                  <th className="hidden px-4 py-2 text-right font-medium sm:table-cell">Investido</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c) => (
                  <tr key={c.name} className="border-t border-zinc-50">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: c.dot }} />
                        <span className="font-medium text-ink">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium',
                          c.status === 'Ativa'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700',
                        )}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-right font-semibold text-ink">{c.roas}</td>
                    <td className="hidden px-4 py-2.5 text-right text-zinc-500 sm:table-cell">{c.spend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="space-y-4">
          {/* Distribuição por plataforma */}
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-ink">Investimento por plataforma</p>
            <div className="mt-4 flex items-center gap-4">
              <DonutChart segments={platforms} />
              <ul className="flex-1 space-y-2">
                {platforms.map((p) => (
                  <li key={p.name} className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-zinc-600">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                      {p.name}
                    </span>
                    <span className="font-medium text-ink">{p.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alerta do agente */}
          <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-[#9b6cff] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">Ação do agente</p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">
                  Realoquei <span className="font-semibold text-brand-700">R$ 2.300</span> da campanha de
                  menor ROAS para a de melhor desempenho. Receita projetada: +6,4%.
                </p>
              </div>
            </div>
          </div>

          {/* Status de saúde */}
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Saúde das contas</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <Bell className="h-3 w-3" /> tudo certo
              </span>
            </div>
            <div className="mt-3 space-y-2.5">
              {platforms.map((p) => (
                <div key={p.name}>
                  <div className="mb-1 flex items-center justify-between text-[11px] text-zinc-500">
                    <span>{p.name}</span>
                    <span>{p.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                    <div className="h-full rounded-full" style={{ width: `${p.pct + 50}%`, maxWidth: '100%', backgroundColor: p.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Donut/anel de proporção via stroke-dasharray. */
function DonutChart({ segments }: { segments: { pct: number; color: string }[] }) {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  let offset = 0
  return (
    <svg viewBox="0 0 72 72" className="h-20 w-20 -rotate-90">
      <circle cx="36" cy="36" r={radius} fill="none" stroke="#f1f1f4" strokeWidth="10" />
      {segments.map((s) => {
        const length = (s.pct / 100) * circumference
        const dash = `${length} ${circumference - length}`
        const el = (
          <circle
            key={s.color}
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth="10"
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        )
        offset += length
        return el
      })}
    </svg>
  )
}
