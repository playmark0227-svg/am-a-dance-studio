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
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#dab7ff',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
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
