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
     borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
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
        "blue-tf": {
          100: "#DBE8FF",
          200: "#99C1FF",
          300: "#66A3FF",
          400: "#3384FF",
          500: "#0066FF",
          600: "#0052CC",
          800: "#003C99",
          700: "#2970FF",
          900: "#1f5acc",
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
