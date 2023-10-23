import {
  LiteralUnion,
  isEmptyObject,
  isNumber,
  isString,
  isUndefined
} from '@jb-garage/utils-generic'

import { BootstrapSpacingValue } from '../../_bootstrapTypes'
import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'
import { BsJsSpacingConfig } from '../utilities/spacing'

import { BsJsColSpan } from './columns'

export type BsJsRowOptions = {
  /** Number of columns in row */
  cols?: LiteralUnion<BsJsColSpan, string | number>
  /** Size of gutter for the row */
  gutter?: LiteralUnion<BootstrapSpacingValue, string | number> | BsJsSpacingConfig
}

export type BsJsRowBreakpointDependentOptions = {
  row?: BsJsRowOptions
}

export function applyRowStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'row'>
) {
  applyElementNameAsClass(result, options.elementType)

  for (const [breakpoint, breakpointOptions] of Object.entries(options.breakpoints || {})) {
    const rowOptions = breakpointOptions as BsJsRowBreakpointDependentOptions
    if (!rowOptions.row || isEmptyObject(rowOptions.row)) {
      continue
    }

    if (!isUndefined(rowOptions.row.cols)) {
      result.classes[`row-cols-${breakpoint}-${rowOptions.row.cols}`] = true
    }

    // TODO: set up helper for spacers
    if (isNumber(rowOptions.row.gutter) || isString(rowOptions.row.gutter)) {
      result.classes[`g-${breakpoint}-${rowOptions.row.gutter}`] = true
      continue
    }

    if (rowOptions.row.gutter?.allSides) {
      result.classes[`g-${breakpoint}-${rowOptions.row.gutter.allSides}`] = true
    }

    if (rowOptions.row.gutter?.x) {
      result.classes[`gx-${breakpoint}-${rowOptions.row.gutter.x}`] = true
    }

    if (rowOptions.row.gutter?.y) {
      result.classes[`gy-${breakpoint}-${rowOptions.row.gutter.y}`] = true
    }

    if (rowOptions.row.gutter?.top) {
      result.classes[`gt-${breakpoint}-${rowOptions.row.gutter.top}`] = true
    }

    if (rowOptions.row.gutter?.end) {
      result.classes[`ge-${breakpoint}-${rowOptions.row.gutter.end}`] = true
    }

    if (rowOptions.row.gutter?.bottom) {
      result.classes[`gb-${breakpoint}-${rowOptions.row.gutter.bottom}`] = true
    }

    if (rowOptions.row.gutter?.start) {
      result.classes[`gs-${breakpoint}-${rowOptions.row.gutter.start}`] = true
    }
  }

  if (!isUndefined(options.cols)) {
    result.classes[`row-cols-${options.cols}`] = true
  }

  // TODO: set up helper for spacers
  if (isNumber(options.gutter) || isString(options.gutter)) {
    result.classes[`g-${options.gutter}`] = true
    return
  }

  if (options.gutter?.allSides) {
    result.classes[`g-${options.gutter.allSides}`] = true
  }

  if (options.gutter?.x) {
    result.classes[`gx-${options.gutter.x}`] = true
  }

  if (options.gutter?.y) {
    result.classes[`gy-${options.gutter.y}`] = true
  }

  if (options.gutter?.top) {
    result.classes[`gt-${options.gutter.top}`] = true
  }

  if (options.gutter?.end) {
    result.classes[`ge-${options.gutter.end}`] = true
  }

  if (options.gutter?.bottom) {
    result.classes[`gb-${options.gutter.bottom}`] = true
  }

  if (options.gutter?.start) {
    result.classes[`gs-${options.gutter.start}`] = true
  }
}
