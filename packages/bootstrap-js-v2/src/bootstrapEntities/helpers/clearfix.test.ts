import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Clearfix', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies clearfix class when value is true', () => {
    expect(bsJs({ clearfix: true })).toStrictEqual({
      classes: { clearfix: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
