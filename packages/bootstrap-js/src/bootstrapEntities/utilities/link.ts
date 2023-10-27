import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapThemeColor } from '../../_bootstrapTypes'
import { BsJsAsCssVar, BsJsOptions, BsJsStyles } from '../../_types'
import { applyStretchedLinkStyles } from '../helpers/stretchedLink'

import { applyOpacityStyles } from './opacity'

type LinkColor = LiteralUnion<BootstrapThemeColor | 'body-emphasis', string>
type LinkOpacity = LiteralUnion<'10' | '25' | '50' | '75' | '100', string | number>
type LinkUnderlineOffset = LiteralUnion<'1' | '2' | '3', string | number>
type LinkUnderlineOpacity = LiteralUnion<'0' | LinkOpacity, string | number>

export type BsJsLinkOptions = {
  linkColor?: LinkColor
  linkOpacity?: LinkOpacity | BsJsAsCssVar<LinkOpacity>
  underlineColor?: LiteralUnion<LinkColor, string>
  underlineOffset?: LinkUnderlineOffset
  underlineOpacity?: LinkUnderlineOpacity | BsJsAsCssVar<LinkUnderlineOpacity>
  hoverOpacity?: LinkOpacity | BsJsAsCssVar<LinkOpacity>
  hoverUnderlineOffset?: LinkUnderlineOffset
  hoverUnderlineOpacity?: LinkUnderlineOpacity | BsJsAsCssVar<LinkUnderlineOpacity>
  stretch?: boolean
}

export function applyLinkStyles<Breakpoints extends string>(
  prefix: string,
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'link' | 'card-link'>
) {
  const {
    linkColor,
    linkOpacity,
    underlineColor,
    underlineOffset,
    underlineOpacity,
    hoverOpacity,
    hoverUnderlineOffset,
    hoverUnderlineOpacity,
    stretch
  } = options

  if (linkColor) {
    result.classes[`link-${linkColor}`] = true
  }

  if (linkOpacity) {
    applyOpacityStyles(
      result,
      { classNamePrefix: 'link-opacity', cssVariableKey: `--${prefix}-link-opacity` },
      linkOpacity
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

  applyStretchedLinkStyles(result, stretch)
}
