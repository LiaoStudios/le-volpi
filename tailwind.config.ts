import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary palette: rosso-bordeaux
        red: {
          DEFAULT: '#A62834',
          soft: '#B23A47',
          deep: '#7E1D2A',
        },
        bordeaux: '#591620',
        cream: '#FBF7F0',
        beige: '#F0E7D8',
        ink: '#241A15',
        gold: '#C9A24B',
        // Fox brand orange, kept only for the real logo mark accents
        orange: {
          DEFAULT: '#E4711E',
          soft: '#F3A15A',
          deep: '#C25A11',
        },
      },
      fontFamily: {
        serif: ['Zodiak', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        warm: '0 20px 45px rgba(36, 26, 21, 0.08)',
        cta: '0 12px 30px rgba(192, 57, 43, 0.28)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
