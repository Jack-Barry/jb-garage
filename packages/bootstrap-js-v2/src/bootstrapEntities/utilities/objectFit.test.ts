import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Object Fit', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided value is not breakpoint specific', () => {
    test('sets object fit class', () => {
      expect(bsJs({ objectFit: 'contain' })).toStrictEqual({
        classes: { 'object-fit-contain': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided value is breakpoint specific', () => {
    test('handles responsive values', () => {
      expect(bsJs({ breakpoints: { sm: { objectFit: 'contain' } } })).toStrictEqual({
        classes: { 'object-fit-sm-contain': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
