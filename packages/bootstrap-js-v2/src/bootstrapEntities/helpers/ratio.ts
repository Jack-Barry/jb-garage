import { LiteralUnion, isString } from '@jb-garage/utils-generic'

import { BsJsAsCssVar, BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapRatio = '1x1' | '4x3' | '16x9' | '21x9'
export type BsJsRatioOptions = LiteralUnion<BootstrapRatio, string> | BsJsAsCssVar<string>

export function applyRatioStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.ratio) {
    return
  }

  result.classes['ratio'] = true

  if (isString(options.ratio)) {
    result.classes[`ratio-${options.ratio}`] = true
  } else {
    result.inlineStyles[`--${prefix}-aspect-ratio`] = options.ratio.asCssVar
  }
}
