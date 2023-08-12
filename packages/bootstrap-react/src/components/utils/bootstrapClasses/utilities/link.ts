import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'
import { BootstrapOpacity, BootstrapThemeColor } from './types'
import { getOpacityStyles } from './helpers'

type LinkColor = BootstrapThemeColor
type LinkOpacity = LiteralUnion<BootstrapOpacity, string | number>
type LinkUnderlineOffset = LiteralUnion<'1' | '2' | '3', string | number>
type LinkUnderlineOpacity = LiteralUnion<'0' | BootstrapOpacity, string | number>

export type BrUtilsLinkOptions =
  | LinkColor
  | {
      color?: LinkColor
      opacity?: LinkOpacity
      underlineColor?: LiteralUnion<LinkColor | 'null', string>
      underlineOffset?: LinkUnderlineOffset
      underlineOpacity?: LinkUnderlineOpacity
      hoverOpacity?: LinkOpacity
      hoverUnderlineOffset?: LinkUnderlineOffset
      hoverUnderlineOpacity?: LinkUnderlineOpacity
    }

/** Returns styles that can be used for Bootstrap link utilities */
export function brUtilsLinkStyles(options?: BrUtilsLinkOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (typeof options === 'string') {
    return { classes: { [`link-${options}`]: true } }
  }

  const classes: BrStyles['classes'] = {}
  const styles: BrStyles = { classes }

  const linkOpacity = getOpacityStyles({ classNamePrefix: 'link-opacity' }, options.opacity)
  const hoverOpacity = getOpacityStyles(
    {
      classNamePrefix: 'link-opacity',
      classNameSuffix: '-hover'
    },
    options.hoverOpacity
  )

  if (options.color) {
    classes[`link-${options.color}`] = true
  }

  if (options.underlineColor) {
    classes[`link-underline-${options.underlineColor}`] = true
  }

  if (options.underlineOffset) {
    classes[`link-offset-${options.underlineOffset}`] = true
  }

  const underlineOpacity = getOpacityStyles(
    { classNamePrefix: 'link-underline-opacity' },
    options.underlineOpacity
  )

  if (options.hoverUnderlineOffset) {
    classes[`link-offset-${options.hoverUnderlineOffset}-hover`] = true
  }

  const hoverUnderlineOpacity = getOpacityStyles(
    { classNamePrefix: 'link-underline-opacity', classNameSuffix: '-hover' },
    options.hoverUnderlineOpacity
  )

  styles.classes = {
    ...styles.classes,
    ...linkOpacity.classes,
    ...hoverOpacity.classes,
    ...underlineOpacity.classes,
    ...hoverUnderlineOpacity.classes
  }

  return styles
}
