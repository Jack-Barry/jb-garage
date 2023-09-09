import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Visibility', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { visibility: undefined } })).toStrictEqual(
        emptyStyles()
      )
    })
  })

  test('sets applicable class', () => {
    expect(
      bs.bsJs({
        [ALL_BREAKPOINTS_KEY]: {
          visibility: true
        }
      })
    ).toStrictEqual({
      classes: {
        visible: true
      },
      inlineStyles: {}
    })

    expect(
      bs.bsJs({
        [ALL_BREAKPOINTS_KEY]: {
          visibility: false
        }
      })
    ).toStrictEqual({
      classes: {
        invisible: true
      },
      inlineStyles: {}
    })
  })
})
