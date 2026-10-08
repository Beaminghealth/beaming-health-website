/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Rich turquoise / teal — primary brand + CTA
        teal: {
          50: '#eefbfa',
          100: '#d3f4f2',
          200: '#ace9e6',
          300: '#75d8d4',
          400: '#38bfbc',
          500: '#1ba3a2',
          600: '#128384',
          700: '#136869',
          800: '#155355',
          900: '#154547',
          950: '#062a2c',
        },
        // Deep navy / blue-green — headings, high-contrast sections
        navy: {
          50: '#f3f7f8',
          100: '#e0ecee',
          200: '#c4dadf',
          300: '#9bbfc8',
          400: '#6a9ba9',
          500: '#4d7f8e',
          600: '#436979',
          700: '#3a5764',
          800: '#354954',
          900: '#0f2c33',
          950: '#081a1f',
        },
        // Warm off-white / very pale aqua — backgrounds
        cream: {
          50: '#fbfcfb',
          100: '#f5f8f6',
          200: '#eef4f2',
        },
        // Warm coral accent — used very sparingly
        coral: {
          400: '#f2977c',
          500: '#ea7a5c',
          600: '#d9603f',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(15, 44, 51, 0.18)',
        card: '0 4px 24px -8px rgba(15, 44, 51, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
