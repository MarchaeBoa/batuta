'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#recursos', label: 'Recursos' },
  { href: '#produto', label: 'Demonstração' },
  { href: '#depoimentos', label: 'Clientes' },
  { href: '#faq', label: 'Perguntas' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scrim do menu mobile */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={cn(
          'fixed inset-0 bg-ink/20 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        className={cn(
          'mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4',
          'mx-3 sm:mx-auto',
          scrolled
            ? 'border border-zinc-200/70 bg-white/75 shadow-soft backdrop-blur-xl'
            : 'border border-transparent bg-transparent',
        )}
      >
        <Link href="/" aria-label="Batuta — página inicial" className="shrink-0 px-1">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/auth/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-ink"
          >
            Entrar
          </Link>
          <Button href="/auth/login" size="sm">
            Começar agora
          </Button>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-zinc-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Painel mobile */}
      <div
        className={cn(
          'mx-3 mt-2 origin-top overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/95 shadow-card backdrop-blur-xl transition-all duration-300 md:hidden',
          open ? 'pointer-events-auto max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 grid gap-2 border-t border-zinc-100 pt-3">
            <Button href="/auth/login" variant="secondary" className="w-full">
              Entrar
            </Button>
            <Button href="/auth/login" className="w-full">
              Começar agora
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
