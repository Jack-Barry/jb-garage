import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsSpinnerOptions = {
  /**
   * How to present the spinner
   *
   * @default "border"
   */
  spinnerType?: LiteralUnion<'border' | 'grow', string>
  /** Size class to apply to spinner */
  spinnerSize?: LiteralUnion<'sm', string>
  /** Size to use for height and width of inline styles for spinner */
  size?: string
}
export function applySpinnerStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'spinner'>
) {
  const usedSpinnerType = options.spinnerType || 'border'

  result.classes[`spinner-${usedSpinnerType}`] = true

  if (options.spinnerSize) {
    result.classes[`spinner-${usedSpinnerType}-${options.spinnerSize}`] = true
  }

  if (options.size) {
    result.inlineStyles['width'] = options.size
    result.inlineStyles['height'] = options.size
  }
}
