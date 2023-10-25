import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Z Index', () => {
  const bsJs = new BootstrapJs().bsJs

  test('handles 0 value', () => {
    expect(bsJs({ zIndex: 0 })).toStrictEqual({
      classes: { 'z-0': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ zIndex: '0' })).toStrictEqual({
      classes: { 'z-0': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('handles positive values', () => {
    expect(bsJs({ zIndex: 1 })).toStrictEqual({
      classes: { 'z-1': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ zIndex: '1' })).toStrictEqual({
      classes: { 'z-1': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('handles negative values', () => {
    expect(bsJs({ zIndex: -1 })).toStrictEqual({
      classes: { 'z-n1': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ zIndex: '-1' })).toStrictEqual({
      classes: { 'z-n1': true },
      inlineStyles: {},
      elementAttributes: {}
    })

    expect(bsJs({ zIndex: 'n1' })).toStrictEqual({
      classes: { 'z-n1': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
