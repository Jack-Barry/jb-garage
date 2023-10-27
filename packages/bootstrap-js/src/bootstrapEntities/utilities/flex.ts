import { LiteralUnion, isUndefined } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapFlexOrder = 'first' | 'last' | '0' | '1' | '2' | '3' | '4' | '5'

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
  order?: LiteralUnion<BootstrapFlexOrder, number | string>
}

export function applyFlexStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions,
  breakpoint = ''
) {
  if (isUndefined(options.flex)) {
    return
  }

  const prefix = breakpoint ? `${breakpoint}-` : ''
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
  } = options.flex
  if (row === true) {
    result.classes[`flex-${prefix}row`] = true
  } else if (typeof row !== 'undefined') {
    result.classes[`flex-${prefix}row-${row}`] = true
  }

  if (column === true) {
    result.classes[`flex-${prefix}column`] = true
  } else if (typeof column !== 'undefined') {
    result.classes[`flex-${prefix}column-${column}`] = true
  }

  if (justifyContent) {
    result.classes[`justify-content-${prefix}${justifyContent}`] = true
  }

  if (alignItems) {
    result.classes[`align-items-${prefix}${alignItems}`] = true
  }

  if (alignContent) {
    result.classes[`align-content-${prefix}${alignContent}`] = true
  }

  if (alignSelf) {
    result.classes[`align-self-${prefix}${alignSelf}`] = true
  }

  if (fill) {
    result.classes[`flex-${prefix}fill`] = true
  }

  if (typeof grow !== 'undefined') {
    result.classes[`flex-${prefix}grow-${grow ? 1 : 0}`] = true
  }

  if (typeof shrink !== 'undefined') {
    result.classes[`flex-${prefix}shrink-${shrink ? 1 : 0}`] = true
  }

  if (wrap) {
    result.classes[`flex-${prefix}${wrap}`] = true
  }

  if (typeof order !== 'undefined') {
    result.classes[`order-${prefix}${order}`] = true
  }
}
