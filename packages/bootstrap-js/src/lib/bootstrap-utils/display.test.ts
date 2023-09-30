import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Display', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { display: undefined } })).toStrictEqual(
        emptyStyles()
      )
    })
  })

  describe('when values are provided', () => {
    test('sets breakpoint classes', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: { display: 'block' },
          sm: { display: 'flex' },
          md: { display: 'grid' },
          lg: { display: 'inline' },
          xl: { display: 'inline-block' },
          xxl: { display: 'inline-flex' }
        })
      ).toStrictEqual({
        classes: {
          'd-block': true,
          'd-sm-flex': true,
          'd-md-grid': true,
          'd-lg-inline': true,
          'd-xl-inline-block': true,
          'd-xxl-inline-flex': true
        },
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })
})
