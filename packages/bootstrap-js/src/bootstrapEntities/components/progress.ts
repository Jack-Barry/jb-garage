import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsProgressOptions = {
  /**
   * Amount of progress to show, representing a percentage based on `progressMin`
   *   and `progressMax` values
   */
  progressValue: number
  /** @default 0 */
  progressMin?: number
  /** @default 100 */
  progressMax?: number
  /** Whether or not the `progress` element is nested in a `progress-stacked` */
  isStacked?: boolean
}
export function applyProgressStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'progress'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.isStacked) {
    result.inlineStyles['width'] = getProgressWidth(
      options.progressValue,
      options.progressMin,
      options.progressMax
    )
  }

  result.elementAttributes['role'] = 'progressbar'
  result.elementAttributes['aria-valuenow'] = options.progressValue
  result.elementAttributes['aria-valuemin'] = options.progressMin ?? 0
  result.elementAttributes['aria-valuemax'] = options.progressMax ?? 100
}

export type BsJsProgressBarOptions = BsJsProgressOptions & {
  /** Apply striped styles to progress bar */
  striped?: boolean
  /** Apply animation to progress bar */
  animated?: boolean
}
export function applyProgressBarStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'progress-bar'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.striped) {
    result.classes['progress-bar-striped'] = true
  }

  if (options.animated) {
    result.classes['progress-bar-animated'] = true
  }

  if (!options.isStacked) {
    result.inlineStyles['width'] = getProgressWidth(
      options.progressValue,
      options.progressMin,
      options.progressMax
    )
  }
}

function getProgressWidth(value: number, min = 0, max = 100) {
  return `${calculateProgressPercentage(value, min, max)}%`
}

function calculateProgressPercentage(value: number, min = 0, max = 100) {
  return (value / (max - min)) * 100
}
