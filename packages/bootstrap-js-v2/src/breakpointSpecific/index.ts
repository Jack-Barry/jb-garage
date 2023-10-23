import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsElement, BsJsOptions, BsJsStyles } from '../_types'

/** Modifies the provided `result` object with breakpoint-specific styles */
export function applyBreakpointSpecificStyles<
  Breakpoints extends string,
  Element extends BsJsElement | undefined
>(
  prefix: string,
  result: BsJsStyles,
  breakpointOptions: BsJsOptions<Breakpoints, Element>['breakpoints']
) {
  if (!breakpointOptions || isEmptyObject(breakpointOptions)) {
    return
  }

  //
}
