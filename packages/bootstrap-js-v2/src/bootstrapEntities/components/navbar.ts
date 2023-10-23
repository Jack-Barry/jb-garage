import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsNavbarOptions = {
  placement?: LiteralUnion<'fixed-top' | 'fixed-bottom' | 'sticky-top' | 'sticky-bottom', string>
}
export function applyNavbarStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'navbar'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.placement) {
    result.classes[options.placement] = true
  }
}
