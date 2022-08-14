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
  }
}

const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  background: {
    paper: '#00070f',
    default: '#00050a'
    // paper: '#00050a',
    // default: '#00070f'
  },
  primary: {
    main: '#3a93ff'
  }
}

export const themeOptions = (mode: PaletteMode): ThemeOptions => ({
  palette: isDarkMode(mode) ? darkPalette : lightPalette,
  typography: {
    fontFamily: baseFontFamily,
    h1: { fontFamily: headerFontFamily },
    h2: { fontFamily: headerFontFamily },
    h3: { fontFamily: headerFontFamily },
    h4: { fontFamily: headerFontFamily },
    h5: { fontFamily: headerFontFamily },
    h6: { fontFamily: headerFontFamily }
  }
})
