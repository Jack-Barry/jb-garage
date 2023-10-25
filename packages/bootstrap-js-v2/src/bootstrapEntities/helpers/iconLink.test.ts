import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Icon Link', () => {
  let bsJs: BootstrapJs['bsJs']

  beforeEach(() => {
    bsJs = new BootstrapJs().bsJs
  })

  test('applies expected class when value is true', () => {
    expect(bsJs({ iconLink: true })).toStrictEqual({
      classes: { 'icon-link': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  describe('when value is config object', () => {
    test('applies hover transform class', () => {
      expect(bsJs({ iconLink: { hoverTransform: true } })).toStrictEqual({
        classes: { 'icon-link': true, 'icon-link-hover': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    describe('when prefix is default', () => {
      test('applies hover transform as CSS var when applicable', () => {
        expect(bsJs({ iconLink: { hoverTransform: 'custom-transform' } })).toStrictEqual({
          classes: { 'icon-link': true, 'icon-link-hover': true },
          inlineStyles: { '--bs-icon-link-transform': 'custom-transform' },
          elementAttributes: {}
        })
      })
    })

    describe('when prefix is custom', () => {
      test('applies hover transform as CSS var when applicable', () => {
        expect(
          new BootstrapJs('custom').bsJs({ iconLink: { hoverTransform: 'custom-transform' } })
        ).toStrictEqual({
          classes: { 'icon-link': true, 'icon-link-hover': true },
          inlineStyles: { '--custom-icon-link-transform': 'custom-transform' },
          elementAttributes: {}
        })
      })
    })
  })
})
