import {
  BsJsActivatableElementOptions,
  BsJsDisableableElementOptions,
  BsJsOptions,
  BsJsStyles
} from '../../_types'
import {
  applyActiveStyles,
  applyDisabledStyles,
  applyElementNameAsClass
} from '../../elements/utils'

export type BsJsDropdownItemOptions = BsJsActivatableElementOptions &
  BsJsDisableableElementOptions & {
    /** Should not be an interactive item */
    textOnly?: boolean
  }
export function applyDropdownItemStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'dropdown-item'>
) {
  applyActiveStyles(result, options)
  applyDisabledStyles(result, options)

  if (options.textOnly) {
    result.classes['dropdown-item-text'] = true
  } else {
    result.classes['dropdown-item'] = true
  }
}

export type BsJsDropdownToggleOptions = {
  /** Toggle is part of a split button */
  split?: boolean
}
export function applyDropdownToggleStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'dropdown-toggle'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.split) {
    result.classes['dropdown-toggle-split'] = true
  }
}
