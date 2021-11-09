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
      colors: {
        highlight: '#3da9fc',
        reddish: '#ef4565',
        background: {
          light: '#f5f5f7',
          dark: '#232946',
        },
        tertiary: {
          light: '#ef4565',
          dark: '#eebbc3',
        },
        code: {
          light: '#00939b',
          dark: '#f9f871',
        },
        headline: {
          light: '#094067',
          dark: '#fffffe',
        },
        cardBg: {
          light: '#fffffe',
          dark: '#2d3560',
        },
        link: {
          light: '#3da9fc',
          dark: '#eebbc3',
        },
        navBg: {
          light: '#f5f5f796',
          dark: '#23294696',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
