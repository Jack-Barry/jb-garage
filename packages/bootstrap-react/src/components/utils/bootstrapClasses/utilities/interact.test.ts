import { brUtilsInteractStyles } from './interact'

describe('Bootstrap Classes: Utilities: Interact', () => {
  test('sets classes as expected based on input', () => {
    expect(
      brUtilsInteractStyles({
        select: 'all',
        pointer: 'none'
      })
    ).toStrictEqual({
      classes: {
        'user-select-all': true,
        'pe-none': true
      }
    })
  })
})
