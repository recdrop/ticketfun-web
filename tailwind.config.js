/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-icons": "#6B6B68",
        "black-footer": "#242423",
        "purple-tf": {
          900: "#731DD8",
        },
        "red-tf": {
          900: "#EF2517",
        },
        "gray-tf": {
          400: "#D1D1CC",
          900: "#6B6B68",
        },
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
    },
    container: {
      center: true,

      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1512px",
      },
    },
  },
  plugins: [],
};
