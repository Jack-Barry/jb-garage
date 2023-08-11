import { BrElementCommonProps } from '../../BrElement'
import { BrStyles } from '../brStyles'

export type BrUtilsFloatType = 'start' | 'end' | 'none'
export type BrUtilsFloatOptions = Pick<
  BrElementCommonProps,
  | 'brUtilsFloat'
  | 'brUtilsFloatSm'
  | 'brUtilsFloatMd'
  | 'brUtilsFloatLg'
  | 'brUtilsFloatXl'
  | 'brUtilsFloat2xl'
>

export function brUtilsFloatStyles(options: BrUtilsFloatOptions): BrStyles {
  const classes: BrStyles['classes'] = {}

  Object.entries(options).forEach(([key, floatType]) => {
    const size = key.replace('brUtilsFloat', '').toLowerCase()
    if (!size) {
      classes[`float-${floatType}`] = true
    } else {
      classes[`float-${size}-${floatType}`] = true
    }
  })

  return { classes }
}
