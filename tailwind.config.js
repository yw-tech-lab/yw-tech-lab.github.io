/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        background: {
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#d0d0d0',
          400: '#c0c0c0',
        },
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
      },
      fontFamily: {
        abril: ['"Abril Fatface"', 'cursive'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(80px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-out infinite',
        'wave-delayed': 'wave 1.5s ease-out 0.75s infinite',
        'slide-up': 'slideUp 0.9s ease-out forwards',
      },
    },
  },
  plugins: [],
};
