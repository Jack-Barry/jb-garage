import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Float', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { float: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  describe('when provided value is not breakpoint specific', () => {
    test('sets float class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { float: 'end' } })).toStrictEqual({
        classes: { 'float-end': true },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is breakpoint specific', () => {
    test('sets float classes as expected', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: { float: 'start' },
          sm: { float: 'end' },
          md: { float: 'none' },
          lg: { float: 'start' },
          xl: { float: 'end' },
          xxl: { float: 'none' }
        })
      ).toStrictEqual({
        classes: {
          'float-start': true,
          'float-sm-end': true,
          'float-md-none': true,
          'float-lg-start': true,
          'float-xl-end': true,
          'float-xxl-none': true
        },
        inlineStyles: {}
      })
    })
  })
})
