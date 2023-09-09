import { isEmptyObject } from '../../../../utils-generic/src'
import { BsJsStyles, IndividualBreakpointOptions, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

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

export function bsJsFlexStyles(
  breakpoint: string,
  options: IndividualBreakpointOptions['flex']
): BsJsStyles | null {
  if (!options || isEmptyObject(options)) {
    return null
  }

  const styles = emptyStyles()
  setFlexStyles(styles.classes, options, breakpoint)

  return styles
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
