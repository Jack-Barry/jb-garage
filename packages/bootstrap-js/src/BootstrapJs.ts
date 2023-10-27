import { BootstrapDefaultBreakpoint } from './_bootstrapTypes'
import { BsJsElement, BsJsOptions, BsJsStyles } from './_types'
import { applyBreakpointSpecificStyles } from './breakpointSpecific'
import { applyCommonStyles } from './common'
import { applyElementStyles } from './elements'
import { emptyStyles } from './utils'

export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /**
   * Translates provided config into Bootstrap style attributes for an HTML element
   */
  bsJs = <
    Breakpoints extends string = BootstrapDefaultBreakpoint,
    Element extends BsJsElement | undefined = undefined
  >(
    options: BsJsOptions<Breakpoints, Element> = {} as BsJsOptions<Breakpoints, Element>
  ) => {
    const result: BsJsStyles = emptyStyles()
    if (Object.keys(options).length === 0) {
      return result
    }

    const { breakpoints = {} } = options

    applyElementStyles(this._prefix, result, options)
    applyCommonStyles(this._prefix, result, options)
    applyBreakpointSpecificStyles(this._prefix, result, breakpoints)

    return result
  }
}
