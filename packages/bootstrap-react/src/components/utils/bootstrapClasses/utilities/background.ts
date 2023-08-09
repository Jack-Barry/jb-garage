import { LiteralUnion } from '../../../../types'
import { logger } from '../../logger'
import { BrStyles } from '../brStyles'
import { DEV_WARNING_PREFIX } from '@jb-garage/bootstrap-react/constants'
import { getOpacityStyles } from './helpers'
import { BootstrapOpacity, BootstrapThemeColor } from './types'

/** Default Bootstrap background colors */
type BootstrapBackgroundColor =
  | BootstrapThemeColor
  | 'black'
  | 'white'
  | 'transparent'
  | 'body'
  | 'body-secondary'
  | 'body-tertiary'

/** Default Bootstrap background subtle colors */
type BootstrapBackgroundColorSubtle =
  | 'primary-subtle'
  | 'secondary-subtle'
  | 'success-subtle'
  | 'info-subtle'
  | 'warning-subtle'
  | 'danger-subtle'
  | 'light-subtle'
  | 'dark-subtle'

/** Value that can be used to set background color */
type BackgroundColor = LiteralUnion<
  BootstrapBackgroundColor | BootstrapBackgroundColorSubtle,
  string
>

/** Config that can be used for more control over background attributes */
export type BackgroundColorConfig = {
  color: BackgroundColor
  gradient?: boolean
  opacity?: LiteralUnion<BootstrapOpacity, number | string>
}

/** Options to use for applying Bootstrap background styles */
export type BrUtilsBackgroundOptions = BackgroundColor | BackgroundColorConfig

/** Returns styles that can be used for Bootstrap background color utilities */
export function brUtilsBackgroundStyles(background?: BrUtilsBackgroundOptions): BrStyles {
  if (!background) {
    return {}
  }

  if (typeof background === 'string') {
    return { classes: { [`bg-${background}`]: true } }
  }

  const { color, opacity, gradient } = background
  if (color === undefined) {
    logger.warn(`${DEV_WARNING_PREFIX}Color is expected when providing background styles as object`)
    return {}
  }

  if (opacity === undefined && gradient === undefined) {
    return { classes: { [`bg-${color}`]: true } }
  }

  const classes: BrStyles['classes'] = { [`bg-${color}`]: true }
  const styles: BrStyles = { classes }

  if (typeof gradient === 'boolean') {
    classes['bg-gradient'] = gradient
  }

  const opacityStyles = getOpacityStyles(
    {
      cssVariableKey: '--bs-bg-opacity',
      classNamePrefix: 'bg-opacity'
    },
    opacity
  )
  if (opacityStyles.classes) {
    styles.classes = { ...styles.classes, ...opacityStyles.classes }
  }
  if (opacityStyles.inlineStyles) {
    styles.inlineStyles = opacityStyles.inlineStyles
  }

  return styles
}
