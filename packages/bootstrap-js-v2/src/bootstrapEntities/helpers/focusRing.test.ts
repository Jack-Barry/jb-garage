import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Focus Ring', () => {
  let bsJs: BootstrapJs['bsJs']

  beforeEach(() => {
    bsJs = new BootstrapJs().bsJs
  })

  test('applies expected class when value is true', () => {
    expect(bsJs({ focusRing: true })).toStrictEqual({
      classes: { 'focus-ring': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  describe('when value is a config object', () => {
    test('applies color when value is a string', () => {
      expect(bsJs({ focusRing: { color: 'primary' } })).toStrictEqual({
        classes: { 'focus-ring': true, 'focus-ring-primary': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    describe('with default prefix', () => {
      test('applies color when value is a css variable', () => {
        expect(bsJs({ focusRing: { color: { asCssVar: '#abcdef' } } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-color': '#abcdef' },
          elementAttributes: {}
        })
      })

      test('applies width as CSS variable', () => {
        expect(bsJs({ focusRing: { width: '2px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-width': '2px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { width: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-width': '0' },
          elementAttributes: {}
        })
      })

      test('applies opacity as CSS variable', () => {
        expect(bsJs({ focusRing: { opacity: '0.5' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-opacity': '0.5' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { opacity: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-opacity': '0' },
          elementAttributes: {}
        })
      })

      test('applies offsetX as CSS variable', () => {
        expect(bsJs({ focusRing: { offsetX: '5px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-x': '5px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { offsetX: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-x': '0' },
          elementAttributes: {}
        })
      })

      test('applies offsetY as CSS variable', () => {
        expect(bsJs({ focusRing: { offsetY: '3px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-y': '3px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { offsetY: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-y': '0' },
          elementAttributes: {}
        })
      })

      test('applies blur as CSS variable', () => {
        expect(bsJs({ focusRing: { blur: '7px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-blur': '7px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { blur: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--bs-focus-ring-blur': '0' },
          elementAttributes: {}
        })
      })
    })

    describe('with custom prefix', () => {
      beforeEach(() => {
        bsJs = new BootstrapJs('custom').bsJs
      })

      test('applies color when value is a css variable', () => {
        expect(bsJs({ focusRing: { color: { asCssVar: '#abcdef' } } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-color': '#abcdef' },
          elementAttributes: {}
        })
      })

      test('applies width as CSS variable', () => {
        expect(bsJs({ focusRing: { width: '2px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-width': '2px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { width: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-width': '0' },
          elementAttributes: {}
        })
      })

      test('applies opacity as CSS variable', () => {
        expect(bsJs({ focusRing: { opacity: '0.5' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-opacity': '0.5' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { opacity: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-opacity': '0' },
          elementAttributes: {}
        })
      })

      test('applies offsetX as CSS variable', () => {
        expect(bsJs({ focusRing: { offsetX: '5px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-x': '5px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { offsetX: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-x': '0' },
          elementAttributes: {}
        })
      })

      test('applies offsetY as CSS variable', () => {
        expect(bsJs({ focusRing: { offsetY: '3px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-y': '3px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { offsetY: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-y': '0' },
          elementAttributes: {}
        })
      })

      test('applies blur as CSS variable', () => {
        expect(bsJs({ focusRing: { blur: '7px' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-blur': '7px' },
          elementAttributes: {}
        })

        expect(bsJs({ focusRing: { blur: '0' } })).toStrictEqual({
          classes: { 'focus-ring': true },
          inlineStyles: { '--custom-focus-ring-blur': '0' },
          elementAttributes: {}
        })
      })
    })
  })
})
