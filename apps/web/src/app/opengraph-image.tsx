import { ImageResponse } from 'next/og'

export const alt = 'Batuta — a regência da sua mídia paga com IA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#0b0b14',
          backgroundImage:
            'radial-gradient(circle at 82% 0%, rgba(91,86,240,0.55), transparent 55%), radial-gradient(circle at 0% 100%, rgba(155,108,255,0.35), transparent 55%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #5b56f0, #9b6cff)',
              borderRadius: 16,
              color: 'white',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ color: 'white', fontSize: 30, fontWeight: 600 }}>Batuta</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: 'white',
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: 900,
            }}
          >
            Toda a sua mídia paga sob uma só batuta.
          </div>
          <div style={{ color: '#a1a1aa', fontSize: 30, marginTop: 24, maxWidth: 820 }}>
            Google, Meta, TikTok e LinkedIn em um só painel — otimizados por um agente de IA.
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
