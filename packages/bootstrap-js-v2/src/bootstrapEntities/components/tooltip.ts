import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass, applyShowableStyles } from '../../elements/utils'

export function applyTooltipStyles(result: BsJsStyles, options: BsJsOptions<'tooltip'>) {
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
