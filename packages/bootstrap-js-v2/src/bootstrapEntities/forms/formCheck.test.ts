import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Forms: Form Check', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Form Check', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'form-check' })).toStrictEqual({
        classes: { 'form-check': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies disabled class name', () => {
      expect(bsJs({ elementType: 'form-check', disabled: true })).toStrictEqual({
        classes: { 'form-check': true, disabled: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'form-check', disabled: false })).toStrictEqual({
        classes: { 'form-check': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Form Check Input', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'form-check-input' })).toStrictEqual({
        classes: { 'form-check-input': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies valid class name', () => {
      expect(bsJs({ elementType: 'form-check-input', isValid: true })).toStrictEqual({
        classes: { 'form-check-input': true, 'is-valid': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'form-check-input', isValid: false })).toStrictEqual({
        classes: { 'form-check-input': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies invalid class name', () => {
      expect(bsJs({ elementType: 'form-check-input', isInvalid: true })).toStrictEqual({
        classes: { 'form-check-input': true, 'is-invalid': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'form-check-input', isInvalid: false })).toStrictEqual({
        classes: { 'form-check-input': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
