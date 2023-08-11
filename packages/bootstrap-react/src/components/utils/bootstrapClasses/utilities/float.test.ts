import { brUtilsFloatStyles } from './float'

describe('Bootstrap Classes: Utilities: Float', () => {
  test('sets classes as expected based on input', () => {
    expect(
      brUtilsFloatStyles({
        brUtilsFloat: 'start',
        brUtilsFloatSm: 'end',
        brUtilsFloatMd: 'none',
        brUtilsFloatLg: 'start',
        brUtilsFloatXl: 'end',
        brUtilsFloat2xl: 'none'
      })
    ).toStrictEqual({
      classes: {
        'float-start': true,
        'float-sm-end': true,
        'float-md-none': true,
        'float-lg-start': true,
        'float-xl-end': true,
        'float-xxl-none': true
      }
    })
  })
})
