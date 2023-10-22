import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Forms: Form Select', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'form-select' })).toStrictEqual({
      classes: { 'form-select': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies size class name', () => {
    expect(bsJs({ elementType: 'form-select', size: 'lg' })).toStrictEqual({
      classes: { 'form-select': true, 'form-select-lg': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies valid class name', () => {
    expect(bsJs({ elementType: 'form-select', isValid: true })).toStrictEqual({
      classes: { 'form-select': true, 'is-valid': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-select', isValid: false })).toStrictEqual({
      classes: { 'form-select': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies invalid class name', () => {
    expect(bsJs({ elementType: 'form-select', isInvalid: true })).toStrictEqual({
      classes: { 'form-select': true, 'is-invalid': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-select', isInvalid: false })).toStrictEqual({
      classes: { 'form-select': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
