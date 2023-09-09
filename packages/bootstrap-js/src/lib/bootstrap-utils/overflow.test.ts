import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Overflow', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { overflow: undefined } })).toStrictEqual(
        emptyStyles()
      )
    })
  })

  describe('when provided value is a string', () => {
    test('sets overflow class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { overflow: 'scroll' } })).toStrictEqual({
        classes: { 'overflow-scroll': true },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('handles axis values', () => {
      expect(
        bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { overflow: { x: 'auto', y: 'scroll' } } })
      ).toStrictEqual({
        classes: { 'overflow-x-auto': true, 'overflow-y-scroll': true },
        inlineStyles: {}
      })
    })
  })
})
