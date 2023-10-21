import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Cards', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Card Image', () => {
    test('applies element class name when no position is specified', () => {
      expect(bsJs({ elementType: 'card-img' })).toStrictEqual({
        classes: { 'card-img': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies positional class name when position is specified', () => {
      expect(bsJs({ elementType: 'card-img', imagePosition: 'bottom' })).toStrictEqual({
        classes: { 'card-img-bottom': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Card Link', () => {
    test('applies base class name', () => {
      expect(bsJs({ elementType: 'card-link' })).toStrictEqual({
        classes: { 'card-link': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies link styles', () => {
      expect(bsJs({ elementType: 'card-link', color: 'primary' })).toStrictEqual({
        classes: { 'card-link': true, 'link-primary': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
