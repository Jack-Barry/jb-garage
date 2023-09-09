import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Link', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  describe('when provided value is a string', () => {
    test('returns link color style class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: 'primary' } })).toStrictEqual({
        classes: { 'link-primary': true },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is an options object', () => {
    test('handles color', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { color: 'primary' } } })).toStrictEqual({
        classes: { 'link-primary': true },
        inlineStyles: {}
      })
    })

    test('handles opacity', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { opacity: '10' } } })).toStrictEqual({
        classes: { 'link-opacity-10': true },
        inlineStyles: {}
      })
    })

    test('handles underline color', () => {
      expect(
        bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { underlineColor: 'primary' } } })
      ).toStrictEqual({
        classes: { 'link-underline-primary': true },
        inlineStyles: {}
      })
    })

    test('handles underline offset', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { underlineOffset: '1' } } })).toStrictEqual({
        classes: { 'link-offset-1': true },
        inlineStyles: {}
      })
    })

    test('handles underline opacity', () => {
      expect(
        bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { underlineOpacity: '10' } } })
      ).toStrictEqual({
        classes: { 'link-underline-opacity-10': true },
        inlineStyles: {}
      })
    })

    test('handles hover opacity', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { hoverOpacity: '10' } } })).toStrictEqual({
        classes: { 'link-opacity-10-hover': true },
        inlineStyles: {}
      })
    })

    test('handles hover underline offset', () => {
      expect(
        bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { hoverUnderlineOffset: '1' } } })
      ).toStrictEqual({
        classes: { 'link-offset-1-hover': true },
        inlineStyles: {}
      })
    })

    test('handles hover underline opacity', () => {
      expect(
        bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { link: { hoverUnderlineOpacity: '10' } } })
      ).toStrictEqual({
        classes: { 'link-underline-opacity-10-hover': true },
        inlineStyles: {}
      })
    })
  })
})
