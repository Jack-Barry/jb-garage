import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Offcanvas', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name when no onCanvas is specified', () => {
    expect(bsJs({ elementType: 'offcanvas' })).toStrictEqual({
      classes: { offcanvas: true, 'offcanvas-start': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies breakpoint-specific class name when onCanvas is specified', () => {
    expect(bsJs({ elementType: 'offcanvas', onCanvas: 'lg' })).toStrictEqual({
      classes: { 'offcanvas-lg': true, 'offcanvas-start': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies placement class name', () => {
    expect(bsJs({ elementType: 'offcanvas', placement: 'bottom' })).toStrictEqual({
      classes: { offcanvas: true, 'offcanvas-bottom': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
