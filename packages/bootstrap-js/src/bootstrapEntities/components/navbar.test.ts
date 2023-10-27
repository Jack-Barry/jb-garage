import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Navbar', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'navbar' })).toStrictEqual({
      classes: { navbar: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies placement class name', () => {
    expect(bsJs({ elementType: 'navbar', placement: 'fixed-top' })).toStrictEqual({
      classes: { navbar: true, 'fixed-top': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
