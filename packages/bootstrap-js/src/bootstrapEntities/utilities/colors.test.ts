import { BootstrapJs } from '../../BootstrapJs'

describe('Utilities: Colors', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies expected text color class', () => {
    expect(bsJs({ color: 'bg-danger' })).toStrictEqual({
      classes: { 'text-bg-danger': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
