import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Overflow', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided value is a string', () => {
    test('sets overflow class', () => {
      expect(bsJs({ overflow: 'scroll' })).toStrictEqual({
        classes: { 'overflow-scroll': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('handles axis values', () => {
      expect(bsJs({ overflow: { x: 'auto', y: 'scroll' } })).toStrictEqual({
        classes: { 'overflow-x-auto': true, 'overflow-y-scroll': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
