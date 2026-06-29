import Link from 'next/link'

// O painel depende de sessão do usuário, então não deve ser pré-renderizado estaticamente.
export const dynamic = 'force-dynamic'

const platforms = [
  { name: 'Google Ads', emoji: '🔍' },
  { name: 'Meta Ads', emoji: '📘' },
  { name: 'TikTok Ads', emoji: '🎵' },
  { name: 'LinkedIn Ads', emoji: '💼' },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎼</span>
            <h1 className="text-2xl font-bold">Painel Batuta</h1>
          </div>
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-white transition-colors"
          >
            Sair
          </Link>
        </header>

        <section>
          <h2 className="text-lg font-semibold text-slate-200 mb-4">
            Conecte suas plataformas de anúncios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 flex flex-col items-center text-center gap-3"
              >
                <span className="text-4xl">{platform.emoji}</span>
                <span className="font-medium">{platform.name}</span>
                <button className="text-sm bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg px-4 py-1.5">
                  Conectar
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
