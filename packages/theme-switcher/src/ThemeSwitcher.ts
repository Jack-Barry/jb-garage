import { DEFAULT_THEME_KEY, getPreferredTheme, setStoredTheme } from './storage'

/** Framework agnostic theme switcher context */
export class ThemeSwitcher {
  static ThemeChangeEventType = 'theme-change'

  constructor(private _themeKey = DEFAULT_THEME_KEY) {
    // bail if SSR
    if (windowIsUndefined()) {
      return
    }

    // get theme on initialization
    this.getTheme()

    // automatically switch theme along with user platform theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.getTheme)
  }

  /** Gets theme currently set on `document.body.dataset[this._themeKey]` */
  getCurrentTheme = () => {
    if (documentIsUndefined()) {
      return null
    }

    return document.body.dataset[this._themeKey] ?? null
  }

  /**
   * Sets theme
   *
   * For callbacks, add an event listener to `document` for
   *   `ThemeSwitcher.ThemeChangeEventType` events
   */
  setTheme = (theme: string | null, storePreference = true) => {
    if (documentIsUndefined()) {
      return
    }

    if (theme) {
      document.body.dataset[this._themeKey] = theme
    } else {
      delete document.body.dataset[this._themeKey]
    }

    if (storePreference) {
      setStoredTheme(theme, this._themeKey)
    }
    ThemeSwitcher.dispatchThemeChangeEvent(theme)
  }

  /**
   * Gets and sets theme from storage or based on current `window.matchMedia`
   *   value
   */
  private getTheme = () => {
    const theme = getPreferredTheme(this._themeKey)
    this.setTheme(theme, false)
  }

  /** Dispatches a theme change event from the `document` */
  private static dispatchThemeChangeEvent = (theme: string | null) => {
    document.dispatchEvent(new CustomEvent(ThemeSwitcher.ThemeChangeEventType, { detail: theme }))
  }
}
/** Determines if window is defined, used to prevent errors in SSR */
function windowIsUndefined() {
  return typeof window === 'undefined'
}

/** Determines if document is defined, used to prevent errors in SSR */
function documentIsUndefined() {
  return typeof document === 'undefined'
}
