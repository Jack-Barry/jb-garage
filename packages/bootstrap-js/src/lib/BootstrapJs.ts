import { isEmptyObject } from '@jb-garage/utils-generic'

import { AllBreakpointsOptions, BsJsConfig, BsJsStyles } from '../_types'

import { bsJsBackgroundStyles } from './bootstrap-utils/background'
import { bsJsBorderStyles } from './bootstrap-utils/borders'
import { bsJsColorStyles } from './bootstrap-utils/colors'
import { bsJsDisplayStyles } from './bootstrap-utils/display'
import { bsJsFlexStyles } from './bootstrap-utils/flexbox'
import { bsJsFloatStyles } from './bootstrap-utils/float'
import { ALL_BREAKPOINTS_KEY } from './constants'
import { emptyStyles } from './utils/emptyStyles'

/**
 * Keeps track of the prefix used for Bootstrap and returns a `bsJs` method that can be used for
 *   generating Bootstrap styles for HTML elements
 */
export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /** Translates provided config into Bootstrap classes and inline styles */
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
    const float = bsJsFloatStyles(config)

    const bsJsStyles = [background, border, color, display, flex, float].reduce<
      Required<BsJsStyles>
    >((result, { classes, inlineStyles }) => {
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
    }, emptyStyles())

    return bsJsStyles
  }
}
