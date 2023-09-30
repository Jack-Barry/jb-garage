import { EventEmitter } from 'node:events'

import { act, renderHook } from '@testing-library/react'
import { DEFAULT_THEME_KEY } from 'packages/theme-switcher/src/storage'

import { ThemeSwitcherContextProvider } from './ThemeSwitcherContext'
import { useThemeSwitcher } from './useThemeSwitcher'

describe('useThemeSwitcher()', () => {
  const matchMediaEventEmitter = new EventEmitter()
  const matchMediaInitializer = jest.fn()
  let prefersDark: boolean | undefined

  beforeEach(() => {
    prefersDark = undefined
    localStorage.removeItem(DEFAULT_THEME_KEY)
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
  })

  function renderThemeSwitcherHook(themeKey?: string) {
    return renderHook(() => useThemeSwitcher(), {
      wrapper: ({ children }) => (
        <ThemeSwitcherContextProvider themeKey={themeKey}>{children}</ThemeSwitcherContextProvider>
      )
    })
  }

  describe('when default theme key is used', () => {
    test('currentTheme returns the ThemeSwitcher current theme', () => {
      const { result: result1 } = renderThemeSwitcherHook()
      expect(result1.current.currentTheme).toBe('light')

      prefersDark = true
      const { result: result2 } = renderThemeSwitcherHook()
      expect(result2.current.currentTheme).toBe('dark')

      localStorage.setItem(DEFAULT_THEME_KEY, 'custom-theme')
      const { result: result3 } = renderThemeSwitcherHook()
      expect(result3.current.currentTheme).toBe('custom-theme')
    })

    test('setTheme updates the ThemeSwitcher current theme', () => {
      const { result } = renderThemeSwitcherHook()
      act(() => {
        result.current.setTheme('new-theme')
      })
      expect(result.current.currentTheme).toBe('new-theme')
      expect(document.body.dataset[DEFAULT_THEME_KEY]).toBe('new-theme')
    })
  })

  describe('when custom key is used', () => {
    const customKey = 'customKey'

    beforeEach(() => {
      localStorage.removeItem(customKey)
    })

    test('currentTheme returns the ThemeSwitcher current theme', () => {
      const { result: result1 } = renderThemeSwitcherHook(customKey)
      expect(result1.current.currentTheme).toBe('light')

      prefersDark = true
      const { result: result2 } = renderThemeSwitcherHook(customKey)
      expect(result2.current.currentTheme).toBe('dark')

      localStorage.setItem(customKey, 'custom-theme')
      const { result: result3 } = renderThemeSwitcherHook(customKey)
      expect(result3.current.currentTheme).toBe('custom-theme')
    })

    test('setTheme updates the ThemeSwitcher current theme', () => {
      const { result } = renderThemeSwitcherHook(customKey)
      act(() => {
        result.current.setTheme('new-theme')
      })
      expect(result.current.currentTheme).toBe('new-theme')
      expect(document.body.dataset[customKey]).toBe('new-theme')
    })
  })
})
