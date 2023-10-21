import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsComponent, BsJsOptions, BsJsStyles } from '../_types'

/** Modifies the provided `result` object with breakpoint-specific styles */
export function applyBreakpointSpecificStyles<Component extends BsJsComponent | undefined>(
  prefix: string,
  result: BsJsStyles,
  breakpointOptions: BsJsOptions<Component>['breakpoints']
) {
  if (!breakpointOptions || isEmptyObject(breakpointOptions)) {
    return
  }

  //
}
