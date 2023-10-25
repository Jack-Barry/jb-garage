import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Components: Accordion', () => {
  const bsJs = new BootstrapJs().bsJs

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
