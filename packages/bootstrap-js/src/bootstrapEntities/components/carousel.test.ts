import { BootstrapJs } from '../../BootstrapJs'
import { emptyStyles } from '../../utils'

describe('Element Components: Carousel', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Carousel', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'carousel' })).toStrictEqual({
        classes: { carousel: true, slide: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets slide class', () => {
      expect(bsJs({ elementType: 'carousel', slide: true })).toStrictEqual({
        classes: { carousel: true, slide: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'carousel', slide: false })).toStrictEqual({
        classes: { carousel: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets fade class', () => {
      expect(bsJs({ elementType: 'carousel', fade: true })).toStrictEqual({
        classes: { carousel: true, slide: true, 'carousel-fade': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'carousel', fade: false })).toStrictEqual({
        classes: { carousel: true, slide: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Carousel Control', () => {
    test('applies directional class name', () => {
      expect(bsJs({ elementType: 'carousel-control', direction: 'prev' })).toStrictEqual({
        classes: { 'carousel-control-prev': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'carousel-control', direction: 'next' })).toStrictEqual({
        classes: { 'carousel-control-next': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Carousel Control Icon', () => {
    test('applies directional class name', () => {
      expect(bsJs({ elementType: 'carousel-control-icon', direction: 'prev' })).toStrictEqual({
        classes: { 'carousel-control-prev-icon': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'carousel-control-icon', direction: 'next' })).toStrictEqual({
        classes: { 'carousel-control-next-icon': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Carousel Item', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'carousel-item' })).toStrictEqual({
        classes: { 'carousel-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies active class name', () => {
      expect(bsJs({ elementType: 'carousel-item', active: true })).toStrictEqual({
        classes: { 'carousel-item': true, active: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('sets interval', () => {
      expect(bsJs({ elementType: 'carousel-item', interval: 100 })).toStrictEqual({
        classes: { 'carousel-item': true },
        inlineStyles: {},
        elementAttributes: { 'data-bs-interval': 100 }
      })
    })
  })

  describe('Carousel Indicator', () => {
    test('applies active class name', () => {
      expect(bsJs({ elementType: 'carousel-indicator', active: true })).toStrictEqual({
        classes: { active: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'carousel-indicator', active: false })).toStrictEqual(
        emptyStyles()
      )
    })
  })
})
