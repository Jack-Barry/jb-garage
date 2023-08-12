import { brUtilsSizeStyles } from './size'

describe('Bootstrap Classes: Utilities: Size', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsSizeStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is config object', () => {
    test('sets size classes', () => {
      expect(
        brUtilsSizeStyles({
          width: 'auto',
          maxWidth: '100',
          viewportWidth: '99',
          minViewportWidth: '98',
          height: '75',
          maxHeight: '74',
          viewportHeight: '73',
          minViewportHeight: '72'
        })
      ).toStrictEqual({
        classes: {
          'w-auto': true,
          'mw-100': true,
          'vw-99': true,
          'min-vw-98': true,
          'h-75': true,
          'mh-74': true,
          'vh-73': true,
          'min-vh-72': true
        }
      })
    })
  })
})
