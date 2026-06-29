import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/primitives'
import { BatutaMark } from '@/components/icons'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-stage text-brass">
            <BatutaMark className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Batuta
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#precos"
            className="hidden text-sm text-ink-soft transition-colors hover:text-ink sm:block"
          >
            Entrar
          </a>
          <Button href="#cta" variant="primary">
            Começar grátis
          </Button>
        </div>
      </Container>
    </header>
  )
}
