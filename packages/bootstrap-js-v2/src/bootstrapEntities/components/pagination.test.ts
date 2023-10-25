import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Pagination', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Page Item', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'page-item' })).toStrictEqual({
        classes: { 'page-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies active class name', () => {
      expect(bsJs({ elementType: 'page-item', active: true })).toStrictEqual({
        classes: { 'page-item': true, active: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'page-item', active: false })).toStrictEqual({
        classes: { 'page-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies disabled class name', () => {
      expect(bsJs({ elementType: 'page-item', disabled: true })).toStrictEqual({
        classes: { 'page-item': true, disabled: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'page-item', disabled: false })).toStrictEqual({
        classes: { 'page-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Pagination', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'pagination' })).toStrictEqual({
        classes: { pagination: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies size class name', () => {
      expect(bsJs({ elementType: 'pagination', paginationSize: 'lg' })).toStrictEqual({
        classes: { pagination: true, 'pagination-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
