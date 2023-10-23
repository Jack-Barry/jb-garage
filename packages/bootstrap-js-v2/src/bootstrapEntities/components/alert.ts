import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass, applyShowableStyles } from '../../elements/utils'

export function applyAlertStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'alert'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyShowableStyles(result, options)
}
