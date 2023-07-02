import { ThemeSwitcher } from '@jb-garage/theme-switcher'
import { noOp } from '@jb-garage/utils-generic'
import { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react'

export const ThemeSwitcherContext = createContext<{
  setTheme: (theme: string | null) => void
  currentTheme: string | null
}>({
  setTheme: noOp,
  currentTheme: null
})

export function ThemeSwitcherContextProvider(props: PropsWithChildren<{ themeKey?: string }>) {
  const { themeKey, children } = props
  const themeSwitcher = useMemo(() => new ThemeSwitcher(themeKey), [])
  const [currentTheme, setCurrentTheme] = useState<string | null>(themeSwitcher.getCurrentTheme())

  useEffect(() => {
    function handleThemeChange(themeEvent: Event) {
      setCurrentTheme((themeEvent as unknown as { detail: string | null }).detail)
    }

    document.addEventListener(ThemeSwitcher.ThemeChangeEventType, handleThemeChange)

    return function () {
      document.removeEventListener(ThemeSwitcher.ThemeChangeEventType, handleThemeChange)
    }
  }, [])

  return (
    <ThemeSwitcherContext.Provider value={{ setTheme: themeSwitcher.setTheme, currentTheme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  )
}
