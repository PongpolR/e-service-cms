import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        "eservice-purple": "#c07bc4",
        "pea-theme": "#69306D",
        main: "#8E0369",
        "pea-btn": "#B58E38",
        "border-panel": "#9E9E9E",
        "panel-text": "#253553",
        "pea-border": "#8E8E8E",
        "footer-text": "#F7F7F8",
        "id-btn": "#E4E4E4",
      },
      fontFamily: {
        NotoSans: ["Noto Sans", "serif"],
        NotoSansThai: ["Noto Sans Thai", "serif"],
        kanit: ["Kanit", "serif"],
      },
      spacing: {
        "8px": "8px",
        "12px": "12px",
        "100px": "100px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
