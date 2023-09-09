import { isEmptyObject } from '@jb-garage/utils-generic'

import { AllBreakpointsOptions, BsJsConfig, BsJsStyles } from '../_types'

import { bsJsBackgroundStyles } from './bootstrap-utils/background'
import { bsJsBorderStyles } from './bootstrap-utils/borders'
import { bsJsColorStyles } from './bootstrap-utils/colors'
import { bsJsDisplayStyles } from './bootstrap-utils/display'
import { bsJsFlexStyles } from './bootstrap-utils/flexbox'
import { bsJsFloatStyles } from './bootstrap-utils/float'
import { bsJsInteractStyles } from './bootstrap-utils/interact'
import { bsJsLinkStyles } from './bootstrap-utils/link'
import { bsJsObjectFitStyles } from './bootstrap-utils/objectFit'
import { bsJsOverflowStyles } from './bootstrap-utils/overflow'
import { bsJsPositionStyles } from './bootstrap-utils/position'
import { bsJsShadowStyles } from './bootstrap-utils/shadow'
import { bsJsSizeStyles } from './bootstrap-utils/size'
import { bsJsSpacingStyles } from './bootstrap-utils/spacing'
import { ALL_BREAKPOINTS_KEY } from './constants'
import { emptyStyles } from './utils/emptyStyles'
import { mergeStyles } from './utils/mergeStyles'

/**
 * Keeps track of the prefix used for Bootstrap and returns a `bsJs` method that can be used for
 *   generating Bootstrap styles for HTML elements
 */
export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /** Translates provided config into Bootstrap classes and inline styles */
  bsJs = (config: BsJsConfig = {}): BsJsStyles => {
    let styles = emptyStyles()
    if (isEmptyObject(config)) {
      return styles
    }

    for (const [breakpoint, breakpointOptions] of Object.entries(config)) {
      if (breakpoint === ALL_BREAKPOINTS_KEY) {
        const allBreakpointOptions = breakpointOptions as AllBreakpointsOptions

        const background = bsJsBackgroundStyles(this._prefix, allBreakpointOptions.background)
        if (background) {
          styles = mergeStyles(styles, background)
        }

        const border = bsJsBorderStyles(this._prefix, allBreakpointOptions.border)
        if (border) {
          styles = mergeStyles(styles, border)
        }

        const color = bsJsColorStyles(this._prefix, allBreakpointOptions.color)
        if (color) {
          styles = mergeStyles(styles, color)
        }

        const interactions = bsJsInteractStyles(allBreakpointOptions.interactions)
        if (interactions) {
          styles = mergeStyles(styles, interactions)
        }

        const link = bsJsLinkStyles(allBreakpointOptions.link)
        if (link) {
          styles = mergeStyles(styles, link)
        }

        const overflow = bsJsOverflowStyles(allBreakpointOptions.overflow)
        if (overflow) {
          styles = mergeStyles(styles, overflow)
        }

        const position = bsJsPositionStyles(allBreakpointOptions.position)
        if (position) {
          styles = mergeStyles(styles, position)
        }

        const shadow = bsJsShadowStyles(allBreakpointOptions.shadow)
        if (shadow) {
          styles = mergeStyles(styles, shadow)
        }

        const size = bsJsSizeStyles(allBreakpointOptions.size)
        if (size) {
          styles = mergeStyles(styles, size)
        }
      }

      if (breakpointOptions?.display) {
        //
      }

      if (breakpointOptions?.flex) {
        //
      }

      if (breakpointOptions?.float) {
        //
      }

      if (breakpointOptions?.objectFit) {
        //
      }

      if (breakpointOptions?.spacing) {
        //
      }
    }

    const display = bsJsDisplayStyles(config)
    const flex = bsJsFlexStyles(config)
    const float = bsJsFloatStyles(config)
    const objectFit = bsJsObjectFitStyles(config)
    const spacing = bsJsSpacingStyles(config)

    const bsJsStyles = [display, flex, float, objectFit, spacing].reduce<Required<BsJsStyles>>(
      (result, { classes, inlineStyles }) => {
        return mergeStyles(result, { classes, inlineStyles })
      },
      styles
    )

    return bsJsStyles
  }
}
