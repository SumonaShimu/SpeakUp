/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark",
      {
        mytheme: {

          "primary": "#ff1f1f",

          "secondary": "#4338ca",

          "accent": "#bb63f9",

          "neutral": "#ffffff",

          "base-100": "#ffffff",

          "info": "#4e8ac6",

          "success": "#3edac3",

          "warning": "#ff7f0f",

          "error": "#f03228",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

