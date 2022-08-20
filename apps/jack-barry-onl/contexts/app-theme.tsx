import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@mui/material'
import { themeOptions } from '../config/mui/theme'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
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
  const toggleDarkMode = useCallback(() => {
    setMode((prevMode) => getColorMode(!isDarkMode(prevMode)))
  }, [setMode])

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(themeOptions(mode))),
    [mode]
  )

  const context = { toggleDarkMode, mode }

  return (
    <AppThemeContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
