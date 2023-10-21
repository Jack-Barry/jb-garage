import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsElement, BsJsOptions, BsJsStyles } from '../_types'

/** Modifies the provided `result` object with breakpoint-specific styles */
export function applyBreakpointSpecificStyles<Element extends BsJsElement | undefined>(
  prefix: string,
  result: BsJsStyles,
  breakpointOptions: BsJsOptions<Element>['breakpoints']
) {
  if (!breakpointOptions || isEmptyObject(breakpointOptions)) {
    return
  }

  //
}
