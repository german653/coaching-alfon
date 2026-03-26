// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-orange': '#f97316',
        'brand-amber': '#f59e0b',
        'brand-dark': '#1c1917',
        'brand-warm': '#292524',
      },
      boxShadow: {
        'glow-orange': '0 0 40px rgba(249, 115, 22, 0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, #1c1917 0%, #292524 60%, #1c1917 100%)",
        'orange-gradient': "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}