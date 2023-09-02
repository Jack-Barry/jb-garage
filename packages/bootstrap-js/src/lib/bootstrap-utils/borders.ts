import { isEmptyObject } from '@jb-garage/utils-generic'
import { BootstrapThemeColor, BootstrapThemeColorSubtle } from './_types'
import { BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'
import { getOpacityStyles } from '../utils/getOpacityStyles'

/** Value that can be used to configure a border width */
type BootstrapBorderWidth = LiteralUnion<'0' | '1' | '2' | '3' | '4' | '5', string | number>

/** Value that can be used to configure a border opacity */
type BootstrapBorderOpacity = LiteralUnion<'10' | '25' | '50' | '75' | '100', string | number>

/** Value that can be used to configure an individual border */
type BsJsBorderConfig = {
  width?: BootstrapBorderWidth
  radius?: 'circle' | 'pill' | boolean | BootstrapBorderWidth
}

/** Prop that can be accepted by `BrElement` for Bootstrap border utilities */
export type BsJsBorderOptions =
  | boolean
  | (BsJsBorderConfig & {
      color?: LiteralUnion<BootstrapThemeColor | BootstrapThemeColorSubtle, string>
      opacity?: BootstrapBorderOpacity
      top?: boolean | BsJsBorderConfig
      end?: boolean | BsJsBorderConfig
      bottom?: boolean | BsJsBorderConfig
      start?: boolean | BsJsBorderConfig
    })

export function bsJsBorderStyles(prefix: string, options: BsJsBorderOptions = {}): BsJsStyles {
  const borderStyles: BsJsStyles = emptyStyles()
  if (typeof options === 'boolean') {
    borderStyles.classes = { border: true }
    if (!options) {
      borderStyles.classes['border-0'] = true
    }

    return borderStyles
  }

  if (isEmptyObject(options)) {
    return borderStyles
  }

  const { width, radius, opacity, color, ...rest } = options
  const hasWidth = width !== undefined
  const hasRounded = radius !== undefined
  const hasOpacity = opacity !== undefined
  const hasColor = color !== undefined
  const hasDirectional = !!Object.keys(rest).length
  if (!hasWidth && !hasRounded && !hasOpacity && !hasColor && !hasDirectional) {
    return borderStyles
  }

  const styles: BsJsStyles = emptyStyles()

  if (hasWidth) {
    styles.classes['border'] = true
    styles.classes[`border-${width}`] = true
  }

  if (hasRounded && typeof radius === 'boolean') {
    styles.classes['rounded'] = radius
  } else if (hasRounded) {
    styles.classes[`rounded-${radius}`] = true
  }

  const opacityStyles = getOpacityStyles(
    { cssVariableKey: `--${prefix}-border-opacity`, classNamePrefix: 'border-opacity' },
    opacity
  )

  if (opacityStyles.classes) {
    styles.classes = { ...styles.classes, ...opacityStyles.classes }
  }

  if (opacityStyles.inlineStyles) {
    styles.inlineStyles = opacityStyles.inlineStyles
  }

  if (hasColor) {
    styles.classes['border'] = true
    styles.classes[`border-${color}`] = true
  }

  for (const [key, directionalProp] of Object.entries(rest)) {
    if (typeof directionalProp === 'boolean') {
      styles.classes[`border-${key}`] = directionalProp
      styles.classes[`border-${key}-0`] = !directionalProp
      styles.classes['border'] = !directionalProp
      continue
    }

    const { width: directionalWidth, radius: directionalRounded } = directionalProp
    if (typeof directionalWidth !== 'undefined') {
      styles.classes[`border-${key}-${directionalWidth}`] = true
    }

    if (typeof directionalRounded !== 'undefined') {
      styles.classes[`rounded-${key}-${directionalRounded}`] =
        typeof directionalRounded !== 'boolean'
      styles.classes[`rounded-${key}`] = typeof directionalRounded === 'boolean'
    }
  }

  return styles
}
