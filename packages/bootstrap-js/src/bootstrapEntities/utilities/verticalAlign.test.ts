import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Vertical Align', () => {
  const bsJs = new BootstrapJs().bsJs

  test('sets applicable class', () => {
    expect(
      bsJs({
        verticalAlign: 'baseline'
      })
    ).toStrictEqual({
      classes: {
        'align-baseline': true
      },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
