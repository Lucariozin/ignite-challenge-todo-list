type Sizes = 'lg' | 'md' | 'sm'

// eslint-disable-next-line
const sizesObj: { [K in Sizes]: number } = {
  lg: 1200,
  md: 900,
  sm: 600,
}

export const theme = {
  palette: {
    white: '#FFFFFF',
    gray: {
      100: '#F2F2F2',
      200: '#D9D9D9',
      300: '#808080',
      400: '#333333',
      500: '#262626',
      600: '#1A1A1A',
      700: '#0D0D0D',
    },
    purple: {
      400: '#8284FA',
      500: '#5E60CE',
    },
    blue: {
      400: '#4EA8DE',
      500: '#1E6F9F',
    },
    red: {
      100: '',
    },
  },
  breakpoints: {
    sizes: sizesObj,
    down: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (max-width: ${sizeNumber}px)`
    },
    up: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (min-width: ${sizeNumber}px)`
    },
  },
} as const

export type CustomTheme = typeof theme
