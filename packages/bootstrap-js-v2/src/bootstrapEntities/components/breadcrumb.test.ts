import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Breadcrumb', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Breadcrumbs Wrapper', () => {
    test('applies aria label', () => {
      expect(bsJs({ elementType: 'breadcrumbs-wrapper' })).toStrictEqual({
        classes: {},
        inlineStyles: {},
        elementAttributes: { 'aria-label': 'breadcrumb' }
      })
    })

    test('applies divider as CSS variable', () => {
      expect(bsJs({ elementType: 'breadcrumbs-wrapper', divider: 'custom' })).toStrictEqual({
        classes: {},
        inlineStyles: { '--bs-breadcrumbs-divider': 'custom' },
        elementAttributes: { 'aria-label': 'breadcrumb' }
      })

      expect(
        new BootstrapJs('custom').bsJs({ elementType: 'breadcrumbs-wrapper', divider: 'custom' })
      ).toStrictEqual({
        classes: {},
        inlineStyles: { '--custom-breadcrumbs-divider': 'custom' },
        elementAttributes: { 'aria-label': 'breadcrumb' }
      })
    })
  })

  describe('Breadcrumb Item', () => {
    test('applies base class name', () => {
      expect(bsJs({ elementType: 'breadcrumb-item' })).toStrictEqual({
        classes: { 'breadcrumb-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies "active" class name', () => {
      expect(bsJs({ elementType: 'breadcrumb-item', active: true })).toStrictEqual({
        classes: { 'breadcrumb-item': true, active: true },
        inlineStyles: {},
        elementAttributes: { 'aria-current': 'page' }
      })

      expect(bsJs({ elementType: 'breadcrumb-item', active: false })).toStrictEqual({
        classes: { 'breadcrumb-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
