import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsFormLabelOptions = {
  /**
   * Present the label in a horizontal form as a column
   *
   * When `asColumn` is a `boolean`, no input sizing is taken into consideration.
   * If your input has a `"sm"` or `"lg"` (or other) size applied, pass the matching
   *   size to `asColumn` to ensure it will align properly
   */
  asColumn?: boolean | LiteralUnion<'sm' | 'lg', string>
}
export function applyFormLabelStyles(result: BsJsStyles, options: BsJsOptions<'form-label'>) {
  applyElementNameAsClass(result, options.elementType)

  if (options.asColumn === true) {
    result.classes['col-form-label'] = true
  } else if (options.asColumn) {
    result.classes[`col-form-label-${options.asColumn}`] = true
  }
}
