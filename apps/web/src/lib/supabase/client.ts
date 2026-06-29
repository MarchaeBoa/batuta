'use client'

import { createBrowserClient } from '@supabase/ssr'

/**
 * Cria o client Supabase para o navegador.
 *
 * As variáveis são lidas só na execução (nunca no topo do módulo), para que a
 * ausência delas não quebre o build/SSG — o erro só aparece se alguém realmente
 * tentar autenticar sem configurar o ambiente.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Supabase não configurado: defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY.',
    )
  }

  return createBrowserClient(url, anonKey)
}
