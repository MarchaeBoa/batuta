import { NextResponse } from 'next/server'

// Health checks devem ser sempre dinâmicos (nunca cacheados em build).
export const dynamic = 'force-dynamic'

export function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'batuta-web',
    timestamp: new Date().toISOString(),
  })
}
