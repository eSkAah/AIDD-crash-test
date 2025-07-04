/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette AIDD
        'aidd-blue-dark': '#0A0F2C',     // Couleur principale (fond, header)
        'aidd-yellow': '#FFE600',        // Accent / Call-to-action
        'aidd-black': '#18191A',         // Texte très foncé / Fond contrasté
        'aidd-white': '#FFFFFF',         // Fond clair / Texte secondaire
        'aidd-gray-light': '#F5F5F7',    // Arrière-plan clair type Apple
        'aidd-gray-dark': '#5A5A5A',     // Texte secondaire / Désactivé
        'aidd-blue-steel': '#2A2D3E',    // Alternative au noir (cards, modales)
      },
      fontFamily: {
        'sans': ['SF Pro Display', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'apple': '0 4px 32px 0 rgba(0, 0, 0, 0.10)',
        'apple-sm': '0 2px 16px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
