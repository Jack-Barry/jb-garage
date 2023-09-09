import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Sizing', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { sizing: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  describe('when provided value is config object', () => {
    test('sets size classes', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: {
            sizing: {
              width: 'auto',
              maxWidth: '100',
              viewportWidth: '99',
              minViewportWidth: '98',
              height: '75',
              maxHeight: '74',
              viewportHeight: '73',
              minViewportHeight: '72'
            }
          }
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
        },
        inlineStyles: {}
      })
    })
  })
})
