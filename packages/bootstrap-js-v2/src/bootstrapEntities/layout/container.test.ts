import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Layout: Container', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name when no options are provided', () => {
    expect(bsJs({ elementType: 'container' })).toStrictEqual({
      classes: { container: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies fluid class name', () => {
    expect(bsJs({ elementType: 'container', fluid: true })).toStrictEqual({
      classes: { 'container-fluid': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'container', fluid: false })).toStrictEqual({
      classes: { container: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies breakpoint-specific class name', () => {
    expect(bsJs({ elementType: 'container', fullWidthUntil: 'lg' })).toStrictEqual({
      classes: { 'container-lg': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
