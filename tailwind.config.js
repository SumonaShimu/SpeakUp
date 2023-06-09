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
    themes: [
      {
        mytheme: {

          "primary": "#ff1f1f",

          "secondary": "#003c72",

          "accent": "#C148AC",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#93E7FB",

          "success": "#81CFD1",

          "warning": "#EFD7BB",

          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

