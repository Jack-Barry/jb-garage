import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Spinners', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies default element class name', () => {
    expect(bsJs({ elementType: 'spinner' })).toStrictEqual({
      classes: { 'spinner-border': true },
      inlineStyles: {},
      elementAttributes: { role: 'status' }
    })

    expect(bsJs({ elementType: 'spinner', spinnerType: 'border' })).toStrictEqual({
      classes: { 'spinner-border': true },
      inlineStyles: {},
      elementAttributes: { role: 'status' }
    })
  })

  test('applies spinner type class name', () => {
    expect(bsJs({ elementType: 'spinner', spinnerType: 'grow' })).toStrictEqual({
      classes: { 'spinner-grow': true },
      inlineStyles: {},
      elementAttributes: { role: 'status' }
    })
  })

  test('applies spinner size class names', () => {
    expect(bsJs({ elementType: 'spinner', spinnerSize: 'sm' })).toStrictEqual({
      classes: { 'spinner-border': true, 'spinner-border-sm': true },
      inlineStyles: {},
      elementAttributes: { role: 'status' }
    })

    expect(bsJs({ elementType: 'spinner', spinnerSize: 'sm', spinnerType: 'grow' })).toStrictEqual({
      classes: { 'spinner-grow': true, 'spinner-grow-sm': true },
      inlineStyles: {},
      elementAttributes: { role: 'status' }
    })
  })

  test('applies size inline styles', () => {
    expect(bsJs({ elementType: 'spinner', spinnerInlineStyleSize: '2rem' })).toStrictEqual({
      classes: { 'spinner-border': true },
      inlineStyles: { width: '2rem', height: '2rem' },
      elementAttributes: { role: 'status' }
    })
  })
})
