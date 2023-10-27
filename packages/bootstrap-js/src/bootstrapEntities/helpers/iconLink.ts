import { isBoolean, isString } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsIconLinkOptions =
  | true
  | {
      /**
       * Set to `true` for default transform on hover, or provide a custom transform
       *   to use, e.g. `"translate3d(0, -.125rem, 0)"`
       */
      hoverTransform?: true | string
    }

export function applyIconLinkStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.iconLink) {
    return
  }

  result.classes['icon-link'] = true
  if (isBoolean(options.iconLink)) {
    return
  }

  if (options.iconLink.hoverTransform) {
    result.classes['icon-link-hover'] = true
  }

  if (isString(options.iconLink.hoverTransform)) {
    result.inlineStyles[`--${prefix}-icon-link-transform`] = options.iconLink.hoverTransform
  }
}
