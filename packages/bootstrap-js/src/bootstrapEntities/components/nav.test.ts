import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Navs and Tabs', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Nav', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'nav' })).toStrictEqual({
        classes: { nav: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies pills class name', () => {
      expect(bsJs({ elementType: 'nav', pills: true })).toStrictEqual({
        classes: { nav: true, 'nav-pills': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'nav', pills: false })).toStrictEqual({
        classes: { nav: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Nav Item', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'nav-item' })).toStrictEqual({
        classes: { 'nav-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies dropdown class name', () => {
      expect(bsJs({ elementType: 'nav-item', dropdown: true })).toStrictEqual({
        classes: { 'nav-item': true, dropdown: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'nav-item', dropdown: false })).toStrictEqual({
        classes: { 'nav-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Nav Link', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'nav-link' })).toStrictEqual({
        classes: { 'nav-link': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies dropdown toggle class name', () => {
      expect(bsJs({ elementType: 'nav-link', dropdownToggle: true })).toStrictEqual({
        classes: { 'nav-link': true, 'dropdown-toggle': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'nav-link', dropdownToggle: false })).toStrictEqual({
        classes: { 'nav-link': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies active class name', () => {
      expect(bsJs({ elementType: 'nav-link', active: true })).toStrictEqual({
        classes: { 'nav-link': true, active: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'nav-link', active: false })).toStrictEqual({
        classes: { 'nav-link': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies disabled class name', () => {
      expect(bsJs({ elementType: 'nav-link', disabled: true })).toStrictEqual({
        classes: { 'nav-link': true, disabled: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'nav-link', disabled: false })).toStrictEqual({
        classes: { 'nav-link': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
