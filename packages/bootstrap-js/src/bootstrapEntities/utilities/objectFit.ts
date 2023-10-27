import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsObjectFit = LiteralUnion<'contain' | 'cover' | 'fill' | 'scale ' | 'none', string>

export function applyObjectFitStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions,
  breakpoint = ''
) {
  if (!options.objectFit) {
    return
  }

  if (!breakpoint) {
    result.classes[`object-fit-${options.objectFit}`] = true
  } else {
    result.classes[`object-fit-${breakpoint}-${options.objectFit}`] = true
  }
}
