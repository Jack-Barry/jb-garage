import { LiteralUnion } from '@jb-garage/utils-generic'

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

export type BsJsPageItemOptions = BsJsActivatableElementOptions & BsJsDisableableElementOptions
export function applyPageItemStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'page-item'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)
  applyDisabledStyles(result, options)
}

export type BsJsPaginationOptions = {
  /** Size to apply to pagination */
  paginationSize?: LiteralUnion<'lg' | 'sm', string>
}
export function applyPaginationStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'pagination'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.paginationSize) {
    result.classes[`pagination-${options.paginationSize}`] = true
  }
}
