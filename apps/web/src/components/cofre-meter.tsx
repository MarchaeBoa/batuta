'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { evaluate, type Verdict } from '@/lib/vault'
import { VAULT } from '@/lib/data'
import { brl, cn } from '@/lib/utils'

const POLICY = {
  dailyCeilingCents: VAULT.ceilingCents,
  perActionCapCents: VAULT.perActionCapCents,
  approvalAboveCents: VAULT.approvalAboveCents,
}
const STATE = { committedCents: VAULT.spentCents }

const SCALE_MAX = Math.round(VAULT.ceilingCents * 1.12) // headroom acima do teto
const DYNAMICS = ['pp', 'p', 'mp', 'mf', 'f', 'ff', 'fff']

const PRESETS = [
  { label: '+R$50', cents: 5000 },
  { label: '+R$100', cents: 10000 },
  { label: '+R$200', cents: 20000 },
]

const TONE: Record<Verdict, { color: string; glow: string; word: string }> = {
  allow: { color: 'var(--verdigris)', glow: 'rgba(92,138,111,0.55)', word: 'liberado' },
  hold: { color: 'var(--brass)', glow: 'rgba(190,140,54,0.55)', word: 'pede aval' },
  block: { color: 'var(--wine)', glow: 'rgba(154,58,64,0.6)', word: 'barrado' },
}

function pct(cents: number): number {
  return Math.min(100, (cents / SCALE_MAX) * 100)
}

export function CofreMeter() {
  const [delta, setDelta] = useState(20000) // começa na história: +R$200 → barrado

  const decision = evaluate({ kind: 'update_budget', deltaCents: delta }, POLICY, STATE)
  const tone = TONE[decision.verdict]

  const committedPct = pct(STATE.committedCents)
  const ceilingPct = pct(POLICY.dailyCeilingCents)
  // A nota nunca cruza a barra: trava no teto quando barraria.
  const notePct = pct(Math.min(decision.projectedCents, POLICY.dailyCeilingCents))

  return (
    <div className="w-full rounded-2xl border border-brass/25 bg-stage-2/90 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-label text-cream-soft">
          Cofre · dinâmica
        </span>
        <span className="font-mono text-[11px] text-cream-soft">conta {VAULT.accountId}</span>
      </div>

      <div className="flex gap-5">
        {/* Escala de dinâmica + pauta */}
        <div className="relative h-[260px] w-7 shrink-0 text-right">
          {DYNAMICS.map((d, i) => (
            <span
              key={d}
              className="absolute right-0 -translate-y-1/2 font-mono text-[10px] text-cream-soft/70"
              style={{ bottom: `${(i / (DYNAMICS.length - 1)) * 92}%` }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* A pauta vertical com a nota */}
        <div className="relative h-[260px] flex-1 overflow-hidden rounded-lg border border-cream/10 bg-stage staff-lines-dark">
          {/* gasto já comprometido */}
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cream/[0.14] to-cream/[0.04]"
            style={{ height: `${committedPct}%` }}
          />
          {/* barra de latão = teto fff */}
          <div
            className="absolute inset-x-0 z-10 flex items-center"
            style={{ bottom: `${ceilingPct}%` }}
          >
            <div className="h-[3px] w-full bg-brass shadow-[0_0_18px_rgba(190,140,54,0.8)]" />
          </div>
          <div
            className="absolute right-1.5 z-10 -translate-y-1/2 font-mono text-[9px] uppercase tracking-wider text-brass"
            style={{ bottom: `${ceilingPct}%` }}
          >
            fff · teto {brl(POLICY.dailyCeilingCents)}
          </div>

          {/* a nota */}
          <motion.div
            className="absolute left-1/2 z-20 h-7 w-7 -translate-x-1/2 translate-y-1/2 rounded-full"
            animate={{
              bottom: `${notePct}%`,
              backgroundColor: tone.color,
              boxShadow: `0 0 24px ${tone.glow}`,
              x: decision.verdict === 'block' ? [0, -3, 3, -2, 0] : 0,
            }}
            transition={{
              bottom: { type: 'spring', stiffness: 120, damping: 16 },
              backgroundColor: { duration: 0.3 },
              x: { duration: 0.4 },
            }}
            style={{ translateX: '-50%' }}
          >
            <span className="absolute inset-0 rounded-full border-2 border-paper/30" />
          </motion.div>
        </div>

        {/* Veredito */}
        <div className="flex w-[148px] shrink-0 flex-col justify-between">
          <div>
            <div
              className="font-display text-2xl font-semibold leading-none"
              style={{ color: tone.color }}
            >
              {tone.word}
            </div>
            <p className="mt-2 text-xs leading-snug text-cream-soft">{decision.reason}</p>
          </div>
          <dl className="space-y-2 font-mono text-[11px]">
            <div className="flex justify-between text-cream-soft">
              <dt>pedido</dt>
              <dd className="text-cream">{brl(delta)}</dd>
            </div>
            <div className="flex justify-between text-cream-soft">
              <dt>projetado</dt>
              <dd className="text-cream tnum">{brl(decision.projectedCents)}</dd>
            </div>
            <div className="flex justify-between border-t border-cream/10 pt-2 text-cream-soft">
              <dt>folga</dt>
              <dd className="font-semibold" style={{ color: tone.color }}>
                {brl(decision.slackCents)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Controle: o "aumento do agente" */}
      <div className="mt-6 border-t border-cream/10 pt-5">
        <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-cream-soft">
          <span>aumento do agente</span>
          <span className="text-cream">{brl(delta)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={40000}
          step={1000}
          value={delta}
          onChange={(e) => setDelta(Number(e.target.value))}
          aria-label="Aumento pedido pelo agente"
          className="w-full cursor-pointer accent-[var(--brass)]"
          style={{ accentColor: tone.color }}
        />
        <div className="mt-3 flex gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setDelta(p.cents)}
              className={cn(
                'rounded-full border px-3 py-1 font-mono text-[11px] transition-colors',
                delta === p.cents
                  ? 'border-brass bg-brass/15 text-cream'
                  : 'border-cream/15 text-cream-soft hover:border-cream/40',
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
