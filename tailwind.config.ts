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
        // Primärfarben - angepasst an Logo
        cream: {
          50: '#FFFEFB',
          100: '#FDF9F3',
          200: '#FAF3E7',
          300: '#F5E9D4',
          400: '#EDD9B8',
          500: '#E2C89C',
        },
        // Braun-Töne vom Logo
        barn: {
          50: '#FBF5F3',
          100: '#F5E8E3',
          200: '#EBCFC5',
          300: '#D4A594',
          400: '#B87A63',
          500: '#8B4513',
          600: '#723A10',
          700: '#5C2E0D',
          800: '#4A250B',
          900: '#3D1F09',
        },
        // Rot-Töne vom Hahn
        rooster: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#5C1515',
        },
        // Sonnengelb vom Logo
        sun: {
          50: '#FFFEF5',
          100: '#FFFCE6',
          200: '#FFF8C2',
          300: '#FFF199',
          400: '#FFE866',
          500: '#FFD700',
          600: '#E6C200',
          700: '#B39700',
          800: '#806C00',
          900: '#4D4100',
        },
        // Grün für Frische/Natur
        moss: {
          50: '#F4F7F4',
          100: '#E4EBE4',
          200: '#C8D7C8',
          300: '#A3BCA3',
          400: '#789A78',
          500: '#5B7F5B',
          600: '#486748',
          700: '#3B533B',
          800: '#324432',
          900: '#2A382A',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
