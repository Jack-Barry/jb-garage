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
  useEffect,
  useMemo,
  useState
} from 'react'
import { getColorMode, isDarkMode } from '../utils/theme'

export const LOCAL_STORAGE_SELECTED_THEME_KEY = 'selected_theme'

const AppThemeContext = createContext({
  activePalette: undefined,
  toggleDarkMode: () => {
    // placeholder function
  }
})

export const useAppTheme = () => useContext(AppThemeContext)

export default function AppThemeProvider({ children }) {
  const [activePalette, setActivePalette] = useState<PaletteMode>(
    document.body.dataset.theme as PaletteMode
  )

  useEffect(() => {
    document.body.dataset.theme = activePalette
    window.localStorage.setItem('theme', activePalette)
  }, [activePalette])

  useEffect(() => {
    document.body.dataset.theme = activePalette
  }, [activePalette])

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(themeOptions(activePalette))),
    [activePalette]
  )

  const toggleDarkMode = useCallback(() => {
    setActivePalette((prev) => {
      const selectedMode = getColorMode(!isDarkMode(prev))
      window.localStorage.setItem(
        LOCAL_STORAGE_SELECTED_THEME_KEY,
        selectedMode
      )
      return selectedMode
    })
  }, [])

  const context = { activePalette, toggleDarkMode }

  return (
    <AppThemeContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
