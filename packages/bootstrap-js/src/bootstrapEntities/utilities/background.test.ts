import { BootstrapJs } from '../../BootstrapJs'

describe('Utilities: Background', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected background color class', () => {
    expect(bsJs({ background: 'black' })).toStrictEqual({
      classes: { 'bg-black': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  describe('when background is provided as config object', () => {
    test('applies background color class', () => {
      expect(bsJs({ background: { color: 'body-secondary' } })).toStrictEqual({
        classes: { 'bg-body-secondary': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies background gradient class', () => {
      expect(bsJs({ background: { gradient: true } })).toStrictEqual({
        classes: { 'bg-gradient': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies opacity styles', () => {
      expect(bsJs({ background: { opacity: '10' } })).toStrictEqual({
        classes: { 'bg-opacity-10': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ background: { opacity: { asCssVar: '50%' } } })).toStrictEqual({
        classes: {},
        inlineStyles: { '--bs-bg-opacity': '50%' },
        elementAttributes: {}
      })
    })
  })
})
