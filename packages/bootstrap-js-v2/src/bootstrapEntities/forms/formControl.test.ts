import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Forms: Form Controls', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Form Control', () => {
    testFormControl('form-control')
  })

  describe('Form Range', () => {
    testFormControl('form-range')
  })

  function testFormControl(elementType: 'form-control' | 'form-range') {
    test('applies element class name', () => {
      expect(bsJs({ elementType })).toStrictEqual({
        classes: { [elementType]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies size class name', () => {
      expect(bsJs({ elementType, size: 'lg' })).toStrictEqual({
        classes: { [elementType]: true, 'form-control-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies plaintext class name', () => {
      expect(bsJs({ elementType, plaintext: true })).toStrictEqual({
        classes: { [elementType]: true, 'form-control-plaintext': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    if (elementType === 'form-control') {
      test('applies color selector class name', () => {
        expect(bsJs({ elementType, isColorSelector: true })).toStrictEqual({
          classes: { [elementType]: true, 'form-control-color': true },
          inlineStyles: {},
          elementAttributes: {}
        })
      })
    }

    test('applies valid class name', () => {
      expect(bsJs({ elementType, isValid: true })).toStrictEqual({
        classes: { [elementType]: true, 'is-valid': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType, isValid: false })).toStrictEqual({
        classes: { [elementType]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies invalid class name', () => {
      expect(bsJs({ elementType, isInvalid: true })).toStrictEqual({
        classes: { [elementType]: true, 'is-invalid': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType, isInvalid: false })).toStrictEqual({
        classes: { [elementType]: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  }
})
