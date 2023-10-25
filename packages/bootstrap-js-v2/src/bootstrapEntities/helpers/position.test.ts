import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Position', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class for helper values', () => {
    const helperPositions = ['sticky-top', 'sticky-bottom', 'fixed-top', 'fixed-bottom']
    helperPositions.forEach((p) => {
      expect(bsJs({ position: p })).toStrictEqual({
        classes: { [p]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  test('applies expected class for helper values at breakpoints', () => {
    expect(bsJs({ breakpoints: { lg: { position: 'sticky-top' } } })).toStrictEqual({
      classes: { 'sticky-lg-top': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ breakpoints: { lg: { position: 'sticky-bottom' } } })).toStrictEqual({
      classes: { 'sticky-lg-bottom': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
