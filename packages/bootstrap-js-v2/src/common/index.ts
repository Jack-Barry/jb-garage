import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../_types'
import { applyBackgroundStyles } from '../bootstrapEntities/utilities/background'
import { applyBorderStyles } from '../bootstrapEntities/utilities/borders'
import { applyTextColor } from '../bootstrapEntities/utilities/colors'

import { applyTheme } from './theme'

/** Modifies the provided `result` object with common Bootstrap styles */
export function applyCommonStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (isEmptyObject(options)) {
    return
  }

  applyTheme(prefix, result, options.theme)
  applyTextColor(result, options)
  applyBackgroundStyles(prefix, result, options)
  applyBorderStyles(prefix, result, options)
}
