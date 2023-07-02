import { useContext } from 'react'
import { ThemeSwitcherContext } from './ThemeSwitcherContext'

/** Hook for interacting with `ThemeSwitcherContext` state */
export function useThemeSwitcher() {
  const { setTheme, currentTheme } = useContext(ThemeSwitcherContext)

  return { setTheme, currentTheme }
}
