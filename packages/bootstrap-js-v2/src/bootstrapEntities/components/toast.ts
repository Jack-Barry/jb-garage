import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export function applyToastStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'toast'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.fade !== false) {
    result.classes['fade'] = true
  }
}
