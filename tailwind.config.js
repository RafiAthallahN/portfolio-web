/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        slate: {
          900: '#0F172A',
          950: '#0B0F19',
        },
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        sky: {
          400: '#38BDF8',
        },
        cyan: {
          500: '#06B6D4',
        },
        indigo: {
          500: '#6366F1',
          600: '#4F46E5',
        },
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
