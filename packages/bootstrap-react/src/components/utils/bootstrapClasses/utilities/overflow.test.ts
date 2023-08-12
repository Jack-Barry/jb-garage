import { brUtilsOverflowStyles } from './overflow'

describe('Bootstrap Classes: Utilities: Link', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsOverflowStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is a string', () => {
    test('sets overflow class', () => {
      expect(brUtilsOverflowStyles('scroll')).toStrictEqual({
        classes: { 'overflow-scroll': true }
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('handles axis values', () => {
      expect(brUtilsOverflowStyles({ x: 'auto', y: 'scroll' })).toStrictEqual({
        classes: { 'overflow-x-auto': true, 'overflow-y-scroll': true }
      })
    })
  })
})
