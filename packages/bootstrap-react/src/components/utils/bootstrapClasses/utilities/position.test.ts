import { brUtilsPositionStyles } from './position'

describe('Bootstrap Classes: Utilities: Position', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsPositionStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is a string', () => {
    test('sets overflow class', () => {
      expect(brUtilsPositionStyles('static')).toStrictEqual({
        classes: { 'position-static': true }
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('applies expected position classes', () => {
      expect(
        brUtilsPositionStyles({
          position: 'absolute',
          top: '50',
          bottom: '100',
          end: '50',
          start: '0',
          translateMiddle: true,
          translateMiddleX: true,
          translateMiddleY: true
        })
      ).toStrictEqual({
        classes: {
          'position-absolute': true,
          'top-50': true,
          'bottom-100': true,
          'end-50': true,
          'start-0': true,
          'translate-middle': true,
          'translate-middle-x': true,
          'translate-middle-y': true
        }
      })
    })
  })
})
