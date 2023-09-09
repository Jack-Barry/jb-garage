import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Z Index', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  test('handles 0 value', () => {
    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: 0 } })).toStrictEqual({
      classes: { 'z-0': true },
      inlineStyles: {}
    })

    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: '0' } })).toStrictEqual({
      classes: { 'z-0': true },
      inlineStyles: {}
    })
  })

  test('handles positive values', () => {
    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: 1 } })).toStrictEqual({
      classes: { 'z-1': true },
      inlineStyles: {}
    })

    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: '1' } })).toStrictEqual({
      classes: { 'z-1': true },
      inlineStyles: {}
    })
  })

  test('handles negative values', () => {
    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: -1 } })).toStrictEqual({
      classes: { 'z-n1': true },
      inlineStyles: {}
    })

    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: '-1' } })).toStrictEqual({
      classes: { 'z-n1': true },
      inlineStyles: {}
    })

    expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { zIndex: 'n1' } })).toStrictEqual({
      classes: { 'z-n1': true },
      inlineStyles: {}
    })
  })
})
