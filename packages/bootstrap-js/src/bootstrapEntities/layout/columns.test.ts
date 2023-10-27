import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Layout: Columns', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when no breakpoint options are provided', () => {
    test('sets element class name', () => {
      expect(bsJs({ elementType: 'col' })).toStrictEqual({
        classes: { col: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets column width class name', () => {
      expect(bsJs({ elementType: 'col', cols: '1' })).toStrictEqual({
        classes: { 'col-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets column offset class name', () => {
      expect(bsJs({ elementType: 'col', offset: '1' })).toStrictEqual({
        classes: { col: true, 'offset-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets column order class name', () => {
      expect(bsJs({ elementType: 'col', order: '1' })).toStrictEqual({
        classes: { col: true, 'order-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when breakpoint options are provided', () => {
    test('sets breakpoint-specific element class name', () => {
      expect(bsJs({ elementType: 'col', breakpoints: { lg: { col: true } } })).toStrictEqual({
        classes: { 'col-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets column with width class name', () => {
      expect(bsJs({ elementType: 'col', breakpoints: { md: { col: '10' } } })).toStrictEqual({
        classes: { 'col-md-10': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets column offset class name', () => {
      expect(
        bsJs({ elementType: 'col', breakpoints: { sm: { col: { offset: '1' } } } })
      ).toStrictEqual({
        classes: { 'col-sm': true, 'offset-sm-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets column order class name', () => {
      expect(
        bsJs({ elementType: 'col', breakpoints: { sm: { col: { order: '1' } } } })
      ).toStrictEqual({
        classes: { 'col-sm': true, 'order-sm-1': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
