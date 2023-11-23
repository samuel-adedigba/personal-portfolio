/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#17072b",
        purple: "#9067c6",
        "light-purple": "#8d86c9",
        pink: "#cac4ce",
        "light-pink": "#f7ece1",
        "pink-two": "rgba(245,116,185,1)",
        blue: "rgba(89,97,223,1)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "source-code": ["Source Code Pro", "monospace"]
      },
      backgroundImage: {
        "gradient-rainbow": "linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );"
      },
      listStyleType:{
        arrow: "&#10148;"
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
