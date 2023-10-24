import { LiteralUnion, isUndefined } from '@jb-garage/utils-generic'

import {
  BsJsBreakpointAgnosticOptions,
  BsJsBreakpointDependentOptions,
  BsJsElement,
  BsJsStyles
} from '../../_types'

export type BootstrapDisplayOption =
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'inline-grid'
  | 'table'
  | 'table-cell'
  | 'table-row'
  | 'flex'
  | 'inline-flex'

export type BsJsDisplayOption = LiteralUnion<BootstrapDisplayOption, string>

export function applyDisplayStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (isUndefined(options.display)) {
    return
  }

  result.classes[`d-${options.display}`] = true
}

export function applyDisplayStylesForBreakpoint<
  Breakpoints extends string,
  Element extends BsJsElement | undefined
>(
  result: BsJsStyles,
  breakpoint: Breakpoints,
  options: BsJsBreakpointDependentOptions<Breakpoints, Element>[Breakpoints]
) {
  if (isUndefined(options.display)) {
    return
  }

  result.classes[`d-${breakpoint}-${options.display}`] = true
}
