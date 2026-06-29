'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { Faq } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg text-ink">{item.q}</span>
              <Plus
                className={cn(
                  'h-5 w-5 shrink-0 text-brass-2 transition-transform duration-300',
                  isOpen && 'rotate-45',
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-ink-soft">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
