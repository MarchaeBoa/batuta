'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Container } from '@/components/ui/container'

type Stat = {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
}

const stats: Stat[] = [
  { to: 1000, prefix: '+', label: 'times de marketing' },
  { to: 12, prefix: 'R$ ', suffix: ' mi', label: 'em mídia processada' },
  { to: 98, suffix: '%', label: 'de satisfação' },
  { to: 99.9, suffix: '%', decimals: 1, label: 'de uptime' },
]

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function formatNumber(value: number, decimals: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const [value, setValue] = useState(0)
  const decimals = stat.decimals ?? 0

  useEffect(() => {
    if (!active) return
    let raf = 0
    let startTime: number | null = null
    const duration = 1500
    const step = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min(1, (now - startTime) / duration)
      setValue(stat.to * easeOutCubic(progress))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, stat.to])

  return (
    <span className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
      {stat.prefix}
      {formatNumber(value, decimals)}
      {stat.suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl border border-zinc-200/80 bg-white px-6 py-12 shadow-soft sm:px-10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter stat={stat} active={inView} />
              <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
