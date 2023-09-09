import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

describe('Bootstrap Utilities: Text', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { text: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  describe('when provided config is not breakpoint specific', () => {
    test('sets applicable text classes', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: {
            text: {
              align: 'center',
              break: true,
              decoration: 'line-through',
              lineHeight: '1',
              monospace: true,
              resetColor: true,
              size: '2',
              style: 'italic',
              transform: 'capitalize',
              weight: 'bold',
              wrap: true
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'text-center': true,
          'text-break': true,
          'text-decoration-line-through': true,
          'lh-1': true,
          'font-monospace': true,
          'text-reset': true,
          'fs-2': true,
          'fst-italic': true,
          'text-capitalize': true,
          'fw-bold': true,
          'text-wrap': true
        },
        inlineStyles: {}
      })
    })
  })

  describe('when provided config is breakpoint specific', () => {
    test('sets applicable text classes', () => {
      expect(bs.bsJs({ sm: { text: { align: 'end' } } })).toStrictEqual({
        classes: { 'text-sm-end': true },
        inlineStyles: {}
      })
    })
  })
})
