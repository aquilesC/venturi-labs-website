/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./theme/venturi/templates/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        'venturi-cyan': '#06B6D4',
        'architecture-indigo': '#4F46E5',
        'ecosystem-emerald': '#10B981',
        'slate-50': '#f8fafc',
        'slate-600': '#475569',
        'slate-900': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      transitionDuration: {
        '150': '150ms',
      },
      transitionTimingFunction: {
        'linear': 'linear',
      }
    },
  },
  plugins: [],
}
