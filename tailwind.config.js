/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orangeBrand: '#FF6B35',
        darkBrand: '#1E1E1E',
        creamBrand: '#FFF4ED',
        inkBrand: '#2D2D2D',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(30, 30, 30, 0.08)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
    },
  },
  plugins: [],
};
