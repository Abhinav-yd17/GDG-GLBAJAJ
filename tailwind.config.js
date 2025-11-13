/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',   // Enable Dark Mode using .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* ---------------------------
         GOOGLE COLOR PALETTE
      ---------------------------- */
      colors: {
        googleBlue: "#4285F4",
        googleRed: "#EA4335",
        googleYellow: "#FBBC05",
        googleGreen: "#34A853",

        /* Light Theme */
        lightBg: "#FFFFFF",
        lightCard: "#F8F9FA",
        lightText: "#202124",

        /* Dark Theme */
        darkBg: "#121212",
        darkCard: "#1E1E1E",
        darkText: "#E8EAED",
      },

      /* ---------------------------
         FONTS
      ---------------------------- */
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },

      /* ---------------------------
         ANIMATIONS (KEPT SAME)
      ---------------------------- */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },

      /* ---------------------------
         OPTIONAL: GOOGLE GRADIENTS
      ---------------------------- */
      backgroundImage: {
        'google-gradient': 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
      },
    },
  },
  plugins: [],
}
