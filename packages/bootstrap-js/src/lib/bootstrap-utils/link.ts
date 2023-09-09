import {
  AllBreakpointsOptions,
  BsJsConfig,
  BsJsStyles,
  LiteralUnion
} from '@jb-garage/bootstrap-js/_types'

import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'
import { getOpacityStyles } from '../utils/getOpacityStyles'
import { isAllBreakpointsOptions } from '../utils/isAllBreakpointsOptions'

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
export function bsJsLinkStyles(options?: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()

  if (!options || !isAllBreakpointsOptions(options[ALL_BREAKPOINTS_KEY], 'link')) {
    return styles
  }

  const linkOptions = (options[ALL_BREAKPOINTS_KEY] as Required<AllBreakpointsOptions>).link

  if (typeof linkOptions === 'string') {
    return { classes: { [`link-${linkOptions}`]: true }, inlineStyles: {} }
  }

  const linkOpacity = getOpacityStyles({ classNamePrefix: 'link-opacity' }, linkOptions.opacity)
  const hoverOpacity = getOpacityStyles(
    {
      classNamePrefix: 'link-opacity',
      classNameSuffix: '-hover'
    },
    linkOptions.hoverOpacity
  )

  if (linkOptions.color) {
    styles.classes[`link-${linkOptions.color}`] = true
  }

  if (linkOptions.underlineColor) {
    styles.classes[`link-underline-${linkOptions.underlineColor}`] = true
  }

  if (linkOptions.underlineOffset) {
    styles.classes[`link-offset-${linkOptions.underlineOffset}`] = true
  }

  const underlineOpacity = getOpacityStyles(
    { classNamePrefix: 'link-underline-opacity' },
    linkOptions.underlineOpacity
  )

  if (linkOptions.hoverUnderlineOffset) {
    styles.classes[`link-offset-${linkOptions.hoverUnderlineOffset}-hover`] = true
  }

  const hoverUnderlineOpacity = getOpacityStyles(
    { classNamePrefix: 'link-underline-opacity', classNameSuffix: '-hover' },
    linkOptions.hoverUnderlineOpacity
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
