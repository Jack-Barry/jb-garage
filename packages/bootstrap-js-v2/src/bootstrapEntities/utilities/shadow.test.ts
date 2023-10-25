import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Shadow', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided value is true boolean', () => {
    test('sets shadow class', () => {
      expect(bsJs({ shadow: true })).toStrictEqual({
        classes: { shadow: true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided value is a string', () => {
    test('sets sized shadow class', () => {
      expect(bsJs({ shadow: 'lg' })).toStrictEqual({
        classes: { 'shadow-lg': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
