/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Avenir Next-Bold", "Avenir Next"],
      },
      colors: {
        highlight: "#0f9949",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
