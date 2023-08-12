import { brUtilsLinkStyles } from './link'

describe('Bootstrap Classes: Utilities: Link', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsLinkStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is a string', () => {
    test('returns link color style class', () => {
      expect(brUtilsLinkStyles('primary')).toStrictEqual({ classes: { 'link-primary': true } })
    })
  })

  describe('when provided value is an options object', () => {
    test('handles color', () => {
      expect(brUtilsLinkStyles({ color: 'primary' })).toStrictEqual({
        classes: { 'link-primary': true }
      })
    })

    test('handles opacity', () => {
      expect(brUtilsLinkStyles({ opacity: '10' })).toStrictEqual({
        classes: { 'link-opacity-10': true }
      })
    })

    test('handles underline color', () => {
      expect(brUtilsLinkStyles({ underlineColor: 'primary' })).toStrictEqual({
        classes: { 'link-underline-primary': true }
      })
    })

    test('handles underline offset', () => {
      expect(brUtilsLinkStyles({ underlineOffset: '1' })).toStrictEqual({
        classes: { 'link-offset-1': true }
      })
    })

    test('handles underline opacity', () => {
      expect(brUtilsLinkStyles({ underlineOpacity: '10' })).toStrictEqual({
        classes: { 'link-underline-opacity-10': true }
      })
    })

    test('handles hover opacity', () => {
      expect(brUtilsLinkStyles({ hoverOpacity: '10' })).toStrictEqual({
        classes: { 'link-opacity-10-hover': true }
      })
    })

    test('handles hover underline offset', () => {
      expect(brUtilsLinkStyles({ hoverUnderlineOffset: '1' })).toStrictEqual({
        classes: { 'link-offset-1-hover': true }
      })
    })

    test('handles hover underline opacity', () => {
      expect(brUtilsLinkStyles({ hoverUnderlineOpacity: '10' })).toStrictEqual({
        classes: { 'link-underline-opacity-10-hover': true }
      })
    })
  })
})
