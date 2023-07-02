import { setThemeOnLoad } from './setThemeOnLoad'
import * as storage from './storage'

describe('setThemeOnLoad', () => {
  let mockGetPreferredTheme: jest.SpyInstance

  beforeEach(() => {
    mockGetPreferredTheme = jest.spyOn(storage, 'getPreferredTheme')
    mockGetPreferredTheme.mockReturnValue('foo')
  })

  describe('when default themeKey is used', () => {
    test('sets data-theme on document', () => {
      expect(document.body.dataset[storage.DEFAULT_THEME_KEY]).toBeUndefined()
      setThemeOnLoad()
      expect(document.body.dataset[storage.DEFAULT_THEME_KEY]).toBe('foo')
    })
  })

  describe('when default themeKey is used', () => {
    test('sets data-<CUSTOM_THEME_KEY> on document', () => {
      const customThemeKey = 'customThemeKey'
      expect(document.body.dataset[customThemeKey]).toBeUndefined()
      setThemeOnLoad(customThemeKey)
      expect(document.body.dataset[customThemeKey]).toBe('foo')
    })
  })
})
