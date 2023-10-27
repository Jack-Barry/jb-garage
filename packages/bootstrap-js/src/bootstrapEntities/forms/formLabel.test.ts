import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Forms: Form Label', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'form-label' })).toStrictEqual({
      classes: { 'form-label': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies column class name', () => {
    expect(bsJs({ elementType: 'form-label', asColumn: true })).toStrictEqual({
      classes: { 'form-label': true, 'col-form-label': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-label', asColumn: false })).toStrictEqual({
      classes: { 'form-label': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-label', asColumn: 'lg' })).toStrictEqual({
      classes: { 'form-label': true, 'col-form-label-lg': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
