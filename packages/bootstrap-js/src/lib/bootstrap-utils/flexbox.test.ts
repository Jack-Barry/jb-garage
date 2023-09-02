import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'

describe('Bootstrap Utilities: Flexbox', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { flex: undefined } })).toStrictEqual({
        classes: {},
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is not breakpoint specific', () => {
    test('sets flexbox classes as expected', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: {
            flex: {
              row: true,
              column: true,
              justifyContent: 'start',
              alignItems: 'baseline',
              alignContent: 'around',
              alignSelf: 'center',
              fill: true,
              grow: false,
              shrink: false,
              wrap: 'nowrap',
              order: 'first'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'flex-row': true,
          'flex-column': true,
          'justify-content-start': true,
          'align-items-baseline': true,
          'align-content-around': true,
          'align-self-center': true,
          'flex-fill': true,
          'flex-grow-0': true,
          'flex-shrink-0': true,
          'flex-nowrap': true,
          'order-first': true
        },
        inlineStyles: {}
      })
    })
  })

  describe('when provided value is a breakpoint specific config object', () => {
    test('sets classes as expected', () => {
      expect(
        bs.bsJs({
          [ALL_BREAKPOINTS_KEY]: {
            flex: {
              row: true,
              column: true,
              justifyContent: 'start',
              alignItems: 'baseline'
            }
          },
          sm: {
            flex: {
              alignContent: 'around',
              alignSelf: 'center'
            }
          },
          md: {
            flex: {
              fill: true,
              grow: false
            }
          },
          lg: {
            flex: {
              shrink: false,
              wrap: 'nowrap'
            }
          },
          xl: {
            flex: {
              order: 'first'
            }
          },
          xxl: {
            flex: {
              order: 'last'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'flex-row': true,
          'flex-column': true,
          'justify-content-start': true,
          'align-items-baseline': true,
          'align-content-sm-around': true,
          'align-self-sm-center': true,
          'flex-md-fill': true,
          'flex-md-grow-0': true,
          'flex-lg-shrink-0': true,
          'flex-lg-nowrap': true,
          'order-xl-first': true,
          'order-xxl-last': true
        },
        inlineStyles: {}
      })
    })
  })
})
