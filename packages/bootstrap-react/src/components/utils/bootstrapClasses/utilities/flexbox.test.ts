import { brUtilsFlexStyles } from './flexbox'

describe('Bootstrap Classes: Utilities: Flexbox', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsFlexStyles()).toStrictEqual({})
    })
  })

  describe('when provided value is not breakpoint specific', () => {
    test('sets flexbox classes as expected', () => {
      expect(
        brUtilsFlexStyles({
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
        }
      })
    })
  })

  describe('when provided value is a breakpoint specific config object', () => {
    test('sets classes as expected', () => {
      expect(
        brUtilsFlexStyles({
          brAllBreakpoints: {
            row: true,
            column: true,
            justifyContent: 'start',
            alignItems: 'baseline'
          },
          sm: {
            alignContent: 'around',
            alignSelf: 'center'
          },
          md: {
            fill: true,
            grow: false
          },
          lg: {
            shrink: false,
            wrap: 'nowrap'
          },
          xl: {
            order: 'first'
          },
          xxl: {
            order: 'last'
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
        }
      })
    })
  })
})
