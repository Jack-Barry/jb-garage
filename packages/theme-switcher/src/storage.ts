export const DEFAULT_THEME_KEY = 'theme'

/**
 * Gets the current locally stored theme, or returns `dark` or `light` based on
 *   `window.matchMedia`
 */
export function getPreferredTheme(themeKey = DEFAULT_THEME_KEY) {
  const storedTheme = localStorage.getItem(themeKey)
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Sets the current locally stored theme (removes it if provided theme is falsy) */
export function setStoredTheme(theme: string | null, themeKey = DEFAULT_THEME_KEY) {
  if (theme) {
    localStorage.setItem(themeKey, theme)
  } else {
    localStorage.removeItem(themeKey)
  }
}
