import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Layout: Rows', () => {
  const bsJs = new BootstrapJs().bsJs

  test('sets element class name', () => {
    expect(bsJs({ elementType: 'row' })).toStrictEqual({
      classes: { row: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('sets columns class name', () => {
    expect(bsJs({ elementType: 'row', cols: '1' })).toStrictEqual({
      classes: { row: true, 'row-cols-1': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('sets gutters class name for simple value', () => {
    expect(bsJs({ elementType: 'row', gutter: '1' })).toStrictEqual({
      classes: { row: true, 'g-1': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'row', gutter: 0 })).toStrictEqual({
      classes: { row: true, 'g-0': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('sets gutters class name for config object value', () => {
    expect(bsJs({ elementType: 'row', gutter: { x: 'auto', top: '1' } })).toStrictEqual({
      classes: { row: true, 'gx-auto': true, 'gt-1': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  describe('for breakpoint-specific options', () => {
    test('sets columns class name', () => {
      expect(
        bsJs({ elementType: 'row', breakpoints: { lg: { row: { cols: '1' } } } })
      ).toStrictEqual({
        classes: { row: true, 'row-cols-lg-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets gutters class name for simple value', () => {
      expect(
        bsJs({ elementType: 'row', breakpoints: { lg: { row: { gutter: '1' } } } })
      ).toStrictEqual({
        classes: { row: true, 'g-lg-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(
        bsJs({ elementType: 'row', breakpoints: { lg: { row: { gutter: 0 } } } })
      ).toStrictEqual({
        classes: { row: true, 'g-lg-0': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets gutters class name for config object value', () => {
      expect(
        bsJs({
          elementType: 'row',
          breakpoints: { lg: { row: { gutter: { x: 'auto', top: '1' } } } }
        })
      ).toStrictEqual({
        classes: { row: true, 'gx-lg-auto': true, 'gt-lg-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
