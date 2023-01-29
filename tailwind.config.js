/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#242038",
        purple: "#9067c6",
        "light-purple": "#8d86c9",
        pink: "#cac4ce",
        "light-pink": "#f7ece1"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "source-code": ["Source Code Pro", "monospace"]
      },
      backgroundImage: {
        "gradient-rainbow": "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
