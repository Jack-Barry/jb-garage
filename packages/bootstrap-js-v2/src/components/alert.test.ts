import { BootstrapJs } from '../BootstrapJs'

describe('Element Components: Alerts', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies base class name', () => {
    expect(bsJs({ elementType: 'alert' })).toStrictEqual({
      classes: { alert: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies "show" class name', () => {
    expect(bsJs({ elementType: 'alert', show: true })).toStrictEqual({
      classes: { alert: true, show: true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ elementType: 'alert', show: false })).toStrictEqual({
      classes: { alert: true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
