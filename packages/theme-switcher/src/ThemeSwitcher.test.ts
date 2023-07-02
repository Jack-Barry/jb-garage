import { EventEmitter } from 'node:events'

import { ThemeSwitcher } from './ThemeSwitcher'
import { DEFAULT_THEME_KEY, setStoredTheme } from './storage'

describe('ThemeSwitcher', () => {
  let prefersDark: boolean | undefined
  let ts: ThemeSwitcher
  const matchMediaEventEmitter = new EventEmitter()
  const matchMediaInitializer = jest.fn()

  beforeEach(() => {
    prefersDark = undefined
    matchMediaInitializer.mockImplementation(() => ({
      matches: prefersDark,
      addEventListener(eventType: string, callback: (...args: unknown[]) => void) {
        matchMediaEventEmitter.addListener(eventType, callback)
      }
    }))

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaInitializer
    })
    delete document.body.dataset[DEFAULT_THEME_KEY]
    localStorage.removeItem(DEFAULT_THEME_KEY)
    ts = new ThemeSwitcher()
  })

  afterEach(() => {
    matchMediaEventEmitter.removeAllListeners()
  })

  test('listens for prefers color scheme change events', () => {
    expect(matchMediaInitializer).toHaveBeenCalledWith('(prefers-color-scheme: dark)')
    expect(ts.getCurrentTheme()).toBe('light')

    matchMediaEventEmitter.emit('change')
    expect(ts.getCurrentTheme()).toBe('light')

    prefersDark = true
    matchMediaEventEmitter.emit('change')
    expect(ts.getCurrentTheme()).toBe('dark')

    prefersDark = false
    matchMediaEventEmitter.emit('change')
    expect(ts.getCurrentTheme()).toBe('light')

    setStoredTheme('custom')
    matchMediaEventEmitter.emit('change')
    expect(ts.getCurrentTheme()).toBe('custom')

    prefersDark = true
    matchMediaEventEmitter.emit('change')
    expect(ts.getCurrentTheme()).toBe('custom')

    setStoredTheme(null)
    matchMediaEventEmitter.emit('change')
    expect(ts.getCurrentTheme()).toBe('dark')
  })

  describe('when default themeKey is used', () => {
    describe('getCurrentTheme()', () => {
      test("returns the current value of document body's data-theme attribute", () => {
        expect(ts.getCurrentTheme()).toBe('light')

        document.body.dataset[DEFAULT_THEME_KEY] = 'theme1'
        expect(ts.getCurrentTheme()).toBe('theme1')

        document.body.dataset[DEFAULT_THEME_KEY] = 'theme2'
        expect(ts.getCurrentTheme()).toBe('theme2')
      })
    })

    describe('setTheme()', () => {
      test('sets data-theme on the document body', () => {
        expect(document.body.dataset[DEFAULT_THEME_KEY]).toBe('light')
        ts.setTheme('new-theme')
        expect(document.body.dataset[DEFAULT_THEME_KEY]).toBe('new-theme')
      })

      test("sets localStorage's theme to the new theme by default", () => {
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBeNull()
        ts.setTheme('new-theme')
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBe('new-theme')
      })

      test("does not set localStorage's theme to the new theme if specified", () => {
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBeNull()
        ts.setTheme('new-theme', false)
        expect(localStorage.getItem(DEFAULT_THEME_KEY)).toBeNull()
      })

      test('emits a ThemeChangeEvent', () => {
        const listener = jest.fn()
        document.addEventListener(ThemeSwitcher.ThemeChangeEventType, listener)
        expect(listener).not.toHaveBeenCalled()
        ts.setTheme('new-theme')
        expect(listener).toHaveBeenCalledTimes(1)
        expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: 'new-theme' }))
      })
    })
  })

  describe('when custom themeKey is used', () => {
    const customThemeKey = 'customKey'

    beforeEach(() => {
      delete document.body.dataset[customThemeKey]
      localStorage.removeItem(customThemeKey)
      ts = new ThemeSwitcher(customThemeKey)
    })

    describe('getCurrentTheme()', () => {
      test("returns the current value of document body's data-<THEME_KEY> attribute", () => {
        expect(ts.getCurrentTheme()).toBe('light')

        document.body.dataset[customThemeKey] = 'theme1'
        expect(ts.getCurrentTheme()).toBe('theme1')

        document.body.dataset[customThemeKey] = 'theme2'
        expect(ts.getCurrentTheme()).toBe('theme2')
      })
    })

    describe('setTheme()', () => {
      test('sets data-<THEME_KEY> on the document body', () => {
        expect(document.body.dataset[customThemeKey]).toBe('light')
        ts.setTheme('new-theme')
        expect(document.body.dataset[customThemeKey]).toBe('new-theme')
      })

      test("sets localStorage's <THEME_KEY> to the new theme by default", () => {
        expect(localStorage.getItem(customThemeKey)).toBeNull()
        ts.setTheme('new-theme')
        expect(localStorage.getItem(customThemeKey)).toBe('new-theme')
      })

      test("does not set localStorage's <THEME_KEY> to the new theme if specified", () => {
        expect(localStorage.getItem(customThemeKey)).toBeNull()
        ts.setTheme('new-theme', false)
        expect(localStorage.getItem(customThemeKey)).toBeNull()
      })

      test('emits a ThemeChangeEvent', () => {
        const listener = jest.fn()
        document.addEventListener(ThemeSwitcher.ThemeChangeEventType, listener)
        expect(listener).not.toHaveBeenCalled()
        ts.setTheme('new-theme')
        expect(listener).toHaveBeenCalledTimes(1)
        expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: 'new-theme' }))
      })
    })
  })
})
