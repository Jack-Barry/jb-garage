import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: List Groups', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('List Group Item', () => {
    test('applies element class name', () => {
      expect(bsJs({ elementType: 'list-group-item' })).toStrictEqual({
        classes: { 'list-group-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies active class name', () => {
      expect(bsJs({ elementType: 'list-group-item', active: true })).toStrictEqual({
        classes: { 'list-group-item': true, active: true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'list-group-item', active: false })).toStrictEqual({
        classes: { 'list-group-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })

    test('applies action class name', () => {
      expect(bsJs({ elementType: 'list-group-item', action: true })).toStrictEqual({
        classes: { 'list-group-item': true, 'list-group-item-action': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'list-group-item', action: false })).toStrictEqual({
        classes: { 'list-group-item': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
