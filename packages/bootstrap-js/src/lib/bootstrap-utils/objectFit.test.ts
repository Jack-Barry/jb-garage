import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Object Fit', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { objectFit: undefined } })).toStrictEqual(
        emptyStyles()
      )
    })
  })

  describe('when provided value is not breakpoint specific', () => {
    test('sets object fit class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { objectFit: 'contain' } })).toStrictEqual({
        classes: { 'object-fit-contain': true },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is breakpoint specific', () => {
    test('handles responsive values', () => {
      expect(bs.bsJs({ sm: { objectFit: 'contain' } })).toStrictEqual({
        classes: { 'object-fit-sm-contain': true },
        inlineStyles: {}
      })
    })
  })
})
