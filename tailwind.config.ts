import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bl': {
          'bg': '#0a0a0b',
          'card': '#111113',
          'card-hover': '#18181b',
          'border': '#232326',
          'border-light': '#2e2e33',
          'text': '#f5f0e8',
          'text-muted': '#8a8a94',
          'text-dim': '#55555f',
          'accent': '#c9a96e',
          'accent-dim': '#8a6f42',
          'green': '#4a7c59',
          'green-bright': '#5d9c70',
          'red': '#8b3a3a',
          'red-bright': '#c0504d',
          'yellow': '#8a7340',
          'yellow-bright': '#c4a842',
        }
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
export default config
