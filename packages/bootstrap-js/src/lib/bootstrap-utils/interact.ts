import { isEmptyObject } from '@jb-garage/utils-generic'

import { AllBreakpointsOptions, BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsInteractOptions = {
  select?: LiteralUnion<'all' | 'auto' | 'none', string>
  pointer?: LiteralUnion<'none' | 'auto', string>
}

export function bsJsInteractStyles(
  options: AllBreakpointsOptions['interactions']
): BsJsStyles | null {
  if (!options || isEmptyObject(options)) {
    return null
  }

  const styles = emptyStyles()
  const { select, pointer } = options

  if (select) {
    styles.classes[`user-select-${select}`] = true
  }

  if (pointer) {
    styles.classes[`pe-${pointer}`] = true
  }

  return styles
}
