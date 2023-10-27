import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Float', () => {
  const bsJs = new BootstrapJs().bsJs

  describe('when provided value is not breakpoint specific', () => {
    test('sets float class', () => {
      expect(bsJs({ float: 'end' })).toStrictEqual({
        classes: { 'float-end': true },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })

  describe('when provided value is breakpoint specific', () => {
    test('sets float classes as expected', () => {
      expect(
        bsJs({
          float: 'start',
          breakpoints: {
            sm: { float: 'end' },
            md: { float: 'none' },
            lg: { float: 'start' },
            xl: { float: 'end' },
            xxl: { float: 'none' }
          }
        })
      ).toStrictEqual({
        classes: {
          'float-start': true,
          'float-sm-end': true,
          'float-md-none': true,
          'float-lg-start': true,
          'float-xl-end': true,
          'float-xxl-none': true
        },
        inlineStyles: {},
        elementAttributes: {}
      })
    })
  })
})
