import { BootstrapJs } from './BootstrapJs'
import { emptyStyles } from './utils/emptyStyles'

describe('BootstrapJs Class', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('Content Utils: Images', () => {
    test('returns empty object when no value is provided', () => {
      expect(bs.bsJsImage()).toStrictEqual(emptyStyles())
      expect(bs.bsJsImage({})).toStrictEqual(emptyStyles())
    })

    test('sets expected class when fluid is true', () => {
      expect(bs.bsJsImage({ fluid: true })).toStrictEqual({
        classes: {
          'img-fluid': true
        },
        inlineStyles: {}
      })
    })

    test('sets expected class when thumbnail is true', () => {
      expect(bs.bsJsImage({ thumbnail: true })).toStrictEqual({
        classes: {
          'img-thumbnail': true
        },
        inlineStyles: {}
      })
    })
  })
})
