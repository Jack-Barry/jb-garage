import {
  AllBreakpointsOptions,
  BsJsConfig,
  BsJsStyles,
  LiteralUnion
} from '@jb-garage/bootstrap-js/_types'

import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'
import { isAllBreakpointsOptions } from '../utils/isAllBreakpointsOptions'

export type BootstrapOverflowType = LiteralUnion<'auto' | 'hidden' | 'visible' | 'scroll', string>

export type BsJsOverflowOptions =
  | BootstrapOverflowType
  | { x?: BootstrapOverflowType; y?: BootstrapOverflowType }

export function bsJsOverflowStyles(config?: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()
  if (!config || !isAllBreakpointsOptions(config[ALL_BREAKPOINTS_KEY], 'overflow')) {
    return styles
  }

  const overflowOptions = (config[ALL_BREAKPOINTS_KEY] as Required<AllBreakpointsOptions>).overflow

  if (typeof overflowOptions === 'string') {
    return { classes: { [`overflow-${overflowOptions}`]: true }, inlineStyles: {} }
  }

  styles.classes = Object.entries(overflowOptions).reduce((result, [axis, overflowType]) => {
    result[`overflow-${axis}-${overflowType}`] = true
    return result
  }, {} as BsJsStyles['classes'])

  return styles
}
