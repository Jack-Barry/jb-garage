import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsConfig, BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'
import { isAllBreakpointsOptions } from '../utils/isAllBreakpointsOptions'

export type BsJsInteractOptions = {
  select?: LiteralUnion<'all' | 'auto' | 'none', string>
  pointer?: LiteralUnion<'none' | 'auto', string>
}

export function bsJsInteractStyles(config: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()
  if (
    !config ||
    isEmptyObject(config) ||
    !isAllBreakpointsOptions(config[ALL_BREAKPOINTS_KEY], 'interactions')
  ) {
    return styles
  }

  const { select, pointer } = config[ALL_BREAKPOINTS_KEY].interactions || {}

  if (select) {
    styles.classes[`user-select-${select}`] = true
  }

  if (pointer) {
    styles.classes[`pe-${pointer}`] = true
  }

  return styles
}
