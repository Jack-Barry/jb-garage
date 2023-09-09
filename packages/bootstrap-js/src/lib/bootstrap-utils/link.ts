import { isEmptyObject } from '../../../../utils-generic/src'
import { AllBreakpointsOptions, BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'
import { getOpacityStyles } from '../utils/getOpacityStyles'

import { BootstrapThemeColor } from './_types'

type LinkColor = BootstrapThemeColor
type LinkOpacity = LiteralUnion<'10' | '25' | '50' | '75' | '100', string | number>
type LinkUnderlineOffset = LiteralUnion<'1' | '2' | '3', string | number>
type LinkUnderlineOpacity = LiteralUnion<'0' | LinkOpacity, string | number>

export type BsJsLinkOptions =
  | LinkColor
  | {
      color?: LinkColor
      opacity?: LinkOpacity
      underlineColor?: LiteralUnion<LinkColor, string>
      underlineOffset?: LinkUnderlineOffset
      underlineOpacity?: LinkUnderlineOpacity
      hoverOpacity?: LinkOpacity
      hoverUnderlineOffset?: LinkUnderlineOffset
      hoverUnderlineOpacity?: LinkUnderlineOpacity
    }

/** Returns styles that can be used for Bootstrap link utilities */
export function bsJsLinkStyles(options: AllBreakpointsOptions['link']): BsJsStyles | null {
  if (!options) {
    return null
  }

  if (typeof options === 'string') {
    return { classes: { [`link-${options}`]: true }, inlineStyles: {} }
  }

  if (isEmptyObject(options)) {
    return null
  }

  const styles = emptyStyles()
  const linkOpacity = getOpacityStyles({ classNamePrefix: 'link-opacity' }, options.opacity)
  const hoverOpacity = getOpacityStyles(
    {
      classNamePrefix: 'link-opacity',
      classNameSuffix: '-hover'
    },
    options.hoverOpacity
  )

  if (options.color) {
    styles.classes[`link-${options.color}`] = true
  }

  if (options.underlineColor) {
    styles.classes[`link-underline-${options.underlineColor}`] = true
  }

  if (options.underlineOffset) {
    styles.classes[`link-offset-${options.underlineOffset}`] = true
  }

  const underlineOpacity = getOpacityStyles(
    { classNamePrefix: 'link-underline-opacity' },
    options.underlineOpacity
  )

  if (options.hoverUnderlineOffset) {
    styles.classes[`link-offset-${options.hoverUnderlineOffset}-hover`] = true
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
