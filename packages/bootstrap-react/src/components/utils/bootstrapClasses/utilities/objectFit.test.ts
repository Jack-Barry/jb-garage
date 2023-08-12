import { brUtilsObjectFitStyles } from './objectFit'

describe('Bootstrap Classes: Utilities: Link', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsObjectFitStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is a string', () => {
    test('sets object fit class', () => {
      expect(brUtilsObjectFitStyles('contain')).toStrictEqual({
        classes: { 'object-fit-contain': true }
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('handles all breakpoints value', () => {
      expect(brUtilsObjectFitStyles({ brAllBreakpoints: 'contain' })).toStrictEqual({
        classes: { 'object-fit-contain': true }
      })
    })

    test('handles responsive values', () => {
      expect(brUtilsObjectFitStyles({ sm: 'contain' })).toStrictEqual({
        classes: { 'object-fit-sm-contain': true }
      })
    })
  })
})
