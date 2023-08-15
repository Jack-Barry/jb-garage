import { BootstrapJs } from './BootstrapJs'

describe('Bootstrap Classes: Utilities: Background', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('when no value is provided', () => {
    test('returns empty objects', () => {
      expect(bs.bsJs()).toStrictEqual({ classes: {}, inlineStyles: {} })
    })
  })

  describe('when value is provided as string', () => {
    test('returns appropriate background class', () => {
      expect(bs.bsJs({ bsJsAll: { background: 'test' } })).toStrictEqual({
        classes: { 'bg-test': true },
        inlineStyles: {}
      })
    })
  })

  describe('when value is provided as object', () => {
    describe('when object is empty', () => {
      test('returns empty object', () => {
        // @ts-ignore
        expect(bs.bsJs({ bsJsAll: { background: {} } })).toStrictEqual({
          classes: {},
          inlineStyles: {}
        })
      })
    })

    test('returns appropriate background class', () => {
      expect(bs.bsJs({ bsJsAll: { background: { color: 'test' } } })).toStrictEqual({
        classes: { 'bg-test': true },
        inlineStyles: {}
      })
    })

    describe('when opacity is included', () => {
      describe('when opacity is a number', () => {
        describe('when opacity is less than 1', () => {
          test('provides opacity as CSS variable', () => {
            expect(
              bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: 0.9 } } })
            ).toStrictEqual({
              classes: { 'bg-test': true },
              inlineStyles: { '--bs-bg-opacity': 0.9 }
            })

            expect(
              new BootstrapJs('custom').bsJs({
                bsJsAll: { background: { color: 'test', opacity: 0.9 } }
              })
            ).toStrictEqual({
              classes: { 'bg-test': true },
              inlineStyles: { '--custom-bg-opacity': 0.9 }
            })
          })
        })

        describe('when opacity is equal to 1', () => {
          test('provides opacity as class name', () => {
            expect(
              bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: 1 } } })
            ).toStrictEqual({
              classes: { 'bg-test': true, 'bg-opacity-100': true },
              inlineStyles: {}
            })
          })
        })

        describe('when opacity is more than 1', () => {
          test('provides opacity as class name', () => {
            expect(
              bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: 100 } } })
            ).toStrictEqual({
              classes: { 'bg-test': true, 'bg-opacity-100': true },
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
                bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: '0.9' } } })
              ).toStrictEqual({
                classes: { 'bg-test': true },
                inlineStyles: { '--bs-bg-opacity': 0.9 }
              })

              expect(
                new BootstrapJs('custom').bsJs({
                  bsJsAll: { background: { color: 'test', opacity: '0.9' } }
                })
              ).toStrictEqual({
                classes: { 'bg-test': true },
                inlineStyles: { '--custom-bg-opacity': 0.9 }
              })
            })
          })

          describe('when opacity is equal to 1', () => {
            test('provides opacity as class name', () => {
              expect(
                bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: '1' } } })
              ).toStrictEqual({
                classes: { 'bg-test': true, 'bg-opacity-100': true },
                inlineStyles: {}
              })
            })
          })

          describe('when opacity is more than 1', () => {
            test('provides opacity as class name', () => {
              expect(
                bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: '100' } } })
              ).toStrictEqual({
                classes: { 'bg-test': true, 'bg-opacity-100': true },
                inlineStyles: {}
              })
            })
          })
        })

        describe('when string is a percentage', () => {
          test('provides opacity as CSS variable', () => {
            expect(
              bs.bsJs({ bsJsAll: { background: { color: 'test', opacity: '90%' } } })
            ).toStrictEqual({
              classes: { 'bg-test': true },
              inlineStyles: { '--bs-bg-opacity': 0.9 }
            })

            expect(
              new BootstrapJs('custom').bsJs({
                bsJsAll: { background: { color: 'test', opacity: '90%' } }
              })
            ).toStrictEqual({
              classes: { 'bg-test': true },
              inlineStyles: { '--custom-bg-opacity': 0.9 }
            })
          })
        })
      })
    })

    describe('when gradient is included', () => {
      test('returns appropriate background class when gradient is true', () => {
        expect(
          bs.bsJs({ bsJsAll: { background: { color: 'test', gradient: true } } })
        ).toStrictEqual({
          classes: { 'bg-test': true, 'bg-gradient': true },
          inlineStyles: {}
        })
      })

      test('returns appropriate background class when gradient is false', () => {
        expect(
          bs.bsJs({ bsJsAll: { background: { color: 'test', gradient: false } } })
        ).toStrictEqual({
          classes: { 'bg-test': true, 'bg-gradient': false },
          inlineStyles: {}
        })
      })
    })
  })
})
