import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Position', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { position: undefined } })).toStrictEqual(
        emptyStyles()
      )
    })
  })

  describe('when provided value is a string', () => {
    test('sets overflow class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { position: 'static' } })).toStrictEqual({
        classes: { 'position-static': true },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('applies expected position classes', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: {
            position: {
              position: 'absolute',
              top: '50',
              bottom: '100',
              end: '50',
              start: '0',
              translateMiddle: true,
              translateMiddleX: true,
              translateMiddleY: true
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'position-absolute': true,
          'top-50': true,
          'bottom-100': true,
          'end-50': true,
          'start-0': true,
          'translate-middle': true,
          'translate-middle-x': true,
          'translate-middle-y': true
        },
        inlineStyles: {}
      })
    })
  })
})
