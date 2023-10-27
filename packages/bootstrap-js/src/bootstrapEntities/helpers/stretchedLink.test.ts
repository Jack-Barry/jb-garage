import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Stretched Link', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class', () => {
    expect(bsJs({ elementType: 'link', stretch: true })).toStrictEqual({
      classes: { 'stretched-link': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
