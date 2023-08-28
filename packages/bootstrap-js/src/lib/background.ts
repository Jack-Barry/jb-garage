import { isEmptyObject } from '@jb-garage/utils-generic'
import { BootstrapThemeColor } from '../bootstrap.types'
import { BsJsStyles, LiteralUnion } from '../lib.types'
import { emptyStyles } from './utils/emptyStyles'
import { getOpacityStyles } from './utils/getOpacityStyles'

/** Default Bootstrap background color */
type BootstrapBackgroundColor =
  | BootstrapThemeColor
  | 'black'
  | 'white'
  | 'transparent'
  | 'body'
  | 'body-secondary'
  | 'body-tertiary'

/** Default Bootstrap background subtle color */
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
type BsJsBackgroundColor = LiteralUnion<
  BootstrapBackgroundColor | BootstrapBackgroundColorSubtle,
  string
>

/** Config that can be used for more control over background attributes */
export type BsJsBackgroundColorConfig = {
  color: BsJsBackgroundColor
  gradient?: boolean
  opacity?: LiteralUnion<'10' | '25' | '50' | '75' | '100', number | string>
}

/** Options to use for applying Bootstrap background styles */
export type BsJsBackgroundOptions = BsJsBackgroundColor | BsJsBackgroundColorConfig

/** Returns styles that can be used for Bootstrap background color utilities */
export function bsJsBackgroundStyles(
  bsPrefix: string,
  background?: BsJsBackgroundOptions
): BsJsStyles {
  if (!background) {
    return emptyStyles()
  }

  if (typeof background === 'string') {
    return { classes: { [`bg-${background}`]: true }, inlineStyles: {} }
  }

  if (isEmptyObject(background)) {
    return emptyStyles()
  }

  const { color, opacity, gradient } = background
  if (color === undefined) {
    // logger.warn(`${DEV_WARNING_PREFIX}Color is expected when providing background styles as object`)
    return emptyStyles()
  }

  if (opacity === undefined && gradient === undefined) {
    return { classes: { [`bg-${color}`]: true }, inlineStyles: {} }
  }

  const styles: BsJsStyles = { classes: { [`bg-${color}`]: true }, inlineStyles: {} }

  if (typeof gradient === 'boolean') {
    styles.classes['bg-gradient'] = gradient
  }

  const opacityStyles = getOpacityStyles(
    {
      cssVariableKey: `--${bsPrefix}-bg-opacity`,
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
