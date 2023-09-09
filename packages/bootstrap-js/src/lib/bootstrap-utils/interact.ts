import { isEmptyObject } from '@jb-garage/utils-generic'

import { AllBreakpointsOptions, BsJsConfig, BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsInteractOptions = {
  select?: LiteralUnion<'all' | 'auto' | 'none', string>
  pointer?: LiteralUnion<'none' | 'auto', string>
}

export function bsJsInteractStyles(config: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()
  if (!config || isEmptyObject(config) || !config[ALL_BREAKPOINTS_KEY]) {
    return styles
  }

  const { select, pointer } =
    (config[ALL_BREAKPOINTS_KEY] as AllBreakpointsOptions).interactions || {}

  if (select) {
    styles.classes[`user-select-${select}`] = true
  }

  if (pointer) {
    styles.classes[`pe-${pointer}`] = true
  }

  return styles
}
