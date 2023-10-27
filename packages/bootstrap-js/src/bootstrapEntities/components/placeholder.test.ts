import { BootstrapJs } from '../../BootstrapJs'

describe('Element Components: Placeholder', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('Placeholder Animation', () => {
    test('applies element class name for specified animation', () => {
      expect(bsJs({ elementType: 'placeholder-animation', animation: 'glow' })).toStrictEqual({
        classes: { 'placeholder-glow': true },
        inlineStyles: {},
        elementAttributes: {}
      })

      expect(bsJs({ elementType: 'placeholder-animation', animation: 'wave' })).toStrictEqual({
        classes: { 'placeholder-wave': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
