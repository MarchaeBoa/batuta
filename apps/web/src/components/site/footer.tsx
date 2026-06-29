import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '#recursos' },
      { label: 'Demonstração', href: '#produto' },
      { label: 'Clientes', href: '#depoimentos' },
      { label: 'Perguntas', href: '#faq' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#beneficios' },
      { label: 'Blog', href: '#recursos' },
      { label: 'Contato', href: 'mailto:contato@batuta.app' },
      { label: 'Status', href: '/api/health' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de uso', href: '#faq' },
      { label: 'Privacidade', href: '#faq' },
      { label: 'Segurança', href: '#faq' },
      { label: 'LGPD', href: '#faq' },
    ],
  },
]

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/MarchaeBoa/batuta', icon: Github },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
              A camada de regência acima dos canais oficiais de anúncios. O agente
              toca; a batuta é sua.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-ink"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ||
                    link.href.startsWith('mailto:') ||
                    link.href.startsWith('/api') ? (
                      <a
                        href={link.href}
                        className="text-sm text-zinc-600 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-600 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-100 py-6 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Batuta. Todos os direitos reservados.
          </p>
          <p className="text-sm text-zinc-500">Feito com método, no Brasil 🇧🇷</p>
        </div>
      </Container>
    </footer>
  )
}
