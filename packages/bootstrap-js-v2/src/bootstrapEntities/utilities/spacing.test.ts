import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Spacing', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided config is not breakpoint specific', () => {
    test('sets corresponding margin values', () => {
      expect(bsJs({ spacing: { margin: '0' } })).toStrictEqual({
        classes: { 'm-0': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({
          spacing: {
            margin: {
              allSides: 'auto',
              x: '0',
              y: '1',
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
          'mt-2': true,
          'me-3': true,
          'mb-4': true,
          'ms-5': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets corresponding negative margin values', () => {
      expect(
        bsJs({
          spacing: {
            negativeMargin: '0'
          }
        })
      ).toStrictEqual({ classes: { 'm-n0': true }, inlineStyles: {}, elementAttributes: {} })

      expect(
        bsJs({
          spacing: {
            negativeMargin: {
              allSides: '5',
              x: '0',
              y: '1',
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
          'mt-n2': true,
          'me-n3': true,
          'mb-n4': true,
          'ms-n5': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets corresponding padding values', () => {
      expect(
        bsJs({
          spacing: {
            padding: '0'
          }
        })
      ).toStrictEqual({
        classes: {
          'p-0': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({
          spacing: {
            padding: {
              allSides: '5',
              x: '0',
              y: '1',
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
          'pt-2': true,
          'pe-3': true,
          'pb-4': true,
          'ps-5': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets corresponding gap values', () => {
      expect(
        bsJs({
          spacing: {
            gap: '0'
          }
        })
      ).toStrictEqual({
        classes: {
          'gap-0': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({
          spacing: {
            gap: {
              column: '0',
              row: '1'
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'column-gap-0': true,
          'row-gap-1': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided config is breakpoint specific', () => {
    test('sets corresponding margin values', () => {
      expect(bsJs({ breakpoints: { sm: { spacing: { margin: '0' } } } })).toStrictEqual({
        classes: { 'm-sm-0': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({
          spacing: {
            margin: { allSides: 'auto', x: '0', y: '1' }
          },
          breakpoints: {
            sm: {
              spacing: {
                margin: {
                  top: '2',
                  end: '3',
                  bottom: '4',
                  start: '5'
                }
              }
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
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets corresponding negative margin values', () => {
      expect(
        bsJs({
          breakpoints: {
            sm: {
              spacing: {
                negativeMargin: '0'
              }
            }
          }
        })
      ).toStrictEqual({ classes: { 'm-sm-n0': true }, inlineStyles: {}, elementAttributes: {} })

      expect(
        bsJs({
          spacing: {
            negativeMargin: {
              allSides: '5',
              x: '0',
              y: '1'
            }
          },
          breakpoints: {
            sm: {
              spacing: {
                negativeMargin: {
                  top: '2',
                  end: '3',
                  bottom: '4',
                  start: '5'
                }
              }
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
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets corresponding padding values', () => {
      expect(
        bsJs({
          breakpoints: {
            sm: {
              spacing: {
                padding: '0'
              }
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'p-sm-0': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({
          spacing: {
            padding: {
              allSides: '5',
              x: '0',
              y: '1'
            }
          },
          breakpoints: {
            sm: {
              spacing: {
                padding: {
                  top: '2',
                  end: '3',
                  bottom: '4',
                  start: '5'
                }
              }
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
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets corresponding gap values', () => {
      expect(
        bsJs({
          breakpoints: {
            sm: {
              spacing: {
                gap: '0'
              }
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'gap-sm-0': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({
          spacing: {
            gap: {
              column: '0'
            }
          },
          breakpoints: {
            sm: {
              spacing: {
                gap: {
                  row: '1'
                }
              }
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'column-gap-0': true,
          'row-gap-sm-1': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
