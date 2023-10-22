import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export function applyToastStyles(result: BsJsStyles, options: BsJsOptions<'toast'>) {
  applyElementNameAsClass(result, options.elementType)

  if (options.fade !== false) {
    result.classes['fade'] = true
  }
}
