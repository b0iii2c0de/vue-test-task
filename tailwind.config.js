/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      sm: ['0.7rem', '1'],
      base: ['1rem', '1.5'],
      lg: ['1.5rem', '2'],
      xl: ['2.5rem', '2.5'],
    },
    extend: {}
  },
  plugins: [],
}

