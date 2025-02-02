/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        primary: "#1D4ED8", // Example primary color (blue-700)
      },
    },
  },
  plugins: [require("daisyui")], // Ensure plugins are at the root level
};
