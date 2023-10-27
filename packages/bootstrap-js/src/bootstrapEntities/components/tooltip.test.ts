import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Tooltip', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies element class name', () => {
    expect(bsJs({ elementType: 'tooltip' })).toStrictEqual({
      classes: { tooltip: true, 'bs-tooltip-auto': true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })

  test('applies arrow class name', () => {
    expect(bsJs({ elementType: 'tooltip', arrow: true })).toStrictEqual({
      classes: { tooltip: true, 'bs-tooltip-auto': true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })

    expect(bsJs({ elementType: 'tooltip', arrow: false })).toStrictEqual({
      classes: { tooltip: true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })

  test('applies show class name', () => {
    expect(bsJs({ elementType: 'tooltip', show: true })).toStrictEqual({
      classes: { tooltip: true, 'bs-tooltip-auto': true, show: true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })

    expect(bsJs({ elementType: 'tooltip', show: false })).toStrictEqual({
      classes: { tooltip: true, 'bs-tooltip-auto': true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })

  test('applies fade class name', () => {
    expect(bsJs({ elementType: 'tooltip', fade: true })).toStrictEqual({
      classes: { tooltip: true, 'bs-tooltip-auto': true, fade: true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })

    expect(bsJs({ elementType: 'tooltip', fade: false })).toStrictEqual({
      classes: { tooltip: true, 'bs-tooltip-auto': true },
      inlineStyles: {},
      elementAttributes: { role: 'tooltip' }
    })
  })
})
