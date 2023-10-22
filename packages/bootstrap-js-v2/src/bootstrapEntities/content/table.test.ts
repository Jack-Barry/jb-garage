import { BootstrapJs } from '../../BootstrapJs'
import { emptyStyles } from '../../utils'

describe('Element Components: Table', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Table', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'table' })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies striped class name', () => {
      expect(bsJs({ elementType: 'table', striped: true })).toStrictEqual({
        classes: { table: true, 'table-striped': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table', striped: false })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies striped columns class name', () => {
      expect(bsJs({ elementType: 'table', stripedCols: true })).toStrictEqual({
        classes: { table: true, 'table-striped-columns': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table', stripedCols: false })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies row hover class name', () => {
      expect(bsJs({ elementType: 'table', rowHover: true })).toStrictEqual({
        classes: { table: true, 'table-hover': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table', rowHover: false })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies bordered class name', () => {
      expect(bsJs({ elementType: 'table', bordered: true })).toStrictEqual({
        classes: { table: true, 'table-bordered': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table', bordered: false })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies borderless class name', () => {
      expect(bsJs({ elementType: 'table', borderless: true })).toStrictEqual({
        classes: { table: true, 'table-borderless': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table', borderless: false })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies size class name', () => {
      expect(bsJs({ elementType: 'table', size: 'sm' })).toStrictEqual({
        classes: { table: true, 'table-sm': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies caption top class name', () => {
      expect(bsJs({ elementType: 'table', captionTop: true })).toStrictEqual({
        classes: { table: true, 'caption-top': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table', captionTop: false })).toStrictEqual({
        classes: { table: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Table Entry', () => {
    test('applies active class names', () => {
      expect(bsJs({ elementType: 'table-entry', active: true })).toStrictEqual({
        classes: { 'table-active': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table-entry', active: false })).toStrictEqual(emptyStyles())
    })
  })

  describe('Table Group', () => {
    test('applies active class names', () => {
      expect(bsJs({ elementType: 'table-group', active: true })).toStrictEqual({
        classes: { 'table-active': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table-group', active: false })).toStrictEqual(emptyStyles())
    })

    test('applies active class names', () => {
      expect(bsJs({ elementType: 'table-group', groupDivider: true })).toStrictEqual({
        classes: { 'table-group-divider': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'table-group', active: false })).toStrictEqual(emptyStyles())
    })
  })

  describe('Table Responsive', () => {
    test('applies element class names when no breakpoint is specified', () => {
      expect(bsJs({ elementType: 'table-responsive' })).toStrictEqual({
        classes: { table: true, 'table-responsive': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies breakpoint-specific element class name when breakpoint is specified', () => {
      expect(
        bsJs({ elementType: 'table-responsive', responsiveMaxBreakpoint: 'lg' })
      ).toStrictEqual({
        classes: { table: true, 'table-responsive-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
