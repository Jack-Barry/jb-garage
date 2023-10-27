import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export function applyVisuallyHiddenStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.visuallyHidden) {
    return
  }

  result.classes['visually-hidden'] = true
}
