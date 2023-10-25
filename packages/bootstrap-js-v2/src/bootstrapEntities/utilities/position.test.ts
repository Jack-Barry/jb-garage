import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Position', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided value is a string', () => {
    test('sets overflow class', () => {
      expect(bsJs({ position: 'static' })).toStrictEqual({
        classes: { 'position-static': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided value is a config object', () => {
    test('applies expected position classes', () => {
      expect(
        bsJs({
          position: {
            position: 'absolute',
            top: '50',
            bottom: '100',
            end: '50',
            start: '0',
            translateMiddle: true,
            translateMiddleX: true,
            translateMiddleY: true
          }
        })
      ).toStrictEqual({
        classes: {
          'position-absolute': true,
          'top-50': true,
          'bottom-100': true,
          'end-50': true,
          'start-0': true,
          'translate-middle': true,
          'translate-middle-x': true,
          'translate-middle-y': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
