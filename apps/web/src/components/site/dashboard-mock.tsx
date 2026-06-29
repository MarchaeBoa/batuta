import { ArrowUpRight, ArrowDownRight, Bell, Sparkles, Check, Clock, Pause, Loader } from 'lucide-react'
import { cn } from '@/lib/cn'

/* ----------------------------------------------------------------------------
 * Helpers de gráfico — paths SVG determinísticos (sem imagens externas).
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
const conversions = [12, 16, 15, 19, 22, 25, 28, 31, 30, 35, 38, 42]

function Sparkline({ values, className }: { values: number[]; className?: string }) {
  return (
    <svg viewBox="0 0 80 28" className={cn('h-7 w-20', className)} fill="none" preserveAspectRatio="none">
      <path d={linePath(values, 80, 28, 2)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ----------------------------------------------------------------------------
 * Dados
 * ------------------------------------------------------------------------- */

const kpis = [
  { label: 'Receita', value: 'R$ 402,1k', delta: '+23,1%', up: true, spark: revenue, color: 'text-brand-500' },
  { label: 'Conversões', value: '3.918', delta: '+14,2%', up: true, spark: conversions, color: 'text-emerald-500' },
  { label: 'Ticket médio', value: 'R$ 318', delta: '+6,4%', up: true, spark: [3, 3.2, 3.1, 3.4, 3.3, 3.6, 3.8], color: 'text-brand-500' },
  { label: 'Taxa de conv.', value: '4,7%', delta: '-0,3%', up: false, spark: [5, 4.8, 4.9, 4.6, 4.7, 4.5, 4.7], color: 'text-zinc-400' },
]

const channels = [
  { name: 'Google', pct: 42, color: '#3b82f6' },
  { name: 'Meta', pct: 31, color: '#6366f1' },
  { name: 'TikTok', pct: 18, color: '#ec4899' },
  { name: 'LinkedIn', pct: 9, color: '#0ea5e9' },
]

const leads = [
  { name: 'Mariana Costa', company: 'Lumora', channel: 'Google', status: 'Convertido', value: 'R$ 7.4k', dot: '#3b82f6' },
  { name: 'Rafael Nunes', company: 'Cardume', channel: 'Meta', status: 'Qualificado', value: 'R$ 2.8k', dot: '#6366f1' },
  { name: 'Bianca Alves', company: 'Vértice', channel: 'LinkedIn', status: 'Em contato', value: 'R$ 4.2k', dot: '#0ea5e9' },
  { name: 'Thiago Moreira', company: 'Nimbus', channel: 'TikTok', status: 'Qualificado', value: 'R$ 1.9k', dot: '#ec4899' },
]

const statusStyles: Record<string, string> = {
  Convertido: 'bg-emerald-50 text-emerald-700',
  Qualificado: 'bg-brand-50 text-brand-700',
  'Em contato': 'bg-amber-50 text-amber-700',
}

const automations = [
  { name: 'Realocação de orçamento', state: 'Ativa', icon: Check, tone: 'emerald' },
  { name: 'Pausar baixo ROAS', state: 'Ativa', icon: Check, tone: 'emerald' },
  { name: 'Alerta de CPA alto', state: 'Executando', icon: Loader, tone: 'amber' },
  { name: 'Relatório semanal', state: 'Agendada', icon: Clock, tone: 'brand' },
  { name: 'Bid cap inteligente', state: 'Pausada', icon: Pause, tone: 'zinc' },
]

const tone: Record<string, { wrap: string; dot: string }> = {
  emerald: { wrap: 'bg-emerald-50 text-emerald-600', dot: 'text-emerald-600' },
  amber: { wrap: 'bg-amber-50 text-amber-600', dot: 'text-amber-600' },
  brand: { wrap: 'bg-brand-50 text-brand-600', dot: 'text-brand-600' },
  zinc: { wrap: 'bg-zinc-100 text-zinc-500', dot: 'text-zinc-500' },
}

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
          <span className="px-2.5 py-1 text-xs text-zinc-400">Leads</span>
          <span className="px-2.5 py-1 text-xs text-zinc-400">Automações</span>
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

          {/* Gráfico de crescimento */}
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink">Crescimento de receita</p>
                <p className="text-xs text-zinc-500">Consolidado de todos os canais</p>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-zinc-600">
                  <span className="h-2 w-2 rounded-full bg-brand-500" /> Receita
                </span>
                <span className="inline-flex items-center gap-1.5 text-zinc-600">
                  <span className="h-2 w-2 rounded-full bg-zinc-300" /> Conversões
                </span>
              </div>
            </div>
            <svg viewBox="0 0 640 200" className="h-36 w-full sm:h-44" fill="none" preserveAspectRatio="none">
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
                d={linePath(conversions, 640, 200, 8)}
                stroke="#d4d4d8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2 6"
              />
            </svg>
          </div>

          {/* Tabela de leads */}
          <div className="overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
              <p className="text-sm font-semibold text-ink">Leads recentes</p>
              <span className="text-xs text-zinc-400">248 esta semana</span>
            </div>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-zinc-400">
                  <th className="px-4 py-2 font-medium">Lead</th>
                  <th className="hidden px-4 py-2 font-medium sm:table-cell">Canal</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 text-right font-medium">Valor</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.name} className="border-t border-zinc-50">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-semibold text-zinc-600">
                          {l.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </span>
                        <div className="leading-tight">
                          <p className="font-medium text-ink">{l.name}</p>
                          <p className="text-[10px] text-zinc-400">{l.company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden px-4 py-2.5 sm:table-cell">
                      <span className="inline-flex items-center gap-1.5 text-zinc-600">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.dot }} />
                        {l.channel}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium',
                          statusStyles[l.status],
                        )}
                      >
                        {l.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-right font-semibold text-ink">{l.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="space-y-4">
          {/* Status de automações */}
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Automações</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 4 ativas
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {automations.map((a) => {
                const t = tone[a.tone]
                return (
                  <li key={a.name} className="flex items-center gap-3">
                    <span className={cn('inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg', t.wrap)}>
                      <a.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex-1 text-xs font-medium text-ink">{a.name}</span>
                    <span className={cn('text-[10px] font-medium', t.dot)}>{a.state}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Receita por canal */}
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-ink">Receita por canal</p>
            <div className="mt-4 flex items-center gap-4">
              <DonutChart segments={channels} />
              <ul className="flex-1 space-y-2">
                {channels.map((c) => (
                  <li key={c.name} className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-zinc-600">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                      {c.name}
                    </span>
                    <span className="font-medium text-ink">{c.pct}%</span>
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
                <p className="flex items-center gap-1.5 text-xs font-semibold text-ink">
                  <Bell className="h-3 w-3 text-brand-600" /> Ação do agente
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">
                  Realoquei <span className="font-semibold text-brand-700">R$ 2.300</span> para a campanha
                  de maior ROAS. Receita projetada: +6,4%.
                </p>
              </div>
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
