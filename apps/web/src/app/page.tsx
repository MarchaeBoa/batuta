import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-6xl">🎼</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Batuta
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            A camada de regência acima dos MCPs oficiais de anúncios.
          </p>
          <p className="text-lg text-slate-400 mb-12">
            O agente toca. A batuta é sua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Entrar no Painel
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
