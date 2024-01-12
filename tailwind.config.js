import typographyPlugin from '@tailwindcss/typography'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Inter', ...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  theme: {
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem'}],
      sm: ['0.875rem', {lineHeight: '1.5rem'}],
      base: ['1rem', {lineHeight: '2rem'}],
      lg: ['1.125rem', {lineHeight: '1.75rem'}],
      xl: ['1.25rem', {lineHeight: '2rem'}],
      '2xl': ['1.5rem', {lineHeight: '2.5rem'}],
      '3xl': ['2rem', {lineHeight: '2.5rem'}],
      '4xl': ['2.5rem', {lineHeight: '3rem'}],
      '5xl': ['3rem', {lineHeight: '3.5rem'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
      '7xl': ['4.5rem', {lineHeight: '1'}],
      '8xl': ['6rem', {lineHeight: '1'}],
      '9xl': ['8rem', {lineHeight: '1'}],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Docs colors
      'dark-bg': '#14171F',
      'light-bg': '#F9FAFB',
      link: {
        light: '#3098aa',
        DEFAULT: '#62BECC',
      },
      'link-underline': '#2a7c90',
      'link-underline-light': '#00CBEC',
      violet: {
        100: '#EEDFFF',
        200: '#E8D1FF',
        300: '#CE9CFF',
        400: '#A112FF',
        500: '#820DDE',
        600: '#6112A3',
        700: '#270741',
        750: '#1e0632',
        800: '#160425',
      },
      // Brand Colors
      black: '#0F111A',
      white: colors.white,
      'dark-bg-1': '#181B26',
      'dark-bg-2': '#1D212F',
      'dark-bg-3': '#343A4D',
      'light-bg-1': '#FFF',
      'light-bg-2': '#E6EBF2',
      'light-bg-3': '#DBE2F0',
      'dark-border': '#262B38',
      'dark-border-2': '#343A4C',
      'light-border': '#E6EBF2',
      'light-border-2': '#DBE2F0',
      'dark-text-muted': '#A6B6D9',
      'light-text-muted': '#5E6E8C',
      sggray: {
        100: '#F5F7FB',
        200: '#DBE2F0',
        300: '#A6B6D9',
        500: '#343A4D',
      },
      sgviolet: {
        300: '#CE9CFF',
        400: '#6112A3',
        500: '#A112FF',
        600: '#6112A3',
        700: '#270741',
        800: '#1E0632',
      },
      blurple: '#DBDBFF',
      // Tailwind colors
      gray: colors.gray,
      amber: colors.amber,
      red: colors.red,
      sky: colors.sky,
      cyan: colors.cyan,
      blue: colors.blue,
      purple: colors.purple,
      indigo: colors.indigo,
      slate: colors.slate,
      yellow: colors.yellow,
      // Shades of Purple code theme,
      sop: {
        100: '#A599E9',
        500: '#4D21FC',
        700: '#2D2B55',
        800: '#1E1E3F',
      },
    },
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'var(--font-inter)'],
        display: ['var(--font-lexend)', {fontFeatureSettings: '"ss01"'}],
        mono: [
          'SFMono-Regular',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [typographyPlugin],
}
