import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

import { BsJsFormControlOptions } from './formControl'

export type BsJsFormSelectOptions = Pick<BsJsFormControlOptions, 'size' | 'isValid' | 'isInvalid'>
export function applyFormSelectStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'form-select'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.formControlSize) {
    result.classes[`form-select-${options.formControlSize}`] = true
  }

  if (options.isValid) {
    result.classes['is-valid'] = true
  }

  if (options.isInvalid) {
    result.classes['is-invalid'] = true
  }
}
