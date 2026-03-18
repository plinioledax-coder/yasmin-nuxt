/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#F0D080',
          dark:    '#A07830',
        },
        charcoal: {
          DEFAULT: '#1A1814',
          light:   '#2A2620',
          dark:    '#0C0A08',
        },
        ivory: {
          DEFAULT: '#FAFAF8',
          dark:    '#F0EDE8',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blob':       'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':      { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}