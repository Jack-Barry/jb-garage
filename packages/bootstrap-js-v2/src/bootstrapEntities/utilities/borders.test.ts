import { BootstrapJs } from '../../BootstrapJs'
import { emptyStyles } from '../../utils'

describe('Utilities: Borders', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies border class when value is true', () => {
    expect(bsJs({ border: true })).toStrictEqual({
      classes: { border: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('sets border-0 class when value is false', () => {
    expect(bsJs({ border: false })).toStrictEqual({
      classes: { border: true, 'border-0': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  describe('when value provided is a config object', () => {
    describe('when width is a number', () => {
      test('sets border width', () => {
        expect(bsJs({ border: { width: '0' } })).toStrictEqual({
          classes: { border: true, 'border-0': true },
          inlineStyles: {},
          elementAttributes: {}
        })

        expect(bsJs({ border: { width: 0 } })).toStrictEqual({
          classes: { border: true, 'border-0': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    describe('when width is a string', () => {
      test('sets border width', () => {
        expect(bsJs({ border: { width: '1' } })).toStrictEqual({
          classes: { border: true, 'border-1': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    describe('when rounded is a boolean', () => {
      test('does not set roundedness if rounded is false', () => {
        expect(bsJs({ border: { radius: false } })).toStrictEqual(emptyStyles())
      })

      test('sets roundedness if rounded is true', () => {
        expect(bsJs({ border: { radius: true } })).toStrictEqual({
          classes: { rounded: true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    describe('when rounded is a string', () => {
      test('sets roundedness appropriately', () => {
        expect(bsJs({ border: { radius: 'circle' } })).toStrictEqual({
          classes: { 'rounded-circle': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    describe('when rounded is a number', () => {
      test('sets roundedness appropriately', () => {
        expect(bsJs({ border: { radius: 0 } })).toStrictEqual({
          classes: { 'rounded-0': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    test('applies opacity styles', () => {
      expect(bsJs({ border: { opacity: '10' } })).toStrictEqual({
        classes: { 'border-opacity-10': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ border: { opacity: { asCssVar: '10' } } })).toStrictEqual({
        classes: {},
        inlineStyles: { '--bs-border-opacity': '10' },
        elementAttributes: {}
      })
    })

    describe('when color is a string', () => {
      test('uses color for border', () => {
        expect(bsJs({ border: { color: 'primary' } })).toStrictEqual({
          classes: { border: true, 'border-primary': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })

    describe('when directional props are provided', () => {
      describe('when directional prop is a boolean', () => {
        test('applies appropriate classes when directional border is true', () => {
          expect(bsJs({ border: { top: true } })).toStrictEqual({
            classes: {
              'border-top': true
            },
            inlineStyles: {},
            elementAttributes: {}
          })
        })

        test('applies appropriate classes when directional border is false', () => {
          expect(bsJs({ border: { top: false } })).toStrictEqual({
            classes: {
              'border-top-0': true,
              border: true
            },
            inlineStyles: {},
            elementAttributes: {}
          })
        })
      })

      describe('when directional prop is config object', () => {
        test('applies intended classes for width', () => {
          expect(bsJs({ border: { bottom: { width: '0' } } })).toStrictEqual({
            classes: { 'border-bottom-0': true },
            inlineStyles: {},
            elementAttributes: {}
          })
        })
      })
    })
  })
})
