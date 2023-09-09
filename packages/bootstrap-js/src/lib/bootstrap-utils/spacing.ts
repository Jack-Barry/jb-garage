import { BsJsStyles, IndividualBreakpointOptions, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

type BootstrapSpacingValue = LiteralUnion<
  '0' | '1' | '2' | '3' | '4' | '5' | 'auto',
  number | string
>

type BsJsSpacingConfig = {
  allSides?: BootstrapSpacingValue
  x?: BootstrapSpacingValue
  y?: BootstrapSpacingValue
  top?: BootstrapSpacingValue
  end?: BootstrapSpacingValue
  bottom?: BootstrapSpacingValue
  start?: BootstrapSpacingValue
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

export function bsJsSpacingStyles(
  breakpoint: string,
  options: IndividualBreakpointOptions['spacing']
): BsJsStyles | null {
  if (!options) {
    return null
  }

  const styles = emptyStyles()
  const { margin, negativeMargin, padding, gap } = options
  const marginClasses = getSpacingClasses({ prefix: 'm', breakpoint }, margin)
  const negativeMarginClasses = getSpacingClasses(
    { prefix: 'm', valuePrefix: 'n', breakpoint },
    negativeMargin
  )
  const paddingClasses = getSpacingClasses({ prefix: 'p', breakpoint }, padding)
  const gapClasses = getGapClasses(gap, breakpoint)

  styles.classes = {
    ...marginClasses,
    ...negativeMarginClasses,
    ...paddingClasses,
    ...gapClasses
  }

  return styles
}

function getSpacingClasses(
  options: { prefix: 'm' | 'p'; valuePrefix?: 'n'; breakpoint?: string },
  value?: BootstrapSpacingValue | BsJsSpacingConfig
): Required<BsJsStyles>['classes'] {
  if (!value && !isStringOrNumber(value)) {
    return {}
  }

  const { prefix, valuePrefix = '', breakpoint = '' } = options
  const classes: BsJsStyles['classes'] = {}

  const fullValuePrefix =
    breakpoint && breakpoint !== ALL_BREAKPOINTS_KEY ? `${breakpoint}-${valuePrefix}` : valuePrefix

  if (!isBsJsSpacingConfig(value)) {
    classes[`${prefix}-${fullValuePrefix}${value}`] = true
    return classes
  }

  const { allSides, x, y, top, end, bottom, start } = value

  if (isStringOrNumber(allSides)) {
    classes[`${prefix}-${fullValuePrefix}${allSides}`] = true
  }

  if (isStringOrNumber(x)) {
    classes[`${prefix}x-${fullValuePrefix}${x}`] = true
  }

  if (isStringOrNumber(y)) {
    classes[`${prefix}y-${fullValuePrefix}${y}`] = true
  }

  if (isStringOrNumber(top)) {
    classes[`${prefix}t-${fullValuePrefix}${top}`] = true
  }

  if (isStringOrNumber(end)) {
    classes[`${prefix}e-${fullValuePrefix}${end}`] = true
  }

  if (isStringOrNumber(bottom)) {
    classes[`${prefix}b-${fullValuePrefix}${bottom}`] = true
  }

  if (isStringOrNumber(start)) {
    classes[`${prefix}s-${fullValuePrefix}${start}`] = true
  }

  return classes
}

function getGapClasses(
  value?: BootstrapSpacingValue | BsJsGapConfig,
  breakpoint = ''
): BsJsStyles['classes'] {
  if (!value) {
    return {}
  }

  const classes: BsJsStyles['classes'] = {}
  const prefix = breakpoint && breakpoint !== ALL_BREAKPOINTS_KEY ? `${breakpoint}-` : ''

  if (!isBsJsGapConfig(value)) {
    classes[`gap-${prefix}${value}`] = true
    return classes
  }

  const { column, row } = value
  if (column) {
    classes[`column-gap-${prefix}${column}`] = true
  }

  if (row) {
    classes[`row-gap-${prefix}${row}`] = true
  }

  return classes
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
  return typeof value === 'string' || typeof value === 'number'
}
