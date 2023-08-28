import { isEmptyObject } from '@jb-garage/utils-generic'
import { AllBreakpointsOptions, BsJsConfig, BsJsStyles } from '../lib.types'
import { bsJsBackgroundStyles } from './background'
import { bsJsBorderStyles } from './borders'
import { bsJsColorStyles } from './colors'
import { ALL_BREAKPOINTS_KEY } from './constants'
import { bsJsDisplayStyles } from './display'
import { bsJsFlexStyles } from './flexbox'
import { emptyStyles } from './utils/emptyStyles'

/**
 * Keeps track of the prefix used for Bootstrap and returns a `bsJs` method that can be used for
 *   generating Bootstrap styles for HTML elements
 */
export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /**
   * Translates provided config into Bootstrap classes and inline styles
   */
  bsJs = (config: BsJsConfig = {}): BsJsStyles => {
    if (isEmptyObject(config)) {
      return emptyStyles()
    }

    const bsJsAll = config[ALL_BREAKPOINTS_KEY] as AllBreakpointsOptions
    const background = bsJsBackgroundStyles(this._prefix, bsJsAll?.background)
    const border = bsJsBorderStyles(this._prefix, bsJsAll?.border)
    const color = bsJsColorStyles(this._prefix, bsJsAll?.color)
    const display = bsJsDisplayStyles(config)
    const flex = bsJsFlexStyles(config)

    const bsJsStyles = [background, border, color, display, flex].reduce<Required<BsJsStyles>>(
      (result, { classes, inlineStyles }) => {
        return {
          classes: {
            ...result.classes,
            ...classes
          },
          inlineStyles: {
            ...result.inlineStyles,
            ...inlineStyles
          }
        }
      },
      emptyStyles()
    )

    return bsJsStyles
  }
}
