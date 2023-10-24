import { LiteralUnion, isBoolean, isUndefined } from '@jb-garage/utils-generic'

import { BootstrapThemeColor, BootstrapThemeColorSubtle } from '../../_bootstrapTypes'
import { BsJsAsCssVar, BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

import { BsJsOpacityValue, applyOpacityStyles } from './opacity'

export type BootstrapBorderDefaultWidth = '0' | '1' | '2' | '3' | '4' | '5'

export type BootstrapBorderDefaultOpacity = '10' | '25' | '50' | '75' | '100'

export type BsJsBorderConfig = {
  /** Width of the border */
  width?: LiteralUnion<BootstrapBorderDefaultWidth, string | number>
  /** Radius to use for the border */
  radius?: LiteralUnion<'circle' | 'pill' | BootstrapBorderDefaultWidth, string | number | boolean>
}

export type BsJsBorderOptions =
  | boolean
  | (BsJsBorderConfig & {
      /** Color of the border */
      color?: LiteralUnion<BootstrapThemeColor | BootstrapThemeColorSubtle, string>
      /** Opacity of the border */
      opacity?:
        | LiteralUnion<BootstrapBorderDefaultOpacity, BsJsOpacityValue>
        | BsJsAsCssVar<BsJsOpacityValue>
      /** Border options for top border */
      top?: boolean | BsJsBorderConfig
      /** Border options for right side border */
      end?: boolean | BsJsBorderConfig
      /** Border options for bottom border */
      bottom?: boolean | BsJsBorderConfig
      /** Border options for left side border */
      start?: boolean | BsJsBorderConfig
    })

export function applyBorderStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (isUndefined(options.border)) {
    return
  }

  if (typeof options.border === 'boolean') {
    result.classes['border'] = true

    if (!options.border) {
      result.classes['border-0'] = true
    }

    return
  }

  const { width, radius, opacity, color, ...directionalOptions } = options.border

  const hasWidth = !isUndefined(width)
  const hasRounded = !isUndefined(radius)
  const hasOpacity = !isUndefined(opacity)
  const hasColor = !isUndefined(color)
  const hasDirectional = !!Object.keys(directionalOptions).length

  if (!hasWidth && !hasRounded && !hasOpacity && !hasColor && !hasDirectional) {
    return
  }

  if (hasWidth) {
    result.classes['border'] = true
    result.classes[`border-${width}`] = true
  }

  if (hasRounded && radius === true) {
    result.classes['rounded'] = radius
  } else if (hasRounded && radius !== false) {
    result.classes[`rounded-${radius}`] = true
  }

  if (options.border.opacity) {
    applyOpacityStyles(
      result,
      { classNamePrefix: 'border-opacity', cssVariableKey: `--${prefix}-border-opacity` },
      options.border.opacity
    )
  }

  if (hasColor) {
    result.classes['border'] = true
    result.classes[`border-${color}`] = true
  }

  for (const [key, directionalOption] of Object.entries(directionalOptions)) {
    if (directionalOption === true) {
      result.classes[`border-${key}`] = true
      continue
    }

    if (directionalOption === false) {
      result.classes['border'] = true
      result.classes[`border-${key}-0`] = true
      continue
    }

    const { width: directionalWidth, radius: directionalRounded } = directionalOption
    if (!isUndefined(directionalWidth)) {
      result.classes[`border-${key}-${directionalWidth}`] = true
    }

    if (isUndefined(directionalRounded)) {
      continue
    }

    if (!isBoolean(directionalRounded)) {
      result.classes[`rounded-${key}-${directionalRounded}`] = true
      continue
    }

    result.classes[`rounded-${key}`] = true
  }
}
