import { BsJsStyles, LiteralUnion } from '../../_types'
import { BootstrapThemeColor } from '../bootstrap-utils/_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsFocusRingOptions =
  | true
  | {
      /**
       * Use `themeColor` for out-of-the-box Bootstrap theme colors, e.g. "primary"
       *
       * For custom colors in CSS variables, use `customColor` attribute instead
       */
      themeColor?: LiteralUnion<BootstrapThemeColor, string>
      /**
       * Use `customColor` if you need to customize the focus ring color
       *
       * For out-of-the-box Bootstrap theme colors, e.g. "primary", use the `themeColor`
       *   attribute instead
       */
      customColor?: string
      width?: string
      opacity?: number | string
      offsetX?: string
      offsetY?: string
      blur?: string
    }

export function bsJsFocusRingStyles(
  prefix: string,
  options?: BsJsFocusRingOptions
): BsJsStyles | null {
  if (!options) {
    return null
  }

  const styles = emptyStyles()
  styles.classes['focus-ring'] = true
  if (typeof options === 'boolean') {
    return styles
  }

  if (options.themeColor) {
    styles.classes[`focus-ring-${options.themeColor}`] = true
  }

  if (options.customColor) {
    styles.inlineStyles[`--${prefix}-focus-ring-color`] = options.customColor
  }

  if (options.width) {
    styles.inlineStyles[`--${prefix}-focus-ring-width`] = options.width
  }

  if (options.opacity) {
    styles.inlineStyles[`--${prefix}-focus-ring-opacity`] = options.opacity
  }

  if (options.offsetX) {
    styles.inlineStyles[`--${prefix}-focus-ring-x`] = options.offsetX
  }

  if (options.offsetY) {
    styles.inlineStyles[`--${prefix}-focus-ring-y`] = options.offsetY
  }

  if (options.blur) {
    styles.inlineStyles[`--${prefix}-focus-ring-blur`] = options.blur
  }

  return styles
}
