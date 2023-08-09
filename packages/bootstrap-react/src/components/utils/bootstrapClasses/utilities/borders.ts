import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'
import { getOpacityStyles } from './helpers'
import { BootstrapOpacity, BootstrapThemeColor } from './types'

/** Value that can be used to configure a border width */
type BrBorderConfigValue = LiteralUnion<
  0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5',
  string | number
>

/** Value that can be used to configure an individual border */
type BrBorderConfig = {
  width?: BrBorderConfigValue
  radius?: 'circle' | 'pill' | boolean | BrBorderConfigValue
}
/** Prop that can be accepted by `BrElement` for Bootstrap border utilities */
export type BrBorderProp =
  | boolean
  | (BrBorderConfig & {
      color?: LiteralUnion<BootstrapThemeColor, string>
      opacity?: LiteralUnion<BootstrapOpacity, number | string>
      top?: boolean | BrBorderConfig
      end?: boolean | BrBorderConfig
      bottom?: boolean | BrBorderConfig
      start?: boolean | BrBorderConfig
    })

export function brUtilsBorderStyles(prop: BrBorderProp = {}): BrStyles {
  const borderStyles: BrStyles = {}
  if (typeof prop === 'boolean') {
    borderStyles.classes = { border: true }
    if (!prop) {
      borderStyles.classes['border-0'] = true
    }

    return borderStyles
  }

  const { width, radius, opacity, color, ...rest } = prop
  const hasWidth = width !== undefined
  const hasRounded = radius !== undefined
  const hasOpacity = opacity !== undefined
  const hasColor = color !== undefined
  const hasDirectional = !!Object.keys(rest).length
  if (!hasWidth && !hasRounded && !hasOpacity && !hasColor && !hasDirectional) {
    return borderStyles
  }

  const styles: BrStyles & Required<Pick<BrStyles, 'classes'>> = { classes: {} }

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
    { cssVariableKey: '--bs-border-opacity', classNamePrefix: 'border-opacity' },
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
