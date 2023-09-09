import { BootstrapJs } from '../BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from '../constants'

describe('Bootstrap Utilities: Interact', () => {
  test('sets classes as expected based on input', () => {
    expect(
      new BootstrapJs().bsJs({
        [ALL_BREAKPOINTS_KEY]: {
          interactions: {
            select: 'all',
            pointer: 'none'
          }
        }
      })
    ).toStrictEqual({
      classes: {
        'user-select-all': true,
        'pe-none': true
      },
      inlineStyles: {}
    })
  })
})
