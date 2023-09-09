import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Vertical Align', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { verticalAlign: undefined } })).toStrictEqual(
        emptyStyles()
      )
    })
  })

  test('sets applicable class', () => {
    expect(
      bs.bsJs({
        [ALL_BREAKPOINTS_KEY]: {
          verticalAlign: 'baseline'
        }
      })
    ).toStrictEqual({
      classes: {
        'align-baseline': true
      },
      inlineStyles: {}
    })
  })
})
