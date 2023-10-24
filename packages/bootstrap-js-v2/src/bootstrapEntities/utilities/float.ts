import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsFloatType = LiteralUnion<'start' | 'end' | 'none', string>

export function applyFloatStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions,
  breakpoint = ''
) {
  if (!options.float) {
    return
  }

  if (!breakpoint) {
    result.classes[`float-${options.float}`] = true
  } else {
    result.classes[`float-${breakpoint}-${options.float}`] = true
  }
}
