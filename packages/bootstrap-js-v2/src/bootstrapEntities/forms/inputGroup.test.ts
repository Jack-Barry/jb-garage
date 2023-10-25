import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Forms: Input Group', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'input-group' })).toStrictEqual({
      classes: { 'input-group': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies size class name', () => {
    expect(bsJs({ elementType: 'input-group', inputGroupSize: 'lg' })).toStrictEqual({
      classes: { 'input-group': true, 'input-group-lg': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies has validation class name', () => {
    expect(bsJs({ elementType: 'input-group', hasValidation: true })).toStrictEqual({
      classes: { 'input-group': true, 'has-validation': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'input-group', hasValidation: false })).toStrictEqual({
      classes: { 'input-group': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
