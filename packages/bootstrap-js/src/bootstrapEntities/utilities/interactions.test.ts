import { BootstrapJs } from '../../BootstrapJs'

describe('Bootstrap Entities: Utilities: Interactions', () => {
  test('sets classes as expected based on input', () => {
    expect(
      new BootstrapJs().bsJs({
        interactions: {
          select: 'all',
          pointer: 'none'
        }
      })
    ).toStrictEqual({
      classes: {
        'user-select-all': true,
        'pe-none': true
      },
      inlineStyles: {},
      elementAttributes: {}
    })
  })
})
