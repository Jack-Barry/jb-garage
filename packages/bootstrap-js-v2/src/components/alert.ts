import { BsJsOptions, BsJsStyles } from '../_types'
import { applyElementNameAsClass, applyShowableStyles } from '../elements/utils'

export function applyAlertStyles(result: BsJsStyles, options: BsJsOptions<'alert'>) {
  applyElementNameAsClass(result, options.elementType)
  applyShowableStyles(result, options)
}
