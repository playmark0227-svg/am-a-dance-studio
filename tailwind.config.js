/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#fecfc9',
          300: '#fdaea3',
          400: '#fa7f6d',
          500: '#f05543',
          600: '#dd3826',
          700: '#ba2a1c',
          800: '#9a261b',
          900: '#80261d',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe6',
          300: '#a8bdd1',
          400: '#799ab7',
          500: '#587c9f',
          600: '#456385',
          700: '#38506d',
          800: '#31445b',
          900: '#2c3b4d',
        },
      },
    },
  },
  plugins: [],
}
