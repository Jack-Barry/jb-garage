import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, PaletteMode } from '@mui/material'
import { themeOptions } from '../config/mui/theme'
import { createContext, useContext, useMemo, useState } from 'react'
import { getColorMode, isDarkMode } from '../utils/theme'

const AppThemeContext = createContext({
  mode: 'light' as PaletteMode,
  toggleDarkMode: () => {
    // placeholder function
  }
})

export const useAppTheme = () => useContext(AppThemeContext)

export default function AppThemeProvider({ children }) {
  const [mode, setMode] = useState<PaletteMode>('light')
  const darkMode = useMemo(
    () => ({
      toggle: () => {
        setMode((prevMode) => getColorMode(!isDarkMode(prevMode)))
      }
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])

  const context = { toggleDarkMode: darkMode.toggle, mode }

  return (
    <AppThemeContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
