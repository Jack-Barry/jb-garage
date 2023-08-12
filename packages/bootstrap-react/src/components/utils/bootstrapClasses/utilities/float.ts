import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrUtilsBreakpointBasedOptions } from '../../BrElement'
import { BrStyles } from '../brStyles'

export type BrUtilsFloatType = LiteralUnion<'start' | 'end' | 'none', string>
export type BrUtilsFloatOptions = BrUtilsFloatType | BrUtilsBreakpointBasedOptions<BrUtilsFloatType>

export function brUtilsFloatStyles(options?: BrUtilsFloatOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (typeof options === 'string') {
    return { classes: { [`float-${options}`]: true } }
  }

  const classes: BrStyles['classes'] = {}

  Object.entries(options).forEach(([breakpoint, floatType]) => {
    if (breakpoint === 'brAllBreakpoints') {
      classes[`float-${floatType}`] = true
    } else {
      classes[`float-${breakpoint}-${floatType}`] = true
    }
  })

  return { classes }
}
