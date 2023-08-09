import { brUtilsColorStyles } from './colors'

describe('Bootstrap Classes: Utilities: Colors', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsColorStyles()).toStrictEqual({})
    })
  })

  describe('when value provided is a string', () => {
    test('sets text color class', () => {
      expect(brUtilsColorStyles('stuff')).toStrictEqual({
        classes: { 'text-stuff': true }
      })
    })
  })

  describe('when value provided is a config object', () => {
    describe('when color is included', () => {
      expect(brUtilsColorStyles({ color: 'stuff' })).toStrictEqual({
        classes: { 'text-stuff': true }
      })
    })

    describe('when opacity is included', () => {
      describe('when opacity is a number', () => {
        describe('when opacity is less than 1', () => {
          test('provides opacity as CSS variable', () => {
            expect(brUtilsColorStyles({ opacity: 0.9 })).toStrictEqual({
              classes: {},
              inlineStyles: { '--bs-text-opacity': 0.9 }
            })
          })
        })

        describe('when opacity is equal to 1', () => {
          test('provides opacity as class name', () => {
            expect(brUtilsColorStyles({ opacity: 1 })).toStrictEqual({
              classes: { 'text-opacity-100': true }
            })
          })
        })

        describe('when opacity is more than 1', () => {
          test('provides opacity as class name', () => {
            expect(brUtilsColorStyles({ opacity: 100 })).toStrictEqual({
              classes: { 'text-opacity-100': true }
            })
          })
        })
      })

      describe('when opacity is a string', () => {
        describe('when string is not a percentage', () => {
          describe('when opacity is less than 1', () => {
            test('provides opacity as CSS variable', () => {
              expect(brUtilsColorStyles({ opacity: '0.9' })).toStrictEqual({
                classes: {},
                inlineStyles: { '--bs-text-opacity': 0.9 }
              })
            })
          })

          describe('when opacity is equal to 1', () => {
            test('provides opacity as class name', () => {
              expect(brUtilsColorStyles({ opacity: '1' })).toStrictEqual({
                classes: { 'text-opacity-100': true }
              })
            })
          })

          describe('when opacity is more than 1', () => {
            test('provides opacity as class name', () => {
              expect(brUtilsColorStyles({ opacity: '100' })).toStrictEqual({
                classes: { 'text-opacity-100': true }
              })
            })
          })
        })

        describe('when string is a percentage', () => {
          test('provides opacity as CSS variable', () => {
            expect(brUtilsColorStyles({ opacity: '90%' })).toStrictEqual({
              classes: {},
              inlineStyles: { '--bs-text-opacity': 0.9 }
            })
          })
        })
      })
    })
  })
})
