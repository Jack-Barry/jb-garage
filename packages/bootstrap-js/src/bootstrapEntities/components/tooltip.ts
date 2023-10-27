import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass, applyShowableStyles } from '../../elements/utils'

export function applyTooltipStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'tooltip'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyShowableStyles(result, options)

  if (options.fade !== false) {
    result.classes['fade'] = true
  }

  if (options.arrow !== false) {
    result.classes['bs-tooltip-auto'] = true
  }

  result.elementAttributes['role'] = 'tooltip'
}
