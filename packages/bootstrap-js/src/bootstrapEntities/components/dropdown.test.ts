import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Dropdowns', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Dropdown Item', () => {
    test('applies base class name when not text', () => {
      expect(bsJs({ elementType: 'dropdown-item' })).toStrictEqual({
        classes: { 'dropdown-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'dropdown-item', textOnly: false })).toStrictEqual({
        classes: { 'dropdown-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies text class name when specified', () => {
      expect(bsJs({ elementType: 'dropdown-item', textOnly: true })).toStrictEqual({
        classes: { 'dropdown-item-text': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies active styles', () => {
      expect(bsJs({ elementType: 'dropdown-item', active: true })).toStrictEqual({
        classes: { 'dropdown-item': true, active: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'dropdown-item', active: false })).toStrictEqual({
        classes: { 'dropdown-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies disabled styles', () => {
      expect(bsJs({ elementType: 'dropdown-item', disabled: true })).toStrictEqual({
        classes: { 'dropdown-item': true, disabled: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'dropdown-item', disabled: false })).toStrictEqual({
        classes: { 'dropdown-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Dropdown Toggle', () => {
    test('applies element class', () => {
      expect(bsJs({ elementType: 'dropdown-toggle' })).toStrictEqual({
        classes: { 'dropdown-toggle': true },
        inlineStyles: {},
        elementAttributes: { 'data-bs-toggle': 'dropdown' }
      })
    })

    test('applies split class', () => {
      expect(bsJs({ elementType: 'dropdown-toggle', split: true })).toStrictEqual({
        classes: { 'dropdown-toggle': true, 'dropdown-toggle-split': true },
        inlineStyles: {},
        elementAttributes: { 'data-bs-toggle': 'dropdown' }
      })
    })
  })
})
