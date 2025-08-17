/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#faf9f6',
        'warm-gray': '#f5f5f4',
        'soft-brown': '#e7e5e4',
        'muted-green': '#d1fae5',
        'soft-blue': '#dbeafe',
        'warm-pink': '#fce7f3',
        'dusty-orange': '#fed7aa',
        'text-primary': '#44403c',
        'text-secondary': '#78716c',
        'text-muted': '#a8a29e',
        border: '#e7e5e4',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'soft-fade-in': 'soft-fade-in 0.6s ease-out',
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'soft-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
