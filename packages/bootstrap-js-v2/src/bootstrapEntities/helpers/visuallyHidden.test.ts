import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Visually Hidden', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class', () => {
    expect(bsJs({ visuallyHidden: true })).toStrictEqual({
      classes: { 'visually-hidden': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
