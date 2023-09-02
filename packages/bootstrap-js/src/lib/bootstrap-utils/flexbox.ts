import { isEmptyObject } from '@jb-garage/utils-generic'
import { BsJsConfig, BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'

type BsJsFlexOptionAlignment = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export type BsJsFlexOptions = {
  row?: true | 'reverse'
  column?: true | 'reverse'
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  alignItems?: BsJsFlexOptionAlignment
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  alignSelf?: BsJsFlexOptionAlignment
  fill?: boolean
  grow?: boolean
  shrink?: boolean
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  order?: LiteralUnion<'first' | 'last' | '0' | '1' | '2' | '3' | '4' | '5', number | string>
}

export function bsJsFlexStyles(props?: BsJsConfig): BsJsStyles {
  if (!props || isEmptyObject(props)) {
    return { classes: {}, inlineStyles: {} }
  }

  const classes: Record<string, boolean> = {}

  for (const [breakpoint, prop] of Object.entries(props)) {
    if (!prop || !prop.flex) {
      continue
    }

    setFlexStyles(classes, prop.flex, breakpoint)
  }

  return { classes, inlineStyles: {} }
}

function setFlexStyles(
  classes: Required<BsJsStyles>['classes'],
  prop: BsJsFlexOptions,
  breakpoint: string = ALL_BREAKPOINTS_KEY
): void {
  const prefix = breakpoint === ALL_BREAKPOINTS_KEY ? '' : `${breakpoint}-`
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
    alignContent
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
}
