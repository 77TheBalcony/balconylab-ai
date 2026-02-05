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
        display: ['Syne', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        green: {
          primary: '#2D8B6F',
          glow: '#3FFF9A',
          dim: '#1A5240',
        },
        blue: {
          primary: '#0066FF',
          glow: '#00D4FF',
          dim: '#003D99',
        },
        rebel: '#FF3366',
        warn: '#FFB800',
        purple: '#8B5CF6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'neural-flow': 'neural-flow 2s linear infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
