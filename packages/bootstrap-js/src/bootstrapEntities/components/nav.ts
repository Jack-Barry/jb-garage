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

export type BsJsNavOptions = {
  /** Present nav items as pills */
  pills?: boolean
}
export function applyNavStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'nav'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.pills) {
    result.classes['nav-pills'] = true
  }
}

export type BsJsNavItemOptions = {
  /** Present nav item as dropdown */
  dropdown?: boolean
}
export function applyNavItemStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'nav-item'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.dropdown) {
    result.classes['dropdown'] = true
  }
}

export type BsJsNavLinkOptions = BsJsActivatableElementOptions &
  BsJsDisableableElementOptions & {
    /** Link is a dropdown toggle */
    dropdownToggle?: boolean
  }
export function applyNavLinkStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'nav-link'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)
  applyDisabledStyles(result, options)

  if (options.dropdownToggle) {
    result.classes['dropdown-toggle'] = true
  }
}
