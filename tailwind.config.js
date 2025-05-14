/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5530', // tactical green
          50: '#E8F0E9',
          100: '#D1E2D3',
          200: '#A4C5A7',
          300: '#76A87B',
          400: '#498A4F',
          500: '#2C5530',
          600: '#264A29',
          700: '#1F3E22',
          800: '#19331C',
          900: '#122715',
        },
        secondary: {
          DEFAULT: '#182940', // navy blue
          50: '#E3E6EB',
          100: '#C7CCD7',
          200: '#8F99AF',
          300: '#576788',
          400: '#2F4060',
          500: '#182940',
          600: '#152437',
          700: '#121E2E',
          800: '#0E1926',
          900: '#0B141D',
        },
        accent: {
          DEFAULT: '#D6C7A9', // sand
          50: '#F9F7F3',
          100: '#F3EFE7',
          200: '#E8E0CF',
          300: '#DDD1B8',
          400: '#D6C7A9',
          500: '#C6B28B',
          600: '#B69F6E',
          700: '#9F8652',
          800: '#7E6A42',
          900: '#5D4F31',
        },
        success: {
          DEFAULT: '#4CAF50',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        warning: {
          DEFAULT: '#FF9800',
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        error: {
          DEFAULT: '#F44336',
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};