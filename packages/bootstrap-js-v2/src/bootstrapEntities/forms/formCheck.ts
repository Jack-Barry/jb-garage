import { BsJsDisableableElementOptions, BsJsOptions, BsJsStyles } from '../../_types'
import { applyDisabledStyles, applyElementNameAsClass } from '../../elements/utils'

export type BsJsFormCheckOptions = BsJsDisableableElementOptions
export function applyFormCheckStyles(result: BsJsStyles, options: BsJsOptions<'form-check'>) {
  applyElementNameAsClass(result, options.elementType)
  applyDisabledStyles(result, options)
}

export type BsJsFormCheckInputOptions = {
  /** Input is valid */
  isValid?: boolean
  /** Input is not valid */
  isInvalid?: boolean
}
export function applyFormCheckInputStyles(
  result: BsJsStyles,
  options: BsJsOptions<'form-check-input'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.isValid) {
    result.classes['is-valid'] = true
  }

  if (options.isInvalid) {
    result.classes['is-invalid'] = true
  }
}
