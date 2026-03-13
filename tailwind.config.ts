import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidiana: '#0f1219',
        musgo: '#3d4f3c',
        terracota: '#b97d52',
        areia: '#f0ebe0',
        cinza: '#8c8c8c'
      },
      fontFamily: {
        display: ['Melodrama', 'Georgia', 'serif'],
        body: ['Work Sans', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      }
    }
  },
  plugins: []
} satisfies Config
