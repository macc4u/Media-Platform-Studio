/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#050517',
          blue: '#00F0FF',
          purple: '#B000FF',
          pink: '#FF2EB6',
          gray: '#13132A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 8px #00F0FF, 0 0 15px #B000FF',
        neonPink: '0 0 8px #FF2EB6, 0 0 15px #B000FF',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #050517 0%, #0A0A2E 50%, #120526 100%)',
      },
    },
  },
  plugins: [],
};
