module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['motion-reduce'],
    },
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
