import { BootstrapJs } from '../../BootstrapJs'
import { emptyStyles } from '../../utils'

describe('Element Components: Image', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies fluid class name', () => {
    expect(bsJs({ elementType: 'img', fluid: true })).toStrictEqual({
      classes: { 'img-fluid': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'img', fluid: false })).toStrictEqual(emptyStyles())
  })

  test('applies thumbnail class name', () => {
    expect(bsJs({ elementType: 'img', thumbnail: true })).toStrictEqual({
      classes: { 'img-thumbnail': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'img', thumbnail: false })).toStrictEqual(emptyStyles())
  })
})
