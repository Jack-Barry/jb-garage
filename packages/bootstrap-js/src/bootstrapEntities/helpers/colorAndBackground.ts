import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapThemeColor } from '../../_bootstrapTypes'
import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsColorAndBackgroundOption = LiteralUnion<BootstrapThemeColor, string>

export function applyColorAndBackgroundStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.colorAndBackground) {
    return
  }

  result.classes[`text-bg-${options.colorAndBackground}`] = true
}
