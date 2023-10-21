import { BsJsComponent, BsJsOptions, BsJsStyles } from './_types'
import { applyBreakpointSpecificStyles } from './breakpointSpecific'
import { applyCommonStyles } from './common'
import { applyComponentStyles } from './components'
import { emptyStyles } from './utils'

export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /**
   * Translates provided config into Bootstrap style attributes for an HTML element
   */
  bsJs = <Component extends BsJsComponent | undefined = undefined>(
    options: BsJsOptions<Component> = {}
  ) => {
    const result: BsJsStyles = emptyStyles()
    if (Object.keys(options).length === 0) {
      return result
    }

    const { theme, breakpoints, ...rest } = options

    applyComponentStyles(this._prefix, result, rest)
    applyCommonStyles(this._prefix, result, { theme })
    applyBreakpointSpecificStyles(this._prefix, result, breakpoints)

    return result
  }
}
