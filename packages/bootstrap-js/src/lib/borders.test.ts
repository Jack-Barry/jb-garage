import { BootstrapJs } from './BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from './constants'
import { emptyStyles } from './utils/emptyStyles'

describe('Bootstrap Classes: Utilities: Borders', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: undefined } })).toStrictEqual(emptyStyles())
    })
  })

  describe('when value provided is a boolean', () => {
    test('sets border class when value is true', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: true } })).toStrictEqual({
        classes: { border: true },
        inlineStyles: {}
      })
    })

    test('sets border-0 class when value is false', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: false } })).toStrictEqual({
        classes: { border: true, 'border-0': true },
        inlineStyles: {}
      })
    })
  })

  describe('when value provided is a config object', () => {
    describe('when width is a number', () => {
      test('sets border width', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { width: '0' } } })).toStrictEqual({
          classes: { border: true, 'border-0': true },
          inlineStyles: {}
        })
      })
    })

    describe('when width is a string', () => {
      test('sets border width', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { width: '1' } } })).toStrictEqual({
          classes: { border: true, 'border-1': true },
          inlineStyles: {}
        })
      })
    })

    describe('when rounded is a boolean', () => {
      test('does not set roundedness if rounded is false', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { radius: false } } })).toStrictEqual({
          classes: { rounded: false },
          inlineStyles: {}
        })
      })

      test('sets roundedness if rounded is true', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { radius: true } } })).toStrictEqual({
          classes: { rounded: true },
          inlineStyles: {}
        })
      })
    })

    describe('when rounded is a string', () => {
      test('sets roundedness appropriately', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { radius: 'circle' } } })).toStrictEqual({
          classes: { 'rounded-circle': true },
          inlineStyles: {}
        })
      })
    })

    describe('when rounded is a number', () => {
      test('sets roundedness appropriately', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { radius: 0 } } })).toStrictEqual({
          classes: { 'rounded-0': true },
          inlineStyles: {}
        })
      })
    })

    describe('when opacity is a number', () => {
      describe('when opacity is less than 1', () => {
        test('provides opacity as CSS variable', () => {
          expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: 0.9 } } })).toStrictEqual({
            classes: {},
            inlineStyles: { '--bs-border-opacity': 0.9 }
          })

          expect(
            new BootstrapJs('custom').bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: 0.9 } } })
          ).toStrictEqual({
            classes: {},
            inlineStyles: { '--custom-border-opacity': 0.9 }
          })
        })
      })

      describe('when opacity is equal to 1', () => {
        test('provides opacity as class name', () => {
          expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: 1 } } })).toStrictEqual({
            classes: { 'border-opacity-100': true },
            inlineStyles: {}
          })
        })
      })

      describe('when opacity is more than 1', () => {
        test('provides opacity as class name', () => {
          expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: 100 } } })).toStrictEqual({
            classes: { 'border-opacity-100': true },
            inlineStyles: {}
          })
        })
      })
    })

    describe('when opacity is a string', () => {
      describe('when string is not a percentage', () => {
        describe('when opacity is less than 1', () => {
          test('provides opacity as CSS variable', () => {
            expect(
              bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: '0.9' } } })
            ).toStrictEqual({
              classes: {},
              inlineStyles: { '--bs-border-opacity': 0.9 }
            })

            expect(
              new BootstrapJs('custom').bsJs({
                [ALL_BREAKPOINTS_KEY]: { border: { opacity: '0.9' } }
              })
            ).toStrictEqual({
              classes: {},
              inlineStyles: { '--custom-border-opacity': 0.9 }
            })
          })
        })

        describe('when opacity is equal to 1', () => {
          test('provides opacity as class name', () => {
            expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: '1' } } })).toStrictEqual({
              classes: { 'border-opacity-100': true },
              inlineStyles: {}
            })
          })
        })

        describe('when opacity is more than 1', () => {
          test('provides opacity as class name', () => {
            expect(
              bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: '100' } } })
            ).toStrictEqual({
              classes: { 'border-opacity-100': true },
              inlineStyles: {}
            })
          })
        })
      })

      describe('when string is a percentage', () => {
        test('provides opacity as CSS variable', () => {
          expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { opacity: '90%' } } })).toStrictEqual({
            classes: {},
            inlineStyles: { '--bs-border-opacity': 0.9 }
          })

          expect(
            new BootstrapJs('custom').bsJs({
              [ALL_BREAKPOINTS_KEY]: { border: { opacity: '90%' } }
            })
          ).toStrictEqual({
            classes: {},
            inlineStyles: { '--custom-border-opacity': 0.9 }
          })
        })
      })
    })

    describe('when color is a string', () => {
      test('uses color for border', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { color: 'primary' } } })).toStrictEqual({
          classes: { border: true, 'border-primary': true },
          inlineStyles: {}
        })
      })
    })

    describe('when directional props are provided', () => {
      describe('when directional prop is a boolean', () => {
        test('applies appropriate classes when directional border is true', () => {
          expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { top: true } } })).toStrictEqual({
            classes: {
              'border-top': true,
              'border-top-0': false,
              border: false
            },
            inlineStyles: {}
          })
        })

        test('applies appropriate classes when directional border is false', () => {
          expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { top: false } } })).toStrictEqual({
            classes: {
              'border-top': false,
              'border-top-0': true,
              border: true
            },
            inlineStyles: {}
          })
        })
      })

      describe('when directional prop is config object', () => {
        test('applies intended classes for width', () => {
          expect(
            bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { border: { bottom: { width: '0' } } } })
          ).toStrictEqual({
            classes: { 'border-bottom-0': true },
            inlineStyles: {}
          })
        })
      })
    })
  })
})
