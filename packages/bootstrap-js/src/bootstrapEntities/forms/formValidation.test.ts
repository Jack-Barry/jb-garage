import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Forms: Form Validation', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies feedback class name when not presented as tooltip', () => {
    expect(bsJs({ elementType: 'form-validation' })).toStrictEqual({
      classes: { 'invalid-feedback': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-validation', feedbackType: 'valid' })).toStrictEqual({
      classes: { 'valid-feedback': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-validation', feedbackType: 'invalid' })).toStrictEqual({
      classes: { 'invalid-feedback': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-validation', asTooltip: false })).toStrictEqual({
      classes: { 'invalid-feedback': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(
      bsJs({ elementType: 'form-validation', feedbackType: 'valid', asTooltip: false })
    ).toStrictEqual({
      classes: { 'valid-feedback': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies tooltip class name when presented as tooltip', () => {
    expect(bsJs({ elementType: 'form-validation', asTooltip: true })).toStrictEqual({
      classes: { 'invalid-tooltip': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(
      bsJs({ elementType: 'form-validation', asTooltip: true, feedbackType: 'valid' })
    ).toStrictEqual({
      classes: { 'valid-tooltip': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(
      bsJs({ elementType: 'form-validation', asTooltip: true, feedbackType: 'invalid' })
    ).toStrictEqual({
      classes: { 'invalid-tooltip': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
