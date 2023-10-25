import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export function applyClearfixStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (!options.clearfix) {
    return
  }

  result.classes['clearfix'] = true
}
