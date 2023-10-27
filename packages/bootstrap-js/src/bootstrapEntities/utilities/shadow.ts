import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapShadowSize = 'sm' | 'lg' | 'none'

export type BsJsShadowOptions = true | LiteralUnion<BootstrapShadowSize, string>

export function applyShadowStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (!options.shadow) {
    return
  }

  if (options.shadow === true) {
    result.classes['shadow'] = true
  } else {
    result.classes[`shadow-${options.shadow}`] = true
  }
}
