import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cor principal — índigo/violeta premium
        brand: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c6caff',
          300: '#a3a6ff',
          400: '#807ffa',
          500: '#5b56f0',
          600: '#4a40e0',
          700: '#3d33c2',
          800: '#332c9c',
          900: '#2d287b',
        },
        ink: {
          DEFAULT: '#0b0b14',
          900: '#0b0b14',
          800: '#15151f',
          700: '#22222e',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,11,20,0.04), 0 10px 30px -12px rgba(11,11,20,0.10)',
        card: '0 1px 0 rgba(11,11,20,0.03), 0 18px 50px -20px rgba(11,11,20,0.18)',
        glow: '0 18px 60px -18px rgba(91,86,240,0.55)',
        'glow-sm': '0 8px 28px -10px rgba(91,86,240,0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.21,0.5,0.27,1) both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
