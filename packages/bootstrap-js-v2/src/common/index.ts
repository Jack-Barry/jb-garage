import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../_types'
import { applyClearfixStyles } from '../bootstrapEntities/helpers/clearfix'
import { applyColorAndBackgroundStyles } from '../bootstrapEntities/helpers/colorAndBackground'
import { applyFocusRingStyles } from '../bootstrapEntities/helpers/focusRing'
import { applyIconLinkStyles } from '../bootstrapEntities/helpers/iconLink'
import { applyPositionHelperStyles } from '../bootstrapEntities/helpers/position'
import { applyRatioStyles } from '../bootstrapEntities/helpers/ratio'
import { applyStackStyles } from '../bootstrapEntities/helpers/stack'
import { applyVisuallyHiddenStyles } from '../bootstrapEntities/helpers/visuallyHidden'
import { applyBackgroundStyles } from '../bootstrapEntities/utilities/background'
import { applyBorderStyles } from '../bootstrapEntities/utilities/borders'
import { applyTextColor } from '../bootstrapEntities/utilities/colors'
import { applyDisplayStyles } from '../bootstrapEntities/utilities/display'
import { applyFlexStyles } from '../bootstrapEntities/utilities/flex'
import { applyFloatStyles } from '../bootstrapEntities/utilities/float'
import { applyInteractionsStyles } from '../bootstrapEntities/utilities/interactions'
import { applyObjectFitStyles } from '../bootstrapEntities/utilities/objectFit'
import { applyOpacityStyles } from '../bootstrapEntities/utilities/opacity'
import { applyOverflowStyles } from '../bootstrapEntities/utilities/overflow'
import { applyPositionStyles } from '../bootstrapEntities/utilities/position'
import { applyShadowStyles } from '../bootstrapEntities/utilities/shadow'
import { applySizingStyles } from '../bootstrapEntities/utilities/sizing'
import { applySpacingStyles } from '../bootstrapEntities/utilities/spacing'
import { applyTextStyles } from '../bootstrapEntities/utilities/text'
import { applyVerticalAlignStyles } from '../bootstrapEntities/utilities/verticalAlign'
import { applyVisibilityStyles } from '../bootstrapEntities/utilities/visibility'
import { applyZIndexStyles } from '../bootstrapEntities/utilities/zIndex'

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
  // helpers
  applyClearfixStyles(result, options)
  applyColorAndBackgroundStyles(result, options)
  applyFocusRingStyles(prefix, result, options)
  applyIconLinkStyles(prefix, result, options)
  applyPositionHelperStyles(result, options)
  applyRatioStyles(prefix, result, options)
  applyStackStyles(result, options)
  applyVisuallyHiddenStyles(result, options)
  // utilities
  applyTextColor(result, options)
  applyBackgroundStyles(prefix, result, options)
  applyBorderStyles(prefix, result, options)
  applyDisplayStyles(result, options)
  applyFlexStyles(result, options)
  applyFloatStyles(result, options)
  applyInteractionsStyles(result, options)
  applyObjectFitStyles(result, options)
  applyOpacityStyles(result, { classNamePrefix: 'opacity' }, options.opacity)
  applyOverflowStyles(result, options)
  applyPositionStyles(result, options)
  applyShadowStyles(result, options)
  applySizingStyles(result, options)
  applySpacingStyles(result, options)
  applyTextStyles(result, options)
  applyVerticalAlignStyles(result, options)
  applyVisibilityStyles(result, options)
  applyZIndexStyles(result, options)
}
