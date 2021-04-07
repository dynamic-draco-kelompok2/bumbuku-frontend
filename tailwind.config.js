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
      'white': '#FFFFFF'
    }),
    textColor: {
      'base': '#B23947',
      'icon': '#FCA078',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF',
      'black': '#000000'
    },
    borderColor: {
      'base': '#B23947',
      'icon': '#FCA078',
      'desktop': '#EEEEEE',
      'white': '#FFFFFF'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
