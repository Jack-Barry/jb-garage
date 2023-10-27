import { isString, isUndefined } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapZIndex = 'n1' | '0' | '1' | '2' | '3'

export function applyZIndexStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (isUndefined(options.zIndex)) {
    return
  }

  const { zIndex } = options
  const isNegativeString = isString(zIndex) && zIndex.startsWith('n')
  const asNumber =
    typeof zIndex === 'number'
      ? zIndex
      : typeof zIndex === 'string'
      ? parseInt(zIndex.replace('n', ''))
      : undefined

  if (typeof asNumber === 'undefined' || Number.isNaN(asNumber)) {
    return
  }

  const isNegative = asNumber < 0 || isNegativeString

  if (isNegative) {
    result.classes[`z-n${Math.abs(asNumber)}`] = true
  } else {
    result.classes[`z-${asNumber}`] = true
  }
}
