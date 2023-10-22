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
export function applyPageItemStyles(result: BsJsStyles, options: BsJsOptions<'page-item'>) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)
  applyDisabledStyles(result, options)
}

export type BsJsPaginationOptions = {
  /** Size to apply to pagination */
  size?: LiteralUnion<'lg' | 'sm', string>
}
export function applyPaginationStyles(result: BsJsStyles, options: BsJsOptions<'pagination'>) {
  applyElementNameAsClass(result, options.elementType)

  if (options.size) {
    result.classes[`pagination-${options.size}`] = true
  }
}
