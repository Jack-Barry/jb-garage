import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Color and Background', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class when value is present', () => {
    expect(bsJs({ colorAndBackground: 'primary' })).toStrictEqual({
      classes: { 'text-bg-primary': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
