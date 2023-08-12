import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrUtilsBreakpointBasedOptions } from '../../BrElement'
import { BrStyles } from '../brStyles'

type BrGapSize = LiteralUnion<'0' | '1' | '2' | '3' | '4' | '5', number | string>

type BrFlexPropAlignment = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type BrFlexProp = {
  row?: true | 'reverse'
  column?: true | 'reverse'
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  alignItems?: BrFlexPropAlignment
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  alignSelf?: BrFlexPropAlignment
  fill?: boolean
  grow?: boolean
  shrink?: boolean
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  order?: LiteralUnion<'first' | 'last' | '0' | '1' | '2' | '3' | '4' | '5', number | string>
  gap?: BrGapSize
  gapRow?: BrGapSize
  gapColumn?: BrGapSize
}

export type BrUtilsFlexOptions = BrFlexProp | BrUtilsBreakpointBasedOptions<BrFlexProp>

export function brUtilsFlexStyles(props?: BrUtilsFlexOptions): BrStyles {
  if (!props) {
    return {}
  }

  const classes: Record<string, boolean> = {}

  if (isBrFlexProp(props)) {
    setFlexStyles(classes, props)
    return { classes }
  }

  for (const [breakpoint, prop] of Object.entries(props)) {
    if (!prop) {
      continue
    }

    setFlexStyles(classes, prop, breakpoint)
  }

  return { classes }
}

function setFlexStyles(
  classes: Required<BrStyles>['classes'],
  prop: BrFlexProp,
  breakpoint: keyof BrUtilsBreakpointBasedOptions<BrFlexProp> = 'brAllBreakpoints'
): void {
  const prefix = breakpoint === 'brAllBreakpoints' ? '' : `${breakpoint}-`
  const {
    row,
    column,
    justifyContent,
    alignItems,
    alignSelf,
    fill,
    grow,
    shrink,
    wrap,
    order,
    alignContent,
    gap,
    gapRow,
    gapColumn
  } = prop
  if (row === true) {
    classes[`flex-${prefix}row`] = true
  } else if (typeof row !== 'undefined') {
    classes[`flex-${prefix}row-${row}`] = true
  }

  if (column === true) {
    classes[`flex-${prefix}column`] = true
  } else if (typeof column !== 'undefined') {
    classes[`flex-${prefix}column-${column}`] = true
  }

  if (justifyContent) {
    classes[`justify-content-${prefix}${justifyContent}`] = true
  }

  if (alignItems) {
    classes[`align-items-${prefix}${alignItems}`] = true
  }

  if (alignContent) {
    classes[`align-content-${prefix}${alignContent}`] = true
  }

  if (alignSelf) {
    classes[`align-self-${prefix}${alignSelf}`] = true
  }

  if (fill) {
    classes[`flex-${prefix}fill`] = true
  }

  if (typeof grow !== 'undefined') {
    classes[`flex-${prefix}grow-${grow ? 1 : 0}`] = true
  }

  if (typeof shrink !== 'undefined') {
    classes[`flex-${prefix}shrink-${shrink ? 1 : 0}`] = true
  }

  if (wrap) {
    classes[`flex-${prefix}${wrap}`] = true
  }

  if (typeof order !== 'undefined') {
    classes[`order-${prefix}${order}`] = true
  }

  if (typeof gap !== 'undefined') {
    classes[`gap-${prefix}${gap}`] = true
  }

  if (typeof gapRow !== 'undefined') {
    classes[`row-gap-${prefix}${gapRow}`] = true
  }

  if (typeof gapColumn !== 'undefined') {
    classes[`column-gap-${prefix}${gapColumn}`] = true
  }
}

function isBrFlexProp(prop: unknown): prop is BrFlexProp {
  if (!prop) {
    return false
  }

  const {
    row,
    column,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf,
    fill,
    grow,
    shrink,
    wrap,
    order,
    gap,
    gapRow,
    gapColumn
  } = prop as BrFlexProp

  return (
    !!row ||
    !!column ||
    !!justifyContent ||
    !!alignItems ||
    !!alignContent ||
    !!alignSelf ||
    typeof fill === 'boolean' ||
    typeof grow === 'boolean' ||
    typeof shrink === 'boolean' ||
    !!wrap ||
    typeof order === 'string' ||
    typeof order === 'number' ||
    typeof gap === 'string' ||
    typeof gap === 'number' ||
    typeof gapRow === 'string' ||
    typeof gapRow === 'number' ||
    typeof gapColumn === 'string' ||
    typeof gapColumn === 'number'
  )
}
