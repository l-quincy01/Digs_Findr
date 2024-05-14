/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ADD8E6",
      },
      aspectRatio: {
        rectangle: "4/3",
      },
    },
  },
  plugins: [],
};
