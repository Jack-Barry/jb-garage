import { BootstrapJs } from '../BootstrapJs'
import { emptyStyles } from '../utils'

describe('Common: Theme', () => {
  const bsJs = new BootstrapJs().bsJs

  test('when no theme is provided', () => {
    expect(bsJs({ theme: undefined })).toStrictEqual(emptyStyles())
  })

  test('when theme is provided', () => {
    expect(bsJs({ theme: 'dark' })).toStrictEqual({
      classes: {},
      inlineStyles: {},
      elementAttributes: { ['data-bs-theme']: 'dark' }
    })
  })

  test('when theme is provided with custom prefix', () => {
    expect(new BootstrapJs('custom').bsJs({ theme: 'dark' })).toStrictEqual({
      classes: {},
      inlineStyles: {},
      elementAttributes: { ['data-custom-theme']: 'dark' }
    })
  })
})
