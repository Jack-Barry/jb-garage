import { BootstrapJs } from '../../BootstrapJs'
import { emptyStyles } from '../../utils'

describe('Bootstrap Entities: Forms: Form Group', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies floating labels class name', () => {
    expect(bsJs({ elementType: 'form-group', floatingLabels: true })).toStrictEqual({
      classes: { 'form-floating': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-group', floatingLabels: false })).toStrictEqual(emptyStyles())
  })

  test('applies is invalid class name', () => {
    expect(bsJs({ elementType: 'form-group', isInvalid: true })).toStrictEqual({
      classes: { 'is-invalid': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'form-group', isInvalid: false })).toStrictEqual(emptyStyles())
  })
})
