import { LiteralUnion, isNumber, isString } from '@jb-garage/utils-generic'

import { BootstrapSpacingValue } from '../../_bootstrapTypes'
import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsSpacingConfig = {
  allSides?: LiteralUnion<BootstrapSpacingValue, string | number>
  x?: LiteralUnion<BootstrapSpacingValue, string | number>
  y?: LiteralUnion<BootstrapSpacingValue, string | number>
  top?: LiteralUnion<BootstrapSpacingValue, string | number>
  end?: LiteralUnion<BootstrapSpacingValue, string | number>
  bottom?: LiteralUnion<BootstrapSpacingValue, string | number>
  start?: LiteralUnion<BootstrapSpacingValue, string | number>
}

type BsJsGapConfig = {
  row?: BootstrapSpacingValue
  column?: BootstrapSpacingValue
}

export type BsJsSpacingOptions = {
  margin?: BootstrapSpacingValue | BsJsSpacingConfig
  negativeMargin?: BootstrapSpacingValue | BsJsSpacingConfig
  padding?: BootstrapSpacingValue | BsJsSpacingConfig
  gap?: BootstrapSpacingValue | BsJsGapConfig
}

export function applySpacingStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions,
  breakpoint = ''
) {
  if (!options.spacing) {
    return
  }

  const { margin, negativeMargin, padding, gap } = options.spacing
  setSpacingClasses(result, { prefix: 'm', breakpoint }, margin)
  setSpacingClasses(result, { prefix: 'm', valuePrefix: 'n', breakpoint }, negativeMargin)
  setSpacingClasses(result, { prefix: 'p', breakpoint }, padding)
  setGapClasses(result, gap, breakpoint)
}

function setSpacingClasses(
  result: BsJsStyles,
  options: { prefix: 'm' | 'p'; valuePrefix?: 'n'; breakpoint?: string },
  value?: BootstrapSpacingValue | BsJsSpacingConfig
) {
  if (!value && !isStringOrNumber(value)) {
    return
  }

  const { prefix, valuePrefix = '', breakpoint = '' } = options

  const fullValuePrefix = breakpoint ? `${breakpoint}-${valuePrefix}` : valuePrefix

  if (!isBsJsSpacingConfig(value)) {
    result.classes[`${prefix}-${fullValuePrefix}${value}`] = true
    return
  }

  const { allSides, x, y, top, end, bottom, start } = value

  if (isStringOrNumber(allSides)) {
    result.classes[`${prefix}-${fullValuePrefix}${allSides}`] = true
  }

  if (isStringOrNumber(x)) {
    result.classes[`${prefix}x-${fullValuePrefix}${x}`] = true
  }

  if (isStringOrNumber(y)) {
    result.classes[`${prefix}y-${fullValuePrefix}${y}`] = true
  }

  if (isStringOrNumber(top)) {
    result.classes[`${prefix}t-${fullValuePrefix}${top}`] = true
  }

  if (isStringOrNumber(end)) {
    result.classes[`${prefix}e-${fullValuePrefix}${end}`] = true
  }

  if (isStringOrNumber(bottom)) {
    result.classes[`${prefix}b-${fullValuePrefix}${bottom}`] = true
  }

  if (isStringOrNumber(start)) {
    result.classes[`${prefix}s-${fullValuePrefix}${start}`] = true
  }
}

function setGapClasses(
  result: BsJsStyles,
  value?: BootstrapSpacingValue | BsJsGapConfig,
  breakpoint = ''
) {
  if (!value) {
    return
  }

  const prefix = breakpoint ? `${breakpoint}-` : ''

  if (!isBsJsGapConfig(value)) {
    result.classes[`gap-${prefix}${value}`] = true
    return
  }

  const { column, row } = value
  if (column) {
    result.classes[`column-gap-${prefix}${column}`] = true
  }

  if (row) {
    result.classes[`row-gap-${prefix}${row}`] = true
  }
}

function isBsJsSpacingConfig(value: unknown): value is BsJsSpacingConfig {
  const { x, y, top, end, bottom, start } = value as BsJsSpacingConfig
  return (
    isStringOrNumber(x) ||
    isStringOrNumber(y) ||
    isStringOrNumber(top) ||
    isStringOrNumber(end) ||
    isStringOrNumber(bottom) ||
    isStringOrNumber(start)
  )
}

function isBsJsGapConfig(value: unknown): value is BsJsGapConfig {
  const { column, row } = value as BsJsGapConfig
  return isStringOrNumber(column) || isStringOrNumber(row)
}

function isStringOrNumber(value: unknown): value is string | number {
  return isString(value) || isNumber(value)
}
