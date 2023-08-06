import { CSSProperties } from 'react'

import { LiteralUnion } from '../../../../types'
import { logger } from '../../logger'
import { BrStyles } from '../brStyles'
import { DEV_WARNING_PREFIX } from '@jb-garage/bootstrap-react/constants'

/** Default Bootstrap theme colors */
type BootstrapThemeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

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

/** Value that can be used to set background opacity */
type BootstrapBackgroundOpacity = LiteralUnion<'10' | '25' | '50' | '75' | '100', number | string>

/** Config that can be used for more control over background attributes */
export type BackgroundColorConfig = {
  color: BackgroundColor
  gradient?: boolean
  opacity?: BootstrapBackgroundOpacity
}

/** Options to use for applying Bootstrap background styles */
export type BrUtilsBackgroundOptions = BackgroundColor | BackgroundColorConfig

/** Returns styles that can be used for Bootstrap background color utilities */
export function brUtilsBackgroundStyles(background?: BrUtilsBackgroundOptions): BrStyles {
  if (!background) {
    return {}
  }

  if (typeof background === 'string') {
    return { className: `bg-${background}` }
  }

  const { color, opacity, gradient } = background
  if (color === undefined) {
    logger.warn(`${DEV_WARNING_PREFIX}Color is expected when providing background styles as object`)
    return {}
  }

  if (opacity === undefined && gradient === undefined) {
    return { className: `bg-${color}` }
  }

  const className: BrStyles['className'] = { [`bg-${color}`]: true }
  if (typeof gradient === 'boolean') {
    className['bg-gradient'] = gradient
  }

  const styles: BrStyles = { className }
  let opacityAsNumber: number | undefined

  if (typeof opacity === 'number') {
    opacityAsNumber = opacity
  } else if (typeof opacity === 'string') {
    const opacityIsPercentage = opacity.endsWith('%')
    opacityAsNumber = opacityIsPercentage
      ? parseFloat(opacity.replace('%', '')) / 100
      : parseFloat(opacity)
  }

  if (opacityAsNumber !== undefined) {
    if (opacityAsNumber < 1) {
      styles.style = { '--bs-bg-opacity': opacityAsNumber } as CSSProperties
    } else if (opacityAsNumber === 1) {
      className['bg-opacity-100'] = true
    } else {
      className[`bg-opacity-${opacityAsNumber}`] = true
    }
  }

  return styles
}
