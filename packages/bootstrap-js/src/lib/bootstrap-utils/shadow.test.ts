import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Shadow', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { shadow: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  describe('when provided value is true boolean', () => {
    test('sets shadow class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { shadow: true } })).toStrictEqual({
        classes: { shadow: true },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is a string', () => {
    test('sets sized shadow class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { shadow: 'lg' } })).toStrictEqual({
        classes: { 'shadow-lg': true },
        inlineStyles: {}
      })
    })
  })
})
