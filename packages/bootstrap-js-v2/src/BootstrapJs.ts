import { BootstrapElement } from './_bootstrapTypes'
import { BsJsOptions, BsJsStyles } from './_types'
import { applyBreakpointSpecificStyles } from './breakpointSpecific'
import { applyCommonStyles } from './common'
import { ElementStyleOptions, applyElementStyles } from './elements'
import { emptyStyles } from './utils'

export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /**
   * Translates provided config into Bootstrap style attributes for an HTML element
   */
  bsJs = <Element extends BootstrapElement | undefined = undefined>(
    options: BsJsOptions<Element> = {}
  ) => {
    const result: BsJsStyles = emptyStyles()
    if (Object.keys(options).length === 0) {
      return result
    }

    const { theme, breakpoints, ...rest } = options

    applyElementStyles(this._prefix, result, rest as ElementStyleOptions<Element>)
    applyCommonStyles(this._prefix, result, { theme })
    applyBreakpointSpecificStyles(this._prefix, result, breakpoints)

    return result
  }
}
