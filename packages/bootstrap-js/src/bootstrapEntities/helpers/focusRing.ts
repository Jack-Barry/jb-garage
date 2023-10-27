import { LiteralUnion, isBoolean, isString, isUndefined } from '@jb-garage/utils-generic'

import { BootstrapThemeColor } from '../../_bootstrapTypes'
import { BsJsAsCssVar, BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsFocusRingOptions =
  | true
  | {
      /**
       * Either provide a theme color string, e.g. `"primary"`, or a `BsJsAsCssVar`
       *   object to set the CSS variable to a custom color
       */
      color?: LiteralUnion<BootstrapThemeColor, string> | BsJsAsCssVar<string>
      /** Set CSS variable for focus ring width */
      width?: string
      /** Set CSS variable for focus ring opacity */
      opacity?: number | string
      /** Set CSS variable for focus ring x offset */
      offsetX?: string
      /** Set CSS variable for focus ring y offset */
      offsetY?: string
      /** Set CSS variable for focus ring blur */
      blur?: string
    }

export function applyFocusRingStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.focusRing) {
    return
  }

  result.classes['focus-ring'] = true
  if (isBoolean(options.focusRing)) {
    return
  }

  if (options.focusRing.color) {
    if (isString(options.focusRing.color)) {
      result.classes[`focus-ring-${options.focusRing.color}`] = true
    } else {
      result.inlineStyles[`--${prefix}-focus-ring-color`] = options.focusRing.color.asCssVar
    }
  }

  if (!isUndefined(options.focusRing.width)) {
    result.inlineStyles[`--${prefix}-focus-ring-width`] = options.focusRing.width
  }

  if (!isUndefined(options.focusRing.opacity)) {
    result.inlineStyles[`--${prefix}-focus-ring-opacity`] = options.focusRing.opacity
  }

  if (!isUndefined(options.focusRing.offsetX)) {
    result.inlineStyles[`--${prefix}-focus-ring-x`] = options.focusRing.offsetX
  }

  if (!isUndefined(options.focusRing.offsetY)) {
    result.inlineStyles[`--${prefix}-focus-ring-y`] = options.focusRing.offsetY
  }

  if (options.focusRing.blur) {
    result.inlineStyles[`--${prefix}-focus-ring-blur`] = options.focusRing.blur
  }
}
