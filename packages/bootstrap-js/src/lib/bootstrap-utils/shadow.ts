import {
  AllBreakpointsOptions,
  BsJsConfig,
  BsJsStyles,
  LiteralUnion
} from '@jb-garage/bootstrap-js/_types'

import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'
import { isAllBreakpointsOptions } from '../utils/isAllBreakpointsOptions'

type BootstrapShadowSize = LiteralUnion<'sm' | 'lg' | 'none', string>
export type BsJsShadowOptions = true | BootstrapShadowSize

export function bsJsShadowStyles(config: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()

  if (!config || !isAllBreakpointsOptions(config[ALL_BREAKPOINTS_KEY], 'shadow')) {
    return styles
  }

  const shadowOptions = (config[ALL_BREAKPOINTS_KEY] as Required<AllBreakpointsOptions>).shadow

  if (shadowOptions === true) {
    styles.classes = { shadow: true }
  } else {
    styles.classes = { [`shadow-${shadowOptions}`]: true }
  }

  return styles
}
