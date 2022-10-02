import { PaletteMode, ThemeOptions } from '@mui/material'

import { isDarkMode } from '../../utils/theme'

const commonFontFamilies = ['Helvetica', 'Arial', 'sans-serif']
const baseFontFamily = ['Montserrat', ...commonFontFamilies].join(',')
const headerFontFamily = [
  '"Playfair Display"',
  'Roboto',
  ...commonFontFamilies
].join(',')

const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  background: {
    default: '#f5f9ff'
  },
  primary: {
    main: '#3a93ff'
  },
  text: {
    secondary: '#444'
  }
}

const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  background: {
    paper: '#00070f',
    default: '#00050a'
  },
  primary: {
    main: '#3a93ff'
  },
  text: {
    secondary: '#cfcfcf'
  }
}

export const themeOptions = (mode: PaletteMode): ThemeOptions => {
  const palette = isDarkMode(mode) ? darkPalette : lightPalette
  return {
    palette,
    typography: {
      fontFamily: baseFontFamily,
      h1: { fontFamily: headerFontFamily, fontSize: '4.2rem' },
      h2: {
        fontFamily: headerFontFamily,
        fontSize: '2.5rem',
        marginBottom: '1rem'
      },
      h3: {
        fontFamily: headerFontFamily,
        fontSize: '2.1rem',
        marginBottom: '1rem',
        color: palette.text.secondary
      },
      h4: { fontFamily: headerFontFamily },
      h5: { fontFamily: headerFontFamily },
      h6: { fontFamily: headerFontFamily },
      body1: {
        marginBottom: '1rem',
        lineHeight: '1.7rem'
      }
    }
  }
}
