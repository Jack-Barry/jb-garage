import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsFormControlOptions = {
  size?: LiteralUnion<'sm' | 'lg', string>
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

  if (options.size) {
    result.classes[`form-control-${options.size}`] = true
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
