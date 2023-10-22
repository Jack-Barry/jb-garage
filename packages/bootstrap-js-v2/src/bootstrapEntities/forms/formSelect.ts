import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

import { BsJsFormControlOptions } from './formControl'

export type BsJsFormSelectOptions = Pick<BsJsFormControlOptions, 'size' | 'isValid' | 'isInvalid'>
export function applyFormSelectStyles(result: BsJsStyles, options: BsJsOptions<'form-select'>) {
  applyElementNameAsClass(result, options.elementType)

  if (options.size) {
    result.classes[`form-select-${options.size}`] = true
  }

  if (options.isValid) {
    result.classes['is-valid'] = true
  }

  if (options.isInvalid) {
    result.classes['is-invalid'] = true
  }
}
