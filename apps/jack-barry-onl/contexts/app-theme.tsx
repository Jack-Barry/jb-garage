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
import { localStorage } from '../utils/window'

export const LOCAL_STORAGE_SELECTED_THEME_KEY = 'selected_theme'

const AppThemeContext = createContext({
  mode: undefined, // 'light' as PaletteMode,
  toggleDarkMode: () => {
    // placeholder function
  }
})

export const useAppTheme = () => useContext(AppThemeContext)

export default function AppThemeProvider({ initialMode, children }) {
  const ls = localStorage()
  const [mode, setMode] = useState<PaletteMode>(initialMode)
  const toggleDarkMode = useCallback(() => {
    setMode((prevMode) => {
      const selectedMode = getColorMode(!isDarkMode(prevMode))
      ls.setItem(LOCAL_STORAGE_SELECTED_THEME_KEY, selectedMode)
      return selectedMode
    })
  }, [setMode, ls])

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
