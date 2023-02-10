/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1280px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.4)',
        'white': '#ffffff',
        primary: "#2C7CBB",
        secondary: "#418106",
        'app-blue': '#2C7CBB',
        'app-light-blue': '#EEF5FA',
        'app-light-green': '#EAEDEE',
        'app-green': '#008100',
        'app-gray': '#333333',
        'app-light-gray': '#545F76',
        'app-stone': '#29303F',
        'site-orange':
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
