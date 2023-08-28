import { isEmptyObject } from '@jb-garage/utils-generic'
import { BootstrapThemeColor } from '../bootstrap.types'
import { BsJsStyles, LiteralUnion } from '../lib.types'
import { emptyStyles } from './utils/emptyStyles'
import { getOpacityStyles } from './utils/getOpacityStyles'

/** Default Bootstrap text colors */
type BootstrapTextColor =
  | BootstrapThemeColor
  | 'primary-emphasis'
  | 'secondary-emphasis'
  | 'success-emphasis'
  | 'info-emphasis'
  | 'warning-emphasis'
  | 'danger-emphasis'
  | 'light-emphasis'
  | 'dark-emphasis'
  | 'bg-primary'
  | 'bg-secondary'
  | 'bg-success'
  | 'bg-info'
  | 'bg-warning'
  | 'bg-danger'
  | 'bg-light'
  | 'bg-dark'
  | 'black'
  | 'white'
  | 'body'
  | 'body-secondary'
  | 'body-tertiary'
  | 'body-emphasis'
  | 'reset'

type BsJsTextColor = LiteralUnion<BootstrapTextColor, string>

/** Default Bootstrap text opacities */
type BsJsTextOpacity = '25' | '50' | '75' | '100'

export type BsJsColorConfig = {
  color?: BsJsTextColor
  opacity?: LiteralUnion<BsJsTextOpacity, number | string>
}

/** Options to use for applying Bootstrap text color styles */
export type BsJsColorOptions = BsJsTextColor | BsJsColorConfig

/** Returns styles that can be used for Bootstrap text color utilities */
export function bsJsColorStyles(prefix: string, color?: BsJsColorOptions): BsJsStyles {
  if (!color) {
    return emptyStyles()
  }

  if (typeof color === 'string') {
    return { classes: { [`text-${color}`]: true }, inlineStyles: {} }
  }

  if (isEmptyObject(color)) {
    return emptyStyles()
  }

  const styles: BsJsStyles = emptyStyles()

  if (color.color) {
    styles.classes[`text-${color.color}`] = true
  }

  const opacityStyles = getOpacityStyles(
    { cssVariableKey: `--${prefix}-text-opacity`, classNamePrefix: 'text-opacity' },
    color.opacity
  )

  if (opacityStyles.classes) {
    styles.classes = { ...styles.classes, ...opacityStyles.classes }
  }

  if (opacityStyles.inlineStyles) {
    styles.inlineStyles = opacityStyles.inlineStyles
  }

  return styles
}
