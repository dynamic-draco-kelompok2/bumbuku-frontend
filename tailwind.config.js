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
      'grey': '#4E4E4E'
    },
    borderColor: {
      'base': '#B23947',
      'icon': '#FCA078',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#4E4E4E'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-'
}
