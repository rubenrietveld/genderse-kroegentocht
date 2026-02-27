/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3D2E",
        accent: "#C65A0A",
        light: "#F6F1E8",
        dark: "#111111"
      },
      fontFamily: {
        heading: ["'DM Serif Display'", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}