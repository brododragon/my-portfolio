/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              marginBottom: theme("spacing.12"), // 3rem
              backgroundColor: "rgba(255,0,0,0.2)", // optional visual test
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};