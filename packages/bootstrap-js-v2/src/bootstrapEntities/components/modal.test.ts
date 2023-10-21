import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Modals', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Modal', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'modal' })).toStrictEqual({
        classes: { modal: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies fade class name', () => {
      expect(bsJs({ elementType: 'modal', fade: true })).toStrictEqual({
        classes: { modal: true, fade: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'modal', fade: false })).toStrictEqual({
        classes: { modal: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Modal Dialog', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'modal-dialog' })).toStrictEqual({
        classes: { 'modal-dialog': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies scrollable class name', () => {
      expect(bsJs({ elementType: 'modal-dialog', scrollable: true })).toStrictEqual({
        classes: { 'modal-dialog': true, 'modal-dialog-scrollable': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'modal-dialog', scrollable: false })).toStrictEqual({
        classes: { 'modal-dialog': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies centered class name', () => {
      expect(bsJs({ elementType: 'modal-dialog', centered: true })).toStrictEqual({
        classes: { 'modal-dialog': true, 'modal-dialog-centered': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'modal-dialog', centered: false })).toStrictEqual({
        classes: { 'modal-dialog': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies size class name', () => {
      expect(bsJs({ elementType: 'modal-dialog', size: 'lg' })).toStrictEqual({
        classes: { 'modal-dialog': true, 'modal-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    describe('full screen', () => {
      test('applies breakpoint independent class name when fullScreen is true', () => {
        expect(bsJs({ elementType: 'modal-dialog', fullScreen: true })).toStrictEqual({
          classes: { 'modal-dialog': true, 'modal-fullscreen': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })

      test('applies breakpoint specific class name when fullScreen is string', () => {
        expect(bsJs({ elementType: 'modal-dialog', fullScreen: 'lg' })).toStrictEqual({
          classes: { 'modal-dialog': true, 'modal-fullscreen-lg-down': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    })
  })
})
