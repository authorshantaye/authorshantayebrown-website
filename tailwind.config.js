/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        coal: "#141211",
        smoke: "#1e1b19",
        bone: "#f4eee8",
        taupe: "#a89c90",
        rose: { DEFAULT: "#e0426b", deep: "#b82a52" },
        gold: "#c9a45c",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
