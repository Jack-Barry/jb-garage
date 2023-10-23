import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsFormFeedbackOptions = {
  /**
   * Type of feedback being presented
   *
   * @default "invalid"
   */
  feedbackType?: LiteralUnion<'valid' | 'invalid', string>
  /** Present feedback as a tooltip */
  asTooltip?: boolean
}
export function applyFormValidationStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'form-validation'>
) {
  const usedFeedbackType = options.feedbackType || 'invalid'

  result.classes[`${usedFeedbackType}-${options.asTooltip ? 'tooltip' : 'feedback'}`] = true
}
