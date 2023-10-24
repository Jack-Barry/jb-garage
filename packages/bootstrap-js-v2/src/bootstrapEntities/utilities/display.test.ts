import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Utilities: Display', () => {
  const bsJs = new BootstrapJs().bsJs

  test('applies breakpoint agnostic class name', () => {
    expect(bsJs({ display: 'block' })).toStrictEqual({
      classes: { 'd-block': true },
      inlineStyles: {},
      elementAttributes: {}
    })
  })

  test('applies breakpoint specific class names', () => {
    expect(
      bsJs({
        breakpoints: {
          sm: { display: 'flex' },
          md: { display: 'grid' },
          lg: { display: 'inline' },
          xl: { display: 'inline-block' },
          xxl: { display: 'inline-flex' }
        }
      })
    ).toStrictEqual({
      classes: {
        'd-sm-flex': true,
        'd-md-grid': true,
        'd-lg-inline': true,
        'd-xl-inline-block': true,
        'd-xxl-inline-flex': true
      },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
