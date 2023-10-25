import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Visibility', () => {
  const bsJs = new BootstrapJs().bsJs

  test('sets applicable class', () => {
    expect(
      bsJs({
        visibility: true
      })
    ).toStrictEqual({
      classes: {
        visible: true
      },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(
      bsJs({
        visibility: false
      })
    ).toStrictEqual({
      classes: {
        invisible: true
      },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
