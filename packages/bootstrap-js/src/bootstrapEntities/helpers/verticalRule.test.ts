import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Vertical Rule', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class', () => {
    expect(bsJs({ elementType: 'vr' })).toStrictEqual({
      classes: { vr: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
