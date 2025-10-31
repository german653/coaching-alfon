// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados aquí
        'logo-orange': '#FFB03B', // Este es un ejemplo, ajusta al amarillo/naranja exacto de tu logo
        'logo-dark': '#4A2A2A',   // Un marrón oscuro que podría derivar del logo
        'accent-pink': '#EC4899', // Si quieres mantener un rosa sutil
      },
      // Puedes también definir una fuente personalizada si lo deseas
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // Ejemplo con fuente Inter de Google Fonts
      // },
    },
  },
  plugins: [],
}