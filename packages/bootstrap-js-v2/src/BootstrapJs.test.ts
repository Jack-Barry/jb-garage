import { BootstrapJs } from './BootstrapJs'
import { emptyStyles } from './utils'

describe('BootstrapJs', () => {
  describe('with no custom prefix', () => {
    const bsJs = new BootstrapJs().bsJs

    describe('bsJs', () => {
      test('returns early when no values are provided', () => {
        expect(bsJs()).toStrictEqual(emptyStyles())
      })
    })
  })
})
