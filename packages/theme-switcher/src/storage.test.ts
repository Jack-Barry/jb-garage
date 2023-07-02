import { DEFAULT_THEME_KEY, getPreferredTheme, setStoredTheme } from './storage'

describe('storage', () => {
  describe('when default themeKey is used', () => {
    beforeEach(() => {
      localStorage.removeItem(DEFAULT_THEME_KEY)
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({}))
      })
    })

    afterEach(() => {
      localStorage.removeItem(DEFAULT_THEME_KEY)
    })

    describe('getPreferredTheme()', () => {
      test('returns stored theme when it is defined', () => {
        localStorage.setItem(DEFAULT_THEME_KEY, 'foo')
        expect(getPreferredTheme()).toBe('foo')
      })

      test('returns light when user does not prefer dark color scheme', () => {
        expect(getPreferredTheme()).toBe('light')
      })

      test('returns dark when user prefers dark color scheme', () => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation((query) => {
            if (query === '(prefers-color-scheme: dark)') {
              return {
                matches: true
              }
            } else return {}
          })
        })
        expect(getPreferredTheme()).toBe('dark')
      })
    })

    describe('setStoredTheme()', () => {
      test('sets theme in local storage when it is a string', () => {
        setStoredTheme('custom')
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBe('custom')
      })

      test('clears theme in local storage when it is null', () => {
        setStoredTheme('custom')
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBeDefined()
        setStoredTheme(null)
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBeNull()
      })
    })
  })

  describe('when custom themeKey is used', () => {
    const customThemeKey = 'customKey'

    beforeEach(() => {
      localStorage.removeItem(customThemeKey)
    })

    describe('getPreferredTheme()', () => {
      test('returns stored theme when it is defined', () => {
        localStorage.setItem(customThemeKey, 'foo')
        expect(getPreferredTheme(customThemeKey)).toBe('foo')
      })

      test('returns light when user does not prefer dark color scheme', () => {
        expect(getPreferredTheme(customThemeKey)).toBe('light')
      })

      test('returns dark when user prefers dark color scheme', () => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation((query) => {
            if (query === '(prefers-color-scheme: dark)') {
              return {
                matches: true
              }
            } else return {}
          })
        })
        expect(getPreferredTheme(customThemeKey)).toBe('dark')
      })
    })

    describe('setStoredTheme()', () => {
      beforeEach(() => {
        localStorage.removeItem(customThemeKey)
      })

      test('sets theme in local storage when it is a string', () => {
        setStoredTheme('custom', customThemeKey)
        expect(localStorage.getItem(customThemeKey)).toBe('custom')
      })

      test('clears theme in local storage when it is null', () => {
        setStoredTheme('custom', customThemeKey)
        expect(localStorage.getItem(customThemeKey)).toBeDefined()
        setStoredTheme(null, customThemeKey)
        expect(localStorage.getItem(customThemeKey)).toBeNull()
      })
    })
  })
})
