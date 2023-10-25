import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Alerts', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'alert' })).toStrictEqual({
      classes: { alert: true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })
  })

  test('applies show class name', () => {
    expect(bsJs({ elementType: 'alert', show: true })).toStrictEqual({
      classes: { alert: true, show: true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })

    expect(bsJs({ elementType: 'alert', show: false })).toStrictEqual({
      classes: { alert: true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })
  })

  test('applies variant class name', () => {
    expect(bsJs({ elementType: 'alert', variant: 'danger' })).toStrictEqual({
      classes: { alert: true, 'alert-danger': true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })
  })

  test('applies dismissible class name', () => {
    expect(bsJs({ elementType: 'alert', dismissible: true })).toStrictEqual({
      classes: { alert: true, 'alert-dismissible': true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })

    expect(bsJs({ elementType: 'alert', dismissible: false })).toStrictEqual({
      classes: { alert: true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })
  })

  test('applies fade class name', () => {
    expect(bsJs({ elementType: 'alert', fade: true })).toStrictEqual({
      classes: { alert: true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })

    expect(bsJs({ elementType: 'alert', fade: false })).toStrictEqual({
      classes: { alert: true },
      inlineStyles: {},
      elementAttributes: { role: 'alert' }
    })
  })
})
