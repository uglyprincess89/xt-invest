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
        navy: {
          DEFAULT: '#1a4d7a',
          dark: '#0f3358',
          light: '#1a5a7a',
          // nejtmavší odstín pro hero/patičku — hlubší než navy-dark, drží kontrast AAA
          ink: '#0a2036',
        },
        teal: {
          DEFAULT: '#2bbfa4',
          dark: '#1e9e88',
          light: '#eaf7f4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Typografická škála — perfect fourth (1.333) nad 17px základem.
      // display/display-sm jsou fluidní (clamp), zbytek pevný.
      fontSize: {
        display: ['clamp(2.625rem, 2.3vw + 2rem, 4.25rem)', { lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(2rem, 1.4vw + 1.6rem, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        h3: ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['1.1875rem', { lineHeight: '1.65' }],
        overline: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      // Stíny tónované do navy (ne černé) — působí čistěji na světlých plochách.
      boxShadow: {
        card: '0 1px 2px rgb(15 51 88 / 0.05), 0 4px 16px -2px rgb(15 51 88 / 0.07)',
        'card-hover': '0 2px 4px rgb(15 51 88 / 0.06), 0 20px 40px -8px rgb(15 51 88 / 0.16)',
        'glow-teal': '0 8px 24px -6px rgb(43 191 164 / 0.5)',
        'glow-teal-lg': '0 14px 36px -6px rgb(43 191 164 / 0.6)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
export default config
