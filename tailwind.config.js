import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107", // Amarillo dorado
        secondary: "#D32F2F", // Rojo intenso
        accent: "#8D6E63", // Marrón tostado
        fresh: "#4CAF50", // Verde oliva
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
        },
      },
    },
  },
  plugins: [],
 }

