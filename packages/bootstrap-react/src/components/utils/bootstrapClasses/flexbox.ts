import { BrElementCommonProps } from '../BrElement'

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
  order?:
    | 'first'
    | 'last'
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | number
    | string
}

export function brFlexClasses(
  props: Pick<
    BrElementCommonProps,
    'brFlex' | 'brFlexSm' | 'brFlexMd' | 'brFlexLg' | 'brFlexXl' | 'brFlexXxl'
  >
) {
  const classes: Record<string, boolean> = {}

  for (const [key, flexConfig] of Object.entries(props)) {
    if (!flexConfig) {
      continue
    }

    const size = key.replace('brFlex', '').toLowerCase()
    const prefix = size ? `${size}-` : ''
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
    } = flexConfig
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

    if (alignContent) {
      classes[`align-content-${prefix}${alignContent}`] = true
    }
  }

  return classes
}
