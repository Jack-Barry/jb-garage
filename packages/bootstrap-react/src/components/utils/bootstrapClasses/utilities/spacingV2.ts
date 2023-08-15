import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrUtilsBreakpointBasedOptions } from '../../BrElement'
import { BrStyles } from '../brStyles'

type BootstrapSpacingValue = LiteralUnion<
  '0' | '1' | '2' | '3' | '4' | '5' | 'auto',
  number | string
>

type BrUtilsSpacingConfig = {
  allSides?: BootstrapSpacingValue
  x?: BootstrapSpacingValue
  y?: BootstrapSpacingValue
  top?: BootstrapSpacingValue
  end?: BootstrapSpacingValue
  bottom?: BootstrapSpacingValue
  start?: BootstrapSpacingValue
}

type BrUtilsGapConfig = {
  row?: BootstrapSpacingValue
  column?: BootstrapSpacingValue
}

type BrUtilsSpacingProp = {
  margin?: BootstrapSpacingValue | BrUtilsSpacingConfig
  negativeMargin?: BootstrapSpacingValue | BrUtilsSpacingConfig
  padding?: BootstrapSpacingValue | BrUtilsSpacingConfig
  gap?: BootstrapSpacingValue | BrUtilsGapConfig
}

export type BrUtilsSpacingOptions =
  | BrUtilsSpacingProp
  | BrUtilsBreakpointBasedOptions<BrUtilsSpacingProp>

export function brUtilsSpacingStyles(options?: BrUtilsSpacingOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (isBrUtilsSpacingProp(options)) {
    return stylesForSpacingProp(options)
  }

  return Object.entries(options).reduce<BrStyles>((result, [breakpoint, prop]) => {
    if (!prop) {
      return result
    }

    const newResult = {
      ...result,
      classes: { ...result.classes, ...stylesForSpacingProp(prop, breakpoint).classes }
    }
    return newResult
  }, {})
}

function stylesForSpacingProp(prop: BrUtilsSpacingProp, breakpoint?: string) {
  const { margin, negativeMargin, padding, gap } = prop
  const marginClasses = getSpacingClasses({ prefix: 'm', breakpoint }, margin)
  const negativeMarginClasses = getSpacingClasses(
    { prefix: 'm', valuePrefix: 'n', breakpoint },
    negativeMargin
  )
  const paddingClasses = getSpacingClasses({ prefix: 'p', breakpoint }, padding)
  const gapClasses = getGapClasses(gap, breakpoint)

  return {
    classes: {
      ...marginClasses,
      ...negativeMarginClasses,
      ...paddingClasses,
      ...gapClasses
    }
  }
}

function getSpacingClasses(
  options: { prefix: 'm' | 'p'; valuePrefix?: 'n'; breakpoint?: string },
  value?: BootstrapSpacingValue | BrUtilsSpacingConfig
): Required<BrStyles>['classes'] {
  if (!value && !isStringOrNumber(value)) {
    return {}
  }

  const { prefix, valuePrefix = '', breakpoint = '' } = options
  const classes: BrStyles['classes'] = {}

  const fullValuePrefix =
    breakpoint && breakpoint !== 'brAllBreakpoints' ? `${breakpoint}-${valuePrefix}` : valuePrefix

  if (!isBrUtilsSpacingConfig(value)) {
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
  value?: BootstrapSpacingValue | BrUtilsGapConfig,
  breakpoint = ''
): BrStyles['classes'] {
  if (!value) {
    return {}
  }

  const classes: BrStyles['classes'] = {}
  const prefix = breakpoint && breakpoint !== 'brAllBreakpoints' ? `${breakpoint}-` : ''

  if (!isBrUtilsGapConfig(value)) {
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

function isBrUtilsSpacingConfig(value: unknown): value is BrUtilsSpacingConfig {
  const { x, y, top, end, bottom, start } = value as BrUtilsSpacingConfig
  return (
    isStringOrNumber(x) ||
    isStringOrNumber(y) ||
    isStringOrNumber(top) ||
    isStringOrNumber(end) ||
    isStringOrNumber(bottom) ||
    isStringOrNumber(start)
  )
}

function isBrUtilsGapConfig(value: unknown): value is BrUtilsGapConfig {
  const { column, row } = value as BrUtilsGapConfig
  return isStringOrNumber(column) || isStringOrNumber(row)
}

function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === 'string' || typeof value === 'number'
}

function isBrUtilsSpacingProp(value: unknown): value is BrUtilsSpacingProp {
  const { margin, negativeMargin, padding, gap } = value as BrUtilsSpacingProp

  return !!margin || !!negativeMargin || !!padding || !!gap
}
