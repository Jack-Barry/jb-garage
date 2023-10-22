import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Toasts', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Toast', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'toast' })).toStrictEqual({
        classes: { toast: true, fade: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies fade class name', () => {
      expect(bsJs({ elementType: 'toast', fade: true })).toStrictEqual({
        classes: { toast: true, fade: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'toast', fade: false })).toStrictEqual({
        classes: { toast: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
