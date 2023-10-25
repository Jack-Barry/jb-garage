import { isString } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BsJsResponsivePositionHelperOptions = 'sticky-top' | 'sticky-bottom'
export type BsJsPositionHelperOptions =
  | 'fixed-top'
  | 'fixed-bottom'
  | BsJsResponsivePositionHelperOptions

export function isPositionHelperValue(value?: unknown): value is string {
  if (!value || !isString(value)) {
    return false
  }

  return ['sticky-top', 'sticky-bottom', 'fixed-top', 'fixed-bottom'].includes(value)
}

export function applyPositionHelperStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions,
  breakpoint = ''
) {
  if (!isPositionHelperValue(options.position)) {
    return
  }

  if (!breakpoint) {
    result.classes[options.position] = true
    return
  }

  if (options.position === 'sticky-top') {
    result.classes[`sticky-${breakpoint}-top`] = true
  }

  if (options.position === 'sticky-bottom') {
    result.classes[`sticky-${breakpoint}-bottom`] = true
  }
}
