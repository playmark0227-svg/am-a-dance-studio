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
          50: '#f0f9fc',
          100: '#e0f2f9',
          200: '#c1e5f3',
          300: '#afd5e7',
          400: '#7dbcd9',
          500: '#5ba8c9',
          600: '#4a8fb0',
          700: '#3d7590',
          800: '#365f75',
          900: '#2f5063',
        },
        neonpink: {
          50: '#fff0fb',
          100: '#ffe0f7',
          200: '#ffc1ef',
          300: '#ff94e3',
          400: '#ff57d0',
          500: '#ff1ab8',
          600: '#f0009f',
          700: '#d10082',
          800: '#a8006a',
          900: '#8a0058',
        },
        accent: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#828282',
          600: '#4b5563',
          700: '#374151',
          800: '#262626',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
