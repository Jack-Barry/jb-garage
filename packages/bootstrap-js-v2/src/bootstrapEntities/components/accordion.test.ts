import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Components: Accordion', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Accordion', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'accordion' })).toStrictEqual({
        classes: { accordion: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies flush class name', () => {
      expect(bsJs({ elementType: 'accordion', flush: true })).toStrictEqual({
        classes: { accordion: true, 'accordion-flush': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'accordion', flush: false })).toStrictEqual({
        classes: { accordion: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Accordion Button', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'accordion-button' })).toStrictEqual({
        classes: { 'accordion-button': true },
        inlineStyles: {},
        elementAttributes: { 'aria-expanded': true }
      })
    })

    test('applies flush class name', () => {
      expect(bsJs({ elementType: 'accordion-button', collapsed: true })).toStrictEqual({
        classes: { 'accordion-button': true, collapsed: true },
        inlineStyles: {},
        elementAttributes: { 'aria-expanded': false }
      })

      expect(bsJs({ elementType: 'accordion-button', collapsed: false })).toStrictEqual({
        classes: { 'accordion-button': true },
        inlineStyles: {},
        elementAttributes: { 'aria-expanded': true }
      })
    })
  })
})
