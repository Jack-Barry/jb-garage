import { logger } from '../../logger.js'
import { brUtilsBackgroundStyles } from './background'

const mockLogWarn = jest.spyOn(logger, 'warn')

describe('Bootstrap Classes: Utilities: Background', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsBackgroundStyles()).toStrictEqual({})
    })
  })

  describe('when value is provided as string', () => {
    test('returns appropriate background class', () => {
      expect(brUtilsBackgroundStyles('test')).toStrictEqual({ className: 'bg-test' })
    })
  })

  describe('when value is provided as object', () => {
    describe('when object is empty', () => {
      test('returns empty object', () => {
        expect(brUtilsBackgroundStyles()).toStrictEqual({})
      })
    })

    describe('when color is missing', () => {
      test('issues warning', () => {
        expect(mockLogWarn).not.toHaveBeenCalled()
        // @ts-ignore -- need to break type-safety to test
        expect(brUtilsBackgroundStyles({})).toStrictEqual({})
        expect(mockLogWarn).toHaveBeenCalledTimes(1)
      })
    })

    test('returns appropriate background class', () => {
      expect(brUtilsBackgroundStyles({ color: 'test' })).toStrictEqual({
        className: 'bg-test'
      })
    })

    describe('when opacity is included', () => {
      describe('when opacity is a number', () => {
        describe('when opacity is less than 1', () => {
          test('provides opacity as CSS variable', () => {
            expect(brUtilsBackgroundStyles({ color: 'test', opacity: 0.9 })).toStrictEqual({
              className: { 'bg-test': true },
              style: { '--bs-bg-opacity': 0.9 }
            })
          })
        })

        describe('when opacity is equal to 1', () => {
          test('provides opacity as class name', () => {
            expect(brUtilsBackgroundStyles({ color: 'test', opacity: 1 })).toStrictEqual({
              className: { 'bg-test': true, 'bg-opacity-100': true }
            })
          })
        })

        describe('when opacity is more than 1', () => {
          test('provides opacity as class name', () => {
            expect(brUtilsBackgroundStyles({ color: 'test', opacity: 100 })).toStrictEqual({
              className: { 'bg-test': true, 'bg-opacity-100': true }
            })
          })
        })
      })

      describe('when opacity is a string', () => {
        describe('when string is not a percentage', () => {
          describe('when opacity is less than 1', () => {
            test('provides opacity as CSS variable', () => {
              expect(brUtilsBackgroundStyles({ color: 'test', opacity: '0.9' })).toStrictEqual({
                className: { 'bg-test': true },
                style: { '--bs-bg-opacity': 0.9 }
              })
            })
          })

          describe('when opacity is equal to 1', () => {
            test('provides opacity as class name', () => {
              expect(brUtilsBackgroundStyles({ color: 'test', opacity: '1' })).toStrictEqual({
                className: { 'bg-test': true, 'bg-opacity-100': true }
              })
            })
          })

          describe('when opacity is more than 1', () => {
            test('provides opacity as class name', () => {
              expect(brUtilsBackgroundStyles({ color: 'test', opacity: '100' })).toStrictEqual({
                className: { 'bg-test': true, 'bg-opacity-100': true }
              })
            })
          })
        })

        describe('when string is a percentage', () => {
          test('provides opacity as CSS variable', () => {
            expect(brUtilsBackgroundStyles({ color: 'test', opacity: '90%' })).toStrictEqual({
              className: { 'bg-test': true },
              style: { '--bs-bg-opacity': 0.9 }
            })
          })
        })
      })
    })

    describe('when gradient is included', () => {
      test('returns appropriate background class when gradient is true', () => {
        expect(brUtilsBackgroundStyles({ color: 'test', gradient: true })).toStrictEqual({
          className: { 'bg-test': true, 'bg-gradient': true }
        })
      })

      test('returns appropriate background class when gradient is false', () => {
        expect(brUtilsBackgroundStyles({ color: 'test', gradient: false })).toStrictEqual({
          className: { 'bg-test': true, 'bg-gradient': false }
        })
      })
    })
  })
})
