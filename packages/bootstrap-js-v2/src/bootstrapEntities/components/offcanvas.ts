import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapDefaultBreakpoint } from '../../_bootstrapTypes'
import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsOffcanvasOptions = {
  /**
   * Where to place the offcanvas element
   *
   * @default "start"
   */
  placement?: LiteralUnion<'start' | 'end' | 'top' | 'bottom', string>
  /** Breakpoint at which to present the element as normal content */
  onCanvas?: LiteralUnion<BootstrapDefaultBreakpoint, string>
}
export function applyOffcanvasStyles(result: BsJsStyles, options: BsJsOptions<'offcanvas'>) {
  if (options.onCanvas) {
    result.classes[`offcanvas-${options.onCanvas}`] = true
  } else {
    result.classes['offcanvas'] = true
  }

  result.classes[`offcanvas-${options.placement || 'start'}`] = true
}
