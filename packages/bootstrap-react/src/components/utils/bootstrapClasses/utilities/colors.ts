import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BootstrapThemeColor } from './types'
import { BrStyles } from '../brStyles'
import { getOpacityStyles } from './helpers'

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

type BrTextColor = LiteralUnion<BootstrapTextColor, string>

/** Default Bootstrap text opacities */
type BrTextOpacity = '25' | '50' | '75' | '100'

export type BrColorConfig = {
  color?: BrTextColor
  opacity?: LiteralUnion<BrTextOpacity, number | string>
}

/** Options to use for applying Bootstrap text color styles */
export type BrUtilsColorOptions = BrTextColor | BrColorConfig

/** Returns styles that can be used for Bootstrap text color utilities */
export function brUtilsColorStyles(color?: BrUtilsColorOptions): BrStyles {
  if (!color) {
    return {}
  }

  if (typeof color === 'string') {
    return { classes: { [`text-${color}`]: true } }
  }

  const classes: BrStyles['classes'] = {}
  const styles: BrStyles = { classes }

  if (color.color) {
    classes[`text-${color.color}`] = true
  }

  const opacityStyles = getOpacityStyles(
    { cssVariableKey: '--bs-text-opacity', classNamePrefix: 'text-opacity' },
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
