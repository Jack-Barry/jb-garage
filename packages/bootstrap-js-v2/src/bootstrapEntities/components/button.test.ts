import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Buttons', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Button', () => {
    test('applies base class name', () => {
      expect(bsJs({ elementType: 'btn' })).toStrictEqual({
        classes: { btn: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies "active" class name', () => {
      expect(bsJs({ elementType: 'btn', active: true })).toStrictEqual({
        classes: { btn: true, active: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'btn', active: false })).toStrictEqual({
        classes: { btn: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies "disabled" class name', () => {
      expect(bsJs({ elementType: 'btn', disabled: true })).toStrictEqual({
        classes: { btn: true, disabled: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'btn', disabled: false })).toStrictEqual({
        classes: { btn: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies "color" class name', () => {
      expect(bsJs({ elementType: 'btn', variant: 'danger' })).toStrictEqual({
        classes: { btn: true, 'btn-danger': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies "size" class name', () => {
      expect(bsJs({ elementType: 'btn', buttonSize: 'lg' })).toStrictEqual({
        classes: { btn: true, 'btn-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('Button Group', () => {
    test('applies base class name', () => {
      expect(bsJs({ elementType: 'btn-group' })).toStrictEqual({
        classes: { 'btn-group': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies vertical option', () => {
      expect(bsJs({ elementType: 'btn-group', vertical: true })).toStrictEqual({
        classes: { 'btn-group-vertical': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'btn-group', vertical: false })).toStrictEqual({
        classes: { 'btn-group': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies size option', () => {
      expect(bsJs({ elementType: 'btn-group', buttonGroupSize: 'lg' })).toStrictEqual({
        classes: { 'btn-group': true, 'btn-group-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
