import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'

describe('Bootstrap Utilities: Colors', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: undefined } })).toStrictEqual({
        classes: {},
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })

  describe('when value provided is a string', () => {
    test('sets text color class', () => {
      expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: 'stuff' } })).toStrictEqual({
        classes: { 'text-stuff': true },
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })

  describe('when value provided is a config object', () => {
    describe('when color is included', () => {
      test('sets color for text', () => {
        expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { color: 'stuff' } } })).toStrictEqual({
          classes: { 'text-stuff': true },
          inlineStyles: {},
          dataAttributes: {}
        })
      })
    })

    describe('when opacity is included', () => {
      describe('when opacity is a number', () => {
        describe('when opacity is less than 1', () => {
          test('provides opacity as CSS variable', () => {
            expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: 0.9 } } })).toStrictEqual({
              classes: {},
              inlineStyles: { '--bs-text-opacity': 0.9 },
              dataAttributes: {}
            })

            expect(
              new BootstrapJs('custom').bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: 0.9 } } })
            ).toStrictEqual({
              classes: {},
              inlineStyles: { '--custom-text-opacity': 0.9 },
              dataAttributes: {}
            })
          })
        })

        describe('when opacity is equal to 1', () => {
          test('provides opacity as class name', () => {
            expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: 1 } } })).toStrictEqual({
              classes: { 'text-opacity-100': true },
              inlineStyles: {},
              dataAttributes: {}
            })
          })
        })

        describe('when opacity is more than 1', () => {
          test('provides opacity as class name', () => {
            expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: 100 } } })).toStrictEqual({
              classes: { 'text-opacity-100': true },
              inlineStyles: {},
              dataAttributes: {}
            })
          })
        })
      })

      describe('when opacity is a string', () => {
        describe('when string is not a percentage', () => {
          describe('when opacity is less than 1', () => {
            test('provides opacity as CSS variable', () => {
              expect(
                bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: '0.9' } } })
              ).toStrictEqual({
                classes: {},
                inlineStyles: { '--bs-text-opacity': 0.9 },
                dataAttributes: {}
              })

              expect(
                new BootstrapJs('custom').bsJs({
                  [ALL_BREAKPOINTS_KEY]: { color: { opacity: '0.9' } }
                })
              ).toStrictEqual({
                classes: {},
                inlineStyles: { '--custom-text-opacity': 0.9 },
                dataAttributes: {}
              })
            })
          })

          describe('when opacity is equal to 1', () => {
            test('provides opacity as class name', () => {
              expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: '1' } } })).toStrictEqual(
                {
                  classes: { 'text-opacity-100': true },
                  inlineStyles: {},
                  dataAttributes: {}
                }
              )
            })
          })

          describe('when opacity is more than 1', () => {
            test('provides opacity as class name', () => {
              expect(
                bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: '100' } } })
              ).toStrictEqual({
                classes: { 'text-opacity-100': true },
                inlineStyles: {},
                dataAttributes: {}
              })
            })
          })
        })

        describe('when string is a percentage', () => {
          test('provides opacity as CSS variable', () => {
            expect(bs.bsJs({ [ALL_BREAKPOINTS_KEY]: { color: { opacity: '90%' } } })).toStrictEqual(
              {
                classes: {},
                inlineStyles: { '--bs-text-opacity': 0.9 },
                dataAttributes: {}
              }
            )

            expect(
              new BootstrapJs('custom').bsJs({
                [ALL_BREAKPOINTS_KEY]: { color: { opacity: '90%' } }
              })
            ).toStrictEqual({
              classes: {},
              inlineStyles: { '--custom-text-opacity': 0.9 },
              dataAttributes: {}
            })
          })
        })
      })
    })
  })
})
