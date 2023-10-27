import { LiteralUnion, isString, isUndefined } from '@jb-garage/utils-generic'

import { BootstrapBackgroundColor } from '../../_bootstrapTypes'
import { BsJsAsCssVar, BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

import { BsJsOpacityValue, applyOpacityStyles } from './opacity'

export type BootstrapBackgroundDefaultOpacity = '10' | '25' | '50' | '75' | '100'

export type BsJsBackgroundOptions =
  | LiteralUnion<BootstrapBackgroundColor, string>
  | {
      /** Color variant to apply to background */
      color?: LiteralUnion<BootstrapBackgroundColor, string>
      /** Opacity to use for background */
      opacity?:
        | LiteralUnion<BootstrapBackgroundDefaultOpacity, BsJsOpacityValue>
        | BsJsAsCssVar<BsJsOpacityValue>
      /** Apply a gradient style to the background */
      gradient?: boolean
    }

export function applyBackgroundStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.background) {
    return
  }

  if (isString(options.background)) {
    result.classes[`bg-${options.background}`] = true
    return
  }

  if (options.background.color) {
    result.classes[`bg-${options.background.color}`] = true
  }

  if (options.background.gradient) {
    result.classes['bg-gradient'] = true
  }

  if (!isUndefined(options.background.opacity)) {
    applyOpacityStyles(
      result,
      {
        classNamePrefix: 'bg-opacity',
        cssVariableKey: `--${prefix}-bg-opacity`
      },
      options.background.opacity
    )
  }
}
