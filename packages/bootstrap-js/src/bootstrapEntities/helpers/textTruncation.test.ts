import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Helpers: Text Truncation', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected class', () => {
    expect(bsJs({ text: { truncate: true } })).toStrictEqual({
      classes: { 'text-truncate': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
