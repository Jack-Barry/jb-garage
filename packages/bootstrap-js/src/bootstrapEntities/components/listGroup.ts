import { BsJsActivatableElementOptions, BsJsOptions, BsJsStyles } from '../../_types'
import { applyActiveStyles, applyElementNameAsClass } from '../../elements/utils'

export type BsJsListGroupItemOptions = BsJsActivatableElementOptions & {
  /** List group item is an action */
  action?: boolean
}
export function applyListGroupItemStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'list-group-item'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)

  if (options.action) {
    result.classes['list-group-item-action'] = true
  }
}
