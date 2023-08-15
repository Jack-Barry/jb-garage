import { brUtilsSpacingStyles } from './spacingV2'

describe('Bootstrap Classes: Utilities: Spacing', () => {
  describe('when no value is provided', () => {
    test('returns empty object', () => {
      expect(brUtilsSpacingStyles()).toStrictEqual({})
    })
  })

  describe('when provided config does not specify breakpoints', () => {
    test('sets corresponding margin values', () => {
      expect(brUtilsSpacingStyles({ margin: '0' })).toStrictEqual({ classes: { 'm-0': true } })

      expect(
        brUtilsSpacingStyles({
          margin: {
            allSides: 'auto',
            x: '0',
            y: '1',
            top: '2',
            end: '3',
            bottom: '4',
            start: '5'
          }
        })
      ).toStrictEqual({
        classes: {
          'm-auto': true,
          'mx-0': true,
          'my-1': true,
          'mt-2': true,
          'me-3': true,
          'mb-4': true,
          'ms-5': true
        }
      })
    })

    test('sets corresponding negative margin values', () => {
      expect(
        brUtilsSpacingStyles({
          negativeMargin: '0'
        })
      ).toStrictEqual({ classes: { 'm-n0': true } })

      expect(
        brUtilsSpacingStyles({
          negativeMargin: {
            allSides: '5',
            x: '0',
            y: '1',
            top: '2',
            end: '3',
            bottom: '4',
            start: '5'
          }
        })
      ).toStrictEqual({
        classes: {
          'm-n5': true,
          'mx-n0': true,
          'my-n1': true,
          'mt-n2': true,
          'me-n3': true,
          'mb-n4': true,
          'ms-n5': true
        }
      })
    })

    test('sets corresponding padding values', () => {
      expect(
        brUtilsSpacingStyles({
          padding: '0'
        })
      ).toStrictEqual({
        classes: {
          'p-0': true
        }
      })

      expect(
        brUtilsSpacingStyles({
          padding: {
            allSides: '5',
            x: '0',
            y: '1',
            top: '2',
            end: '3',
            bottom: '4',
            start: '5'
          }
        })
      ).toStrictEqual({
        classes: {
          'p-5': true,
          'px-0': true,
          'py-1': true,
          'pt-2': true,
          'pe-3': true,
          'pb-4': true,
          'ps-5': true
        }
      })
    })

    test('sets corresponding gap values', () => {
      expect(
        brUtilsSpacingStyles({
          gap: '0'
        })
      ).toStrictEqual({
        classes: {
          'gap-0': true
        }
      })

      expect(
        brUtilsSpacingStyles({
          gap: {
            column: '0',
            row: '1'
          }
        })
      ).toStrictEqual({
        classes: {
          'column-gap-0': true,
          'row-gap-1': true
        }
      })
    })
  })

  describe('when provided config does specify breakpoints', () => {
    test('sets corresponding margin values', () => {
      expect(brUtilsSpacingStyles({ sm: { margin: '0' } })).toStrictEqual({
        classes: { 'm-sm-0': true }
      })

      expect(
        brUtilsSpacingStyles({
          brAllBreakpoints: {
            margin: { allSides: 'auto', x: '0', y: '1' }
          },
          sm: {
            margin: {
              top: '2',
              end: '3',
              bottom: '4',
              start: '5'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'm-auto': true,
          'mx-0': true,
          'my-1': true,
          'mt-sm-2': true,
          'me-sm-3': true,
          'mb-sm-4': true,
          'ms-sm-5': true
        }
      })
    })

    test('sets corresponding negative margin values', () => {
      expect(
        brUtilsSpacingStyles({
          sm: {
            negativeMargin: '0'
          }
        })
      ).toStrictEqual({ classes: { 'm-sm-n0': true } })

      expect(
        brUtilsSpacingStyles({
          brAllBreakpoints: {
            negativeMargin: {
              allSides: '5',
              x: '0',
              y: '1'
            }
          },
          sm: {
            negativeMargin: {
              top: '2',
              end: '3',
              bottom: '4',
              start: '5'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'm-n5': true,
          'mx-n0': true,
          'my-n1': true,
          'mt-sm-n2': true,
          'me-sm-n3': true,
          'mb-sm-n4': true,
          'ms-sm-n5': true
        }
      })
    })

    test('sets corresponding padding values', () => {
      expect(
        brUtilsSpacingStyles({
          sm: {
            padding: '0'
          }
        })
      ).toStrictEqual({
        classes: {
          'p-sm-0': true
        }
      })

      expect(
        brUtilsSpacingStyles({
          brAllBreakpoints: {
            padding: {
              allSides: '5',
              x: '0',
              y: '1'
            }
          },
          sm: {
            padding: {
              top: '2',
              end: '3',
              bottom: '4',
              start: '5'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'p-5': true,
          'px-0': true,
          'py-1': true,
          'pt-sm-2': true,
          'pe-sm-3': true,
          'pb-sm-4': true,
          'ps-sm-5': true
        }
      })
    })

    test('sets corresponding gap values', () => {
      expect(
        brUtilsSpacingStyles({
          sm: {
            gap: '0'
          }
        })
      ).toStrictEqual({
        classes: {
          'gap-sm-0': true
        }
      })

      expect(
        brUtilsSpacingStyles({
          brAllBreakpoints: {
            gap: {
              column: '0'
            }
          },
          sm: {
            gap: {
              row: '1'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'column-gap-0': true,
          'row-gap-sm-1': true
        }
      })
    })
  })
})
