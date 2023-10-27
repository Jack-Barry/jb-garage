import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapDefaultBreakpoint } from '../../_bootstrapTypes'
import { BsJsActivatableElementOptions, BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsTableOptions = {
  /** Alternate color of rows for striping effect */
  striped?: boolean
  /** Alternate color of columns for striping effect */
  stripedCols?: boolean
  /** Apply special styles on row hover */
  rowHover?: boolean
  /** Apply border around table elements */
  bordered?: boolean
  /** Remove border around table elements */
  borderless?: boolean
  /** Present table in a different size format */
  tableSize?: LiteralUnion<'sm', string>
  /** Place `caption` element from `table` above the table visually */
  captionTop?: boolean
}
export function applyTableStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'table'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.striped) {
    result.classes['table-striped'] = true
  }

  if (options.stripedCols) {
    result.classes['table-striped-columns'] = true
  }

  if (options.rowHover) {
    result.classes['table-hover'] = true
  }

  if (options.bordered) {
    result.classes['table-bordered'] = true
  }

  if (options.borderless) {
    result.classes['table-borderless'] = true
  }

  if (options.tableSize) {
    result.classes[`table-${options.tableSize}`] = true
  }

  if (options.captionTop) {
    result.classes['caption-top'] = true
  }
}

export type BsJsTableEntryOptions = BsJsActivatableElementOptions
export function applyTableEntryStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'table-entry' | 'table-group'>
) {
  if (options.active) {
    result.classes['table-active'] = true
  }
}

export type BsJsTableGroupOptions = BsJsTableEntryOptions & {
  /** Make border thicker and darker between this group and others */
  groupDivider?: boolean
}
export function applyTableGroupStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'table-group'>
) {
  applyTableEntryStyles(result, options)

  if (options.groupDivider) {
    result.classes['table-group-divider'] = true
  }
}

export type BsJsTableResponsiveOptions = {
  /** Breakpoint at which to stop applying responsive styling */
  responsiveMaxBreakpoint?: LiteralUnion<BootstrapDefaultBreakpoint, string>
}
export function applyTableResponsiveStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'table-responsive'>
) {
  result.classes['table'] = true

  if (options.responsiveMaxBreakpoint) {
    result.classes[`table-responsive-${options.responsiveMaxBreakpoint}`] = true
  } else {
    result.classes['table-responsive'] = true
  }
}
