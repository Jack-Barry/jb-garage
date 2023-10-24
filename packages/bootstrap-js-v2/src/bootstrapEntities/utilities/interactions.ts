import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsInteractionsOptions = {
  select?: LiteralUnion<'all' | 'auto' | 'none', string>
  pointer?: LiteralUnion<'none' | 'auto', string>
}

export function applyInteractionsStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.interactions) {
    return
  }

  const { select, pointer } = options.interactions

  if (select) {
    result.classes[`user-select-${select}`] = true
  }

  if (pointer) {
    result.classes[`pe-${pointer}`] = true
  }
}
