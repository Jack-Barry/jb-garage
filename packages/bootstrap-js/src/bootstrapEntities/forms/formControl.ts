import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsFormControlOptions = {
  formControlSize?: LiteralUnion<'sm' | 'lg', string>
  plaintext?: boolean
  isColorSelector?: boolean
  isValid?: boolean
  isInvalid?: boolean
}
export function applyFormControlStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'form-control' | 'form-range'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.formControlSize) {
    result.classes[`form-control-${options.formControlSize}`] = true
  }

  if (options.plaintext) {
    result.classes['form-control-plaintext'] = true
  }

  if (options.isColorSelector) {
    result.classes['form-control-color'] = true
  }

  if (options.isValid) {
    result.classes['is-valid'] = true
  }

  if (options.isInvalid) {
    result.classes['is-invalid'] = true
  }
}
