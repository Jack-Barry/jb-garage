import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../_types'
import { applyBackgroundStyles } from '../bootstrapEntities/utilities/background'
import { applyBorderStyles } from '../bootstrapEntities/utilities/borders'
import { applyTextColor } from '../bootstrapEntities/utilities/colors'
import { applyDisplayStyles } from '../bootstrapEntities/utilities/display'
import { applyFlexStyles } from '../bootstrapEntities/utilities/flex'
import { applyFloatStyles } from '../bootstrapEntities/utilities/float'
import { applyInteractionsStyles } from '../bootstrapEntities/utilities/interactions'
import { applyObjectFitStyles } from '../bootstrapEntities/utilities/objectFit'
import { applyOpacityStyles } from '../bootstrapEntities/utilities/opacity'

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
  applyDisplayStyles(result, options)
  applyFlexStyles(result, options)
  applyFloatStyles(result, options)
  applyInteractionsStyles(result, options)
  applyObjectFitStyles(result, options)
  applyOpacityStyles(result, { classNamePrefix: 'opacity' }, options.opacity)
}
