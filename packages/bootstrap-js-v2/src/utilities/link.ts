import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapThemeColor } from '../_bootstrapTypes'
import { BsJsAsCssVar, BsJsOptions, BsJsStyles } from '../_types'

import { applyOpacityStyles } from './opacity'

type LinkColor = LiteralUnion<BootstrapThemeColor | 'body-emphasis', string>
type LinkOpacity = LiteralUnion<'10' | '25' | '50' | '75' | '100', string | number>
type LinkUnderlineOffset = LiteralUnion<'1' | '2' | '3', string | number>
type LinkUnderlineOpacity = LiteralUnion<'0' | LinkOpacity, string | number>

export type BsJsLinkOptions = {
  color?: LinkColor
  opacity?: LinkOpacity | BsJsAsCssVar<LinkOpacity>
  underlineColor?: LiteralUnion<LinkColor, string>
  underlineOffset?: LinkUnderlineOffset
  underlineOpacity?: LinkUnderlineOpacity | BsJsAsCssVar<LinkUnderlineOpacity>
  hoverOpacity?: LinkOpacity | BsJsAsCssVar<LinkOpacity>
  hoverUnderlineOffset?: LinkUnderlineOffset
  hoverUnderlineOpacity?: LinkUnderlineOpacity | BsJsAsCssVar<LinkUnderlineOpacity>
}

export function applyLinkStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsOptions<'link' | 'card-link'>
) {
  const {
    color,
    opacity,
    underlineColor,
    underlineOffset,
    underlineOpacity,
    hoverOpacity,
    hoverUnderlineOffset,
    hoverUnderlineOpacity
  } = options

  if (color) {
    result.classes[`link-${color}`] = true
  }

  if (opacity) {
    applyOpacityStyles(
      result,
      { classNamePrefix: 'link-opacity', cssVariableKey: `--${prefix}-link-opacity` },
      opacity
    )
  }

  if (underlineColor) {
    result.classes[`link-underline-${underlineColor}`] = true
  }

  if (underlineOffset) {
    result.classes[`link-offset-${underlineOffset}`] = true
  }

  if (underlineOpacity) {
    applyOpacityStyles(
      result,
      {
        classNamePrefix: 'link-underline-opacity',
        cssVariableKey: `--${prefix}-link-underline-opacity`
      },
      underlineOpacity
    )
  }

  if (hoverOpacity) {
    applyOpacityStyles(
      result,
      {
        classNamePrefix: 'link-opacity',
        classNameSuffix: '-hover',
        cssVariableKey: `--${prefix}-link-opacity-hover`
      },
      hoverOpacity
    )
  }

  if (hoverUnderlineOffset) {
    result.classes[`link-offset-${hoverUnderlineOffset}-hover`] = true
  }

  if (hoverUnderlineOpacity) {
    applyOpacityStyles(
      result,
      {
        classNamePrefix: 'link-underline-opacity',
        classNameSuffix: '-hover',
        cssVariableKey: `--${prefix}-link-underline-opacity-hover`
      },
      hoverUnderlineOpacity
    )
  }
}
