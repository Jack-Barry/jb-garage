import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsInputGroupOptions = {
  /** Size to present the input group in */
  inputGroupSize?: LiteralUnion<'sm' | 'lg', string>
  /** Whether or not the input group should have validation styling */
  hasValidation?: boolean
}
export function applyInputGroupStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'input-group'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.inputGroupSize) {
    result.classes[`input-group-${options.inputGroupSize}`] = true
  }

  if (options.hasValidation) {
    result.classes['has-validation'] = true
  }
}
