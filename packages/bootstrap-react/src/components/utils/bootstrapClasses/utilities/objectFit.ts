import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrUtilsBreakpointBasedOptions } from '../../BrElement'
import { BrStyles } from '../brStyles'

export type BootstrapObjectFit = LiteralUnion<
  'contain' | 'cover' | 'fill' | 'scale ' | 'none',
  string
>

export type BrUtilsObjectFitOptions =
  | BootstrapObjectFit
  | BrUtilsBreakpointBasedOptions<BootstrapObjectFit>

export function brUtilsObjectFitStyles(options?: BrUtilsObjectFitOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (typeof options === 'string') {
    return { classes: { [`object-fit-${options}`]: true } }
  }

  const classes: BrStyles['classes'] = {}

  Object.entries(options).forEach(([breakpoint, value]) => {
    if (breakpoint === 'brAllBreakpoints') {
      classes[`object-fit-${value}`] = true
    } else {
      classes[`object-fit-${breakpoint}-${value}`] = true
    }
  })

  return { classes }
}
