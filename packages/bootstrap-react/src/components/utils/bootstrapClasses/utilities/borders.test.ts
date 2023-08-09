import { brUtilsBorderStyles } from './borders'

describe('Bootstrap Classes: Utilities: Borders', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsBorderStyles()).toStrictEqual({})
    })
  })

  describe('when value provided is a boolean', () => {
    test('sets border class when value is true', () => {
      expect(brUtilsBorderStyles(true)).toStrictEqual({ classes: { border: true } })
    })

    test('sets border-0 class when value is false', () => {
      expect(brUtilsBorderStyles(false)).toStrictEqual({
        classes: { border: true, 'border-0': true }
      })
    })
  })

  describe('when value provided is a config object', () => {
    describe('when width is a number', () => {
      test('sets border width', () => {
        expect(brUtilsBorderStyles({ width: 0 })).toStrictEqual({
          classes: { border: true, 'border-0': true }
        })
      })
    })

    describe('when width is a string', () => {
      test('sets border width', () => {
        expect(brUtilsBorderStyles({ width: '1' })).toStrictEqual({
          classes: { border: true, 'border-1': true }
        })
      })
    })

    describe('when rounded is a boolean', () => {
      test('does not set roundedness if rounded is false', () => {
        expect(brUtilsBorderStyles({ radius: false })).toStrictEqual({
          classes: { rounded: false }
        })
      })

      test('sets roundedness if rounded is true', () => {
        expect(brUtilsBorderStyles({ radius: true })).toStrictEqual({
          classes: { rounded: true }
        })
      })
    })

    describe('when rounded is a string', () => {
      test('sets roundedness appropriately', () => {
        expect(brUtilsBorderStyles({ radius: 'circle' })).toStrictEqual({
          classes: { 'rounded-circle': true }
        })
      })
    })

    describe('when rounded is a number', () => {
      test('sets roundedness appropriately', () => {
        expect(brUtilsBorderStyles({ radius: 0 })).toStrictEqual({
          classes: { 'rounded-0': true }
        })
      })
    })

    describe('when opacity is a number', () => {
      describe('when opacity is less than 1', () => {
        test('provides opacity as CSS variable', () => {
          expect(brUtilsBorderStyles({ opacity: 0.9 })).toStrictEqual({
            classes: {},
            inlineStyles: { '--bs-border-opacity': 0.9 }
          })
        })
      })

      describe('when opacity is equal to 1', () => {
        test('provides opacity as class name', () => {
          expect(brUtilsBorderStyles({ opacity: 1 })).toStrictEqual({
            classes: { 'border-opacity-100': true }
          })
        })
      })

      describe('when opacity is more than 1', () => {
        test('provides opacity as class name', () => {
          expect(brUtilsBorderStyles({ opacity: 100 })).toStrictEqual({
            classes: { 'border-opacity-100': true }
          })
        })
      })
    })

    describe('when opacity is a string', () => {
      describe('when string is not a percentage', () => {
        describe('when opacity is less than 1', () => {
          test('provides opacity as CSS variable', () => {
            expect(brUtilsBorderStyles({ opacity: '0.9' })).toStrictEqual({
              classes: {},
              inlineStyles: { '--bs-border-opacity': 0.9 }
            })
          })
        })

        describe('when opacity is equal to 1', () => {
          test('provides opacity as class name', () => {
            expect(brUtilsBorderStyles({ opacity: '1' })).toStrictEqual({
              classes: { 'border-opacity-100': true }
            })
          })
        })

        describe('when opacity is more than 1', () => {
          test('provides opacity as class name', () => {
            expect(brUtilsBorderStyles({ opacity: '100' })).toStrictEqual({
              classes: { 'border-opacity-100': true }
            })
          })
        })
      })

      describe('when string is a percentage', () => {
        test('provides opacity as CSS variable', () => {
          expect(brUtilsBorderStyles({ opacity: '90%' })).toStrictEqual({
            classes: {},
            inlineStyles: { '--bs-border-opacity': 0.9 }
          })
        })
      })
    })

    describe('when color is a string', () => {
      expect(brUtilsBorderStyles({ color: 'primary' })).toStrictEqual({
        classes: { border: true, 'border-primary': true }
      })
    })

    describe('when directional props are provided', () => {
      describe('when directional prop is a boolean', () => {
        test('applies appropriate classes when directional border is true', () => {
          expect(brUtilsBorderStyles({ top: true })).toStrictEqual({
            classes: {
              'border-top': true,
              'border-top-0': false,
              border: false
            }
          })
        })

        test('applies appropriate classes when directional border is false', () => {
          expect(brUtilsBorderStyles({ top: false })).toStrictEqual({
            classes: {
              'border-top': false,
              'border-top-0': true,
              border: true
            }
          })
        })
      })

      describe('when directional prop is config object', () => {
        test('applies intended classes for width', () => {
          expect(brUtilsBorderStyles({ bottom: { width: '0' } })).toStrictEqual({
            classes: { 'border-bottom-0': true }
          })
        })
      })
    })
  })
})
