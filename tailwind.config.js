module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '414px',
      },
      fontFamily: {
        sansita: "'Sansita'",
        rubik: "'Rubik'",
        racing: "'Racing'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
