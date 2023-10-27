import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Popover', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'popover' })).toStrictEqual({
      classes: { popover: true, 'bs-popover-auto': true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })

  test('applies arrow class name', () => {
    expect(bsJs({ elementType: 'popover', arrow: true })).toStrictEqual({
      classes: { popover: true, 'bs-popover-auto': true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })

    expect(bsJs({ elementType: 'popover', arrow: false })).toStrictEqual({
      classes: { popover: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })

  test('applies show class name', () => {
    expect(bsJs({ elementType: 'popover', show: true })).toStrictEqual({
      classes: { popover: true, 'bs-popover-auto': true, show: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })

    expect(bsJs({ elementType: 'popover', show: false })).toStrictEqual({
      classes: { popover: true, 'bs-popover-auto': true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })

  test('applies fade class name', () => {
    expect(bsJs({ elementType: 'popover', fade: true })).toStrictEqual({
      classes: { popover: true, 'bs-popover-auto': true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })

    expect(bsJs({ elementType: 'popover', fade: false })).toStrictEqual({
      classes: { popover: true, 'bs-popover-auto': true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })
})
