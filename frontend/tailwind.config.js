/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['M PLUS Rounded 1c'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      animation: {
        fastPulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'lgc-blue': '#00788A',
        'lgc-blue-light': '#339EAD',
        'lgc-grey-dark': '#333333',
        'lgc-grey-light': '#F5F5F5',
        'lgc-white': '#FFFFFF',
        'aws-squid-ink': {
          light: '#333333',
          dark: '#171717',
        },
        'aws-sea-blue': {
          light: '#00788A',
          dark: '#757575',
        },
        'aws-sea-blue-hover': {
          light: '#339EAD',
          dark: '#5b5b5b',
        },
        'aws-aqua': '#00788A',
        'aws-lab': '#339EAD',
        'aws-mist': '#339EAD',
        'aws-font-color': {
          light: '#333333',
          dark: '#cacaca',
          gray: '#909193',
          blue: '#00788A',
        },
        'aws-font-color-white': {
          light: '#FFFFFF',
          dark:'#ececec',
        },
        'aws-ui-color': {
          dark: '#333333',
        },
        'aws-paper': {
          light: '#F5F5F5',
          dark: '#212121',
        },
        red: '#dc2626',
        'light-red': '#fee2e2',
        yellow: '#f59e0b',
        'light-yellow': '#fef9c3',
        'dark-gray': '#6b7280',
        gray: '#9ca3af',
        'light-gray': '#e5e7eb',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
