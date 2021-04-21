module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'opensans': ['Open Sans', 'sans-serif']
    },
    backgroundColor: theme => ({
      'base': '#B23947',
      'icon': '#FCA078',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000'
    }),
    textColor: {
      'basic': '#B23947',
      'icon': '#FCA078',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#4E4E4E',
      'gray': '#949698'
    },
    borderColor: {
      'base': '#B23947',
      'icon': '#FCA078',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#4E4E4E'
    },
    boxShadow: {
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      'base': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 20px -12px rgba(178,57,71, 0.70);'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
  important: true
}
