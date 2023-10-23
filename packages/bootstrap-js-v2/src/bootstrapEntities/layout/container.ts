import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapDefaultBreakpoint } from '../../_bootstrapTypes'
import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsContainerOptions = {
  /** Container should take full width up until the specified breakpoint */
  fullWidthUntil?: LiteralUnion<BootstrapDefaultBreakpoint, string>
  /** Container should take full width at all breakpoints */
  fluid?: boolean
}
export function applyContainerStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'container'>
) {
  if (options.fluid) {
    result.classes['container-fluid'] = true
  } else if (options.fullWidthUntil) {
    result.classes[`container-${options.fullWidthUntil}`] = true
  } else {
    result.classes['container'] = true
  }
}
