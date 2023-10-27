import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapVerticalAlign =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-bottom'
  | 'text-top'

export function applyVerticalAlignStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions
) {
  if (!options.verticalAlign) {
    return
  }

  result.classes[`align-${options.verticalAlign}`] = true
}
