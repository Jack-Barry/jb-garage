import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsStackDirection = 'horizontal' | 'vertical'

export function applyStackStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (!options.stackDirection) {
    return
  }

  if (options.stackDirection === 'horizontal') {
    result.classes['hstack'] = true
  }

  if (options.stackDirection === 'vertical') {
    result.classes['vstack'] = true
  }
}
