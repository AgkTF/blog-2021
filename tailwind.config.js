const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
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
        paragraph: {
          light: '#5f6c7b',
          dark: '#b8c1ec',
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
      typography: theme => {
        return {
          DEFAULT: {
            css: {
              color: theme('colors.paragraph.light'),
              maxWidth: false,
              code: {
                color: theme('colors.code.light'),
              },
              a: {
                color: theme('colors.link.light'),
              },
              blockquote: {
                color: theme('colors.paragraph.light'),
              },
              strong: {
                color: theme('colors.paragraph.light'),
                fontWeight: '700',
              },
              em: {
                color: '#ef4565',
                fontWeight: '500',
              },
              h1: {
                color: theme('colors.paragraph.light'),
              },
              h2: {
                color: theme('colors.paragraph.light'),
              },
              h3: {
                color: theme('colors.paragraph.light'),
              },
              h4: {
                color: theme('colors.paragraph.light'),
              },
              img: {
                borderRadius: '4px',
              },
              'figure figcaption': {
                color: theme('colors.paragraph.light'),
                textAlign: 'center',
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.paragraph.dark'),
              maxWidth: false,
              code: {
                color: theme('colors.code.dark'),
              },
              a: {
                color: theme('colors.link.dark'),
              },
              blockquote: {
                color: theme('colors.paragraph.dark'),
              },
              strong: {
                color: theme('colors.paragraph.dark'),
                fontWeight: '700',
              },
              em: {
                color: '#ef4565',
                fontWeight: '500',
              },
              h1: {
                color: theme('colors.paragraph.dark'),
              },
              h2: {
                color: theme('colors.paragraph.dark'),
              },
              h3: {
                color: theme('colors.paragraph.dark'),
              },
              h4: {
                color: theme('colors.paragraph.dark'),
              },
              img: {
                borderRadius: '4px',
              },
              'figure figcaption': {
                color: theme('colors.paragraph.dark'),
                textAlign: 'center',
              },
            },
          },
        };
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    extend: {
      typography: ['responsive', 'dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
