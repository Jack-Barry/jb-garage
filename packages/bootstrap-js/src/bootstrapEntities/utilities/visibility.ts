import { isUndefined } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export function applyVisibilityStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (isUndefined(options.visibility)) {
    return
  }

  if (options.visibility) {
    result.classes['visible'] = true
  } else {
    result.classes['invisible'] = true
  }
}
