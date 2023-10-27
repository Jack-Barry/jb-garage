import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapOverflowType = 'auto' | 'hidden' | 'visible' | 'scroll'

export type BsJsOverflowOptions =
  | LiteralUnion<BootstrapOverflowType, string>
  | {
      x?: LiteralUnion<BootstrapOverflowType, string>
      y?: LiteralUnion<BootstrapOverflowType, string>
    }

export function applyOverflowStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  const { overflow } = options

  if (!overflow) {
    return
  }

  if (typeof overflow === 'string') {
    result.classes[`overflow-${overflow}`] = true
    return
  }

  Object.entries(overflow).forEach(([axis, overflowType]) => {
    result.classes[`overflow-${axis}-${overflowType}`] = true
  })
}
