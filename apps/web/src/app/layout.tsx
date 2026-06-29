import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const splineMono = Spline_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-spline-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const title = 'Batuta — Reja seus anúncios direto do ChatGPT e do Claude'
const description =
  'A camada de regência acima dos MCPs oficiais de anúncios. O agente toca; a batuta é sua. Com o Cofre de Orçamento, a IA não fura o seu teto.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://batuta.app'),
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Batuta',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${hanken.variable} ${splineMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
