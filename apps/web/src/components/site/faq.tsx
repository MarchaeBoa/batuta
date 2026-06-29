'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/cn'

const faqs = [
  {
    q: 'Quanto custa a Batuta?',
    a: 'Você começa de graça, sem cartão de crédito. Os planos pagos escalam conforme o volume de mídia que você gerencia, então o preço acompanha o tamanho da sua operação — sem surpresas e com cancelamento a qualquer momento.',
  },
  {
    q: 'Como funciona o suporte?',
    a: 'Todos os planos contam com suporte por e-mail e central de ajuda. Nos planos de maior volume, você ganha um especialista dedicado e canal prioritário com tempo de resposta garantido.',
  },
  {
    q: 'Quais plataformas posso integrar?',
    a: 'Hoje a Batuta conecta Google Ads, Meta Ads, TikTok Ads e LinkedIn Ads via as integrações oficiais de cada canal. Novas plataformas entram no roadmap continuamente.',
  },
  {
    q: 'Meus dados estão seguros?',
    a: 'Sim. Usamos criptografia em trânsito e em repouso, tokens de acesso cifrados e seguimos o princípio do menor privilégio. Você define alçadas, aprovações e mantém trilha de auditoria de cada ação do agente.',
  },
  {
    q: 'Quanto tempo leva para implementar?',
    a: 'Minutos. Você autoriza as plataformas com OAuth, a Batuta importa suas contas e campanhas, e o painel já fica pronto. Sem instalação, sem TI, sem planilha.',
  },
  {
    q: 'O agente age sozinho sem o meu aval?',
    a: 'Só dentro dos limites que você definir. Você escolhe o que ele pode executar automaticamente e o que precisa de aprovação — e pode pausar tudo com um clique.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-200/80">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-medium text-ink sm:text-base">{q}</span>
        <span
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all duration-300',
            open && 'rotate-45 border-brand-200 bg-brand-50 text-brand-600',
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.21, 0.5, 0.27, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-sm leading-relaxed text-zinc-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que você precisa saber"
          description="Não achou sua resposta? Fale com a gente — respondemos rápido."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  )
}
