import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Permite apontar o domínio próprio via env na Vercel (Settings → Environment).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://batuta.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Batuta — A regência da sua mídia paga com IA',
    template: '%s · Batuta',
  },
  description:
    'Conecte Google, Meta, TikTok e LinkedIn em um só painel. Um agente de IA otimiza suas campanhas em tempo real — e a decisão final é sempre sua.',
  keywords: [
    'gestão de anúncios',
    'mídia paga',
    'Google Ads',
    'Meta Ads',
    'TikTok Ads',
    'LinkedIn Ads',
    'automação de marketing',
    'otimização de campanhas',
    'IA para anúncios',
    'ROAS',
  ],
  authors: [{ name: 'Batuta' }],
  creator: 'Batuta',
  applicationName: 'Batuta',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Batuta',
    title: 'Batuta — A regência da sua mídia paga com IA',
    description:
      'Toda a sua mídia paga sob uma só batuta. Conecte seus canais e deixe um agente de IA otimizar suas campanhas — com você no controle.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batuta — A regência da sua mídia paga com IA',
    description:
      'Toda a sua mídia paga sob uma só batuta. Um agente de IA que otimiza campanhas em tempo real.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white font-sans text-ink antialiased">{children}</body>
    </html>
  )
}
