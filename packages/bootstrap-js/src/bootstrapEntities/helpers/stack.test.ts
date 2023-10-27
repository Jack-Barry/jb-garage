import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Ratio', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected classes', () => {
    expect(bsJs({ stackDirection: 'horizontal' })).toStrictEqual({
      classes: { hstack: true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ stackDirection: 'vertical' })).toStrictEqual({
      classes: { vstack: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
