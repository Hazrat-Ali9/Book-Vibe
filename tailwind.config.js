/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vibe-btn-primary': '#23BE0A',
        'vibe-btn-secondary': '#59C6D2',
      },
    },

  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}

