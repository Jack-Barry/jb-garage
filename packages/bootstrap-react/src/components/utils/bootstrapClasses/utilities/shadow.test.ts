import { brUtilsShadowStyles } from './shadow'

describe('Bootstrap Classes: Utilities: Shadow', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsShadowStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is true boolean', () => {
    test('sets shadow class', () => {
      expect(brUtilsShadowStyles(true)).toStrictEqual({
        classes: { shadow: true }
      })
    })
  })

  describe('when provided value is a string', () => {
    test('sets sized shadow class', () => {
      expect(brUtilsShadowStyles('lg')).toStrictEqual({
        classes: { 'shadow-lg': true }
      })
    })
  })
})
