import { brUtilsFloatStyles } from './float'

describe('Bootstrap Classes: Utilities: Float', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsFloatStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is a string', () => {
    test('sets float class', () => {
      expect(brUtilsFloatStyles('end')).toStrictEqual({ classes: { 'float-end': true } })
    })
  })

  describe('when provided value is a config object', () => {
    test('sets classes as expected', () => {
      expect(
        brUtilsFloatStyles({
          brAllBreakpoints: 'start',
          sm: 'end',
          md: 'none',
          lg: 'start',
          xl: 'end',
          xxl: 'none'
        })
      ).toStrictEqual({
        classes: {
          'float-start': true,
          'float-sm-end': true,
          'float-md-none': true,
          'float-lg-start': true,
          'float-xl-end': true,
          'float-xxl-none': true
        }
      })
    })
  })
})
