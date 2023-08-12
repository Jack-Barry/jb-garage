import { brUtilsDisplayStyles } from './display'

describe('Bootstrap Classes: Utilities: Display', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsDisplayStyles()).toStrictEqual({})
    })
  })

  describe('when value provided is a string', () => {
    test('sets display class', () => {
      expect(brUtilsDisplayStyles('stuff')).toStrictEqual({
        classes: { 'd-stuff': true }
      })
    })
  })

  describe('when value provided is a config object', () => {
    test('sets breakpoint classes', () => {
      expect(
        brUtilsDisplayStyles({
          brAllBreakpoints: 'block',
          sm: 'flex',
          md: 'grid',
          lg: 'inline',
          xl: 'inline-block',
          xxl: 'inline-flex'
        })
      ).toStrictEqual({
        classes: {
          'd-block': true,
          'd-sm-flex': true,
          'd-md-grid': true,
          'd-lg-inline': true,
          'd-xl-inline-block': true,
          'd-xxl-inline-flex': true
        }
      })
    })
  })
})
