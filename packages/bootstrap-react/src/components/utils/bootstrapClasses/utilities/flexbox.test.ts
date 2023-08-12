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
          order: 'first',
          gap: '0',
          gapRow: '1',
          gapColumn: '2'
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
          'order-first': true,
          'gap-0': true,
          'row-gap-1': true,
          'column-gap-2': true
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
            order: 'first',
            gap: '0'
          },
          xxl: {
            gapRow: '1',
            gapColumn: '2'
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
          'gap-xl-0': true,
          'row-gap-xxl-1': true,
          'column-gap-xxl-2': true
        }
      })
    })
  })
})
