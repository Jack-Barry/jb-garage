import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsFormGroupOptions = {
  /** Form has floating labels */
  floatingLabels?: boolean
  /** Apply "is invalid" styling to form group */
  isInvalid?: boolean
}
export function applyFormGroupStyles(result: BsJsStyles, options: BsJsOptions<'form-group'>) {
  if (options.floatingLabels) {
    result.classes['form-floating'] = true
  }

  if (options.isInvalid) {
    result.classes['is-invalid'] = true
  }
}
