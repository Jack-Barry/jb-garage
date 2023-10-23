import { LiteralUnion, isNumber, isString, isUndefined } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsColSpan =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'auto'
export type BsJsColOrder = BsJsColSpan | 'first' | 'last'
export type BsJsColOffset = '0' | BsJsColSpan

export type BsJsColOptions = {
  /** Number of columns the element should span across */
  cols?: LiteralUnion<BsJsColSpan, string | number>
  /** Order number/position of the column */
  order?: LiteralUnion<BsJsColOrder, string | number>
  /** Size of offset for column */
  offset?: LiteralUnion<BsJsColOffset, string | number>
}

export type BsJsColBreakpointDependentOptions = {
  /**
   * Set to `true` to enable columns at this breakpoint, or specify the number
   *   of columns the element should span across for this breakpoint and above
   */
  col?: boolean | BsJsColSpan | BsJsColOptions
}

export function applyColStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'col'>
) {
  let isEnabledAtBreakpoint = false
  for (const [breakpoint, breakpointOptions] of Object.entries(options.breakpoints || {})) {
    const colOptions = breakpointOptions as BsJsColBreakpointDependentOptions
    if (!colOptions.col) {
      continue
    }

    isEnabledAtBreakpoint = true

    if (isNumber(colOptions.col) || isString(colOptions.col)) {
      result.classes[`col-${breakpoint}-${colOptions.col}`] = true
      continue
    }

    result.classes[`col-${breakpoint}`] = true

    if (colOptions.col === true) {
      continue
    }

    if (colOptions.col.cols) {
      result.classes[`col-${breakpoint}-${colOptions.col.cols}`] = true
    }

    if (!isUndefined(colOptions.col.offset)) {
      result.classes[`offset-${breakpoint}-${colOptions.col.offset}`] = true
    }

    if (!isUndefined(colOptions.col.order)) {
      result.classes[`order-${breakpoint}-${colOptions.col.order}`] = true
    }
  }

  if (!isEnabledAtBreakpoint && !options.cols) {
    result.classes['col'] = true
  }

  if (options.cols) {
    result.classes[`col-${options.cols}`] = true
  }

  if (!isUndefined(options.offset)) {
    result.classes[`offset-${options.offset}`] = true
  }

  if (!isUndefined(options.order)) {
    result.classes[`order-${options.order}`] = true
  }
}
