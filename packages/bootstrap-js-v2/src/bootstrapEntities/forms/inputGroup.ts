import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsInputGroupOptions = {
  /** Size to present the input group in */
  size?: LiteralUnion<'sm' | 'lg', string>
  /** Whether or not the input group should have validation styling */
  hasValidation?: boolean
}
export function applyInputGroupStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'input-group'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.size) {
    result.classes[`input-group-${options.size}`] = true
  }

  if (options.hasValidation) {
    result.classes['has-validation'] = true
  }
}
