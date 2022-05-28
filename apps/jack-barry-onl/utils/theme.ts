import { PaletteMode } from '@mui/material'

export const isDarkMode = (mode: PaletteMode): boolean => mode === 'dark'
export const getColorMode = (darkMode: boolean): PaletteMode =>
  darkMode ? 'dark' : 'light'
