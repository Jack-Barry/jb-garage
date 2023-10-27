import { isString } from '@jb-garage/utils-generic'

import { BsJsActivatableElementOptions, BsJsOptions, BsJsStyles } from '../../_types'
import { applyActiveStyles, applyElementNameAsClass } from '../../elements/utils'

export type BsJsBreadcrumbsWrapperOptions = {
  /** Divider to use for breadcrumbs */
  divider?: string
}

export function applyBreadcrumbsWrapperStyles<Breakpoints extends string>(
  prefix: string,
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'breadcrumbs-wrapper'>
) {
  if (isString(options.divider)) {
    result.inlineStyles[`--${prefix}-breadcrumb-divider`] = options.divider
  }

  result.elementAttributes['aria-label'] = 'breadcrumb'
}

export type BsJsBreadcrumbItemOptions = BsJsActivatableElementOptions

export function applyBreadcrumbItemStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'breadcrumb-item'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)

  if (options.active) {
    result.elementAttributes['aria-current'] = 'page'
  }
}
