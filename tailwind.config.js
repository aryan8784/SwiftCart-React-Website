/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#9fd3c7",
        SecondaryColor: "#87e0ff",
        DarkColor: "#01aac1",
        ExtraDarkColor: "#00649f",
      },
    },
  },
  plugins: [],
};
