/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primaryBlue: "#2563EB",
        secondaryCyan: "#06B6D4",
        primaryGreen: "#4CAF50",
        primaryOrange: "#FF8A00",
        darkNavy: "#0D1B2A",
        whiteBg: "#F5F7FA",
      },

      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        primary:
          "0 10px 30px rgba(37,99,235,0.15)",

        card:
          "0 4px 20px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        lg2: "20px",
      },

      backgroundImage: {
        primaryGradient:
          "linear-gradient(135deg, #2563EB, #06B6D4)",

        successGradient:
          "linear-gradient(135deg, #4CAF50, #8BC34A)",
      },

    },
  },

  plugins: [],
};