/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      transitionDuration: {
        900: '900ms',
      },
      colors: {
        white: {
          500: '#E5E5E5',
          DEFAULT: '#ffffff',
        },
        green: {
          500: '#008000',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#D05448',
        },
        purple: {
          500: '#5F00FA',
        },
        pink: {
          500: '#B53F7C',
        },
        gray: {
          200: '#6D6D6D',
          300: '#504F4F',
          400: '#2C2F33',
          500: '#2E3033',
          700: '#23272A',
        },
        grayHover: '#CCCCCC',
      },
    },
  },
  plugins: [],
}
