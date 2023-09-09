import { AllBreakpointsOptions } from '../../_types'

export function isAllBreakpointsOptions(
  options: unknown,
  keyToCheck: keyof AllBreakpointsOptions
): options is AllBreakpointsOptions {
  if (!options) {
    return false
  }
  return typeof (options as AllBreakpointsOptions)[keyToCheck] !== 'undefined'
}
