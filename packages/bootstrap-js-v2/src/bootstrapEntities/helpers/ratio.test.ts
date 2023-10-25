import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Ratio', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class when value is string', () => {
    expect(bsJs({ ratio: '16x9' })).toStrictEqual({
      classes: { ratio: true, 'ratio-16x9': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  describe('when prefix is default', () => {
    test('applies expected CSS variable when applicable', () => {
      expect(bsJs({ ratio: { asCssVar: '1x1' } })).toStrictEqual({
        classes: { ratio: true },
        inlineStyles: { '--bs-aspect-ratio': '1x1' },
        elementAttributes: {}
      })
    })
  })

  describe('when prefix is custom', () => {
    test('applies expected CSS variable when applicable', () => {
      expect(new BootstrapJs('custom').bsJs({ ratio: { asCssVar: '1x1' } })).toStrictEqual({
        classes: { ratio: true },
        inlineStyles: { '--custom-aspect-ratio': '1x1' },
        elementAttributes: {}
      })
    })
  })
})
