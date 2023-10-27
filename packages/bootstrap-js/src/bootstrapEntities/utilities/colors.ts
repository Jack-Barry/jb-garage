import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export function applyTextColor(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (options.color) {
    result.classes[`text-${options.color}`] = true
  }
}
