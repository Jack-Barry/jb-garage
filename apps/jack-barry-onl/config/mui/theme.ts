import { PaletteMode, ThemeOptions } from '@mui/material'

import { isDarkMode } from '../../utils/theme'

const baseFontFamily = 'Montserrat, "Helvetica", "Arial", sans-serif'
const headerFontFamily =
  '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif'

const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#3a93ff'
  }
}

const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
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
