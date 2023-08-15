import { BsJsConfig, BsJsStyles } from '../libTypes'
import { bsJsBackgroundStyles } from './background'

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
    const { bsJsAll, ...breakpoints } = config
    const background = bsJsBackgroundStyles(this._prefix, bsJsAll?.background)
    const bsJsStyles: Required<BsJsStyles> = {
      classes: {
        ...background.classes
      },
      inlineStyles: {
        ...background.inlineStyles
      }
    }

    // do stuff with each config breakpoint
    // Object.entries(breakpoints).forEach(([breakpoint, config]) => {
    // })

    return bsJsStyles
  }
}
