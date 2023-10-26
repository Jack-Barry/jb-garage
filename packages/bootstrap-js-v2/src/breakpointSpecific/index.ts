import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsBreakpointDependentOptions, BsJsElement, BsJsOptions, BsJsStyles } from '../_types'
import { applyPositionHelperStyles } from '../bootstrapEntities/helpers/position'
import { applyDisplayStylesForBreakpoint } from '../bootstrapEntities/utilities/display'
import { applyFlexStyles } from '../bootstrapEntities/utilities/flex'
import { applyFloatStyles } from '../bootstrapEntities/utilities/float'
import { applyObjectFitStyles } from '../bootstrapEntities/utilities/objectFit'
import { applySpacingStyles } from '../bootstrapEntities/utilities/spacing'
import { applyTextStyles } from '../bootstrapEntities/utilities/text'

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

  for (const [breakpoint, options] of Object.entries<
    BsJsBreakpointDependentOptions<Breakpoints, Element>[Breakpoints]
  >(breakpointOptions as BsJsBreakpointDependentOptions<Breakpoints, Element>)) {
    // helpers
    applyPositionHelperStyles(result, options, breakpoint)
    // utilities
    applyDisplayStylesForBreakpoint<Breakpoints, Element>(
      result,
      breakpoint as Breakpoints,
      options
    )
    applyFlexStyles(result, options, breakpoint)
    applyFloatStyles(result, options, breakpoint)
    applyObjectFitStyles(result, options, breakpoint)
    applySpacingStyles(result, options, breakpoint)
    applyTextStyles(result, options, breakpoint)
  }
}
