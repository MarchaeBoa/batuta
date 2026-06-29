import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        stage: { DEFAULT: '#1F1813', 2: '#271F18' },
        paper: '#ECE5D3',
        ink: { DEFAULT: '#241D15', soft: '#5C5142' },
        line: '#C9BEA3',
        brass: { DEFAULT: '#BE8C36', 2: '#9C7128' },
        wine: '#9A3A40',
        verdigris: '#5C8A6F',
        cream: { DEFAULT: '#EAE2CF', soft: '#A99E86' },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-spline-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        page: '1180px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'note-rise': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'note-rise': 'note-rise 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
