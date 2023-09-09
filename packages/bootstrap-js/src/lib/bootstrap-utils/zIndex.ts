import { BsJsStyles, LiteralUnion } from '@jb-garage/bootstrap-js/_types'

import { emptyStyles } from '../utils/emptyStyles'

export type BootstrapZIndex = LiteralUnion<'n1' | '0' | '1' | '2' | '3', number | string>

export function bsJsZIndexStyles(zIndex?: BootstrapZIndex): BsJsStyles | null {
  const isNegativeString = typeof zIndex === 'string' && zIndex.startsWith('n')
  const asNumber =
    typeof zIndex === 'number'
      ? zIndex
      : typeof zIndex === 'string'
      ? parseInt(zIndex.replace('n', ''))
      : undefined

  if (typeof asNumber === 'undefined' || isNaN(asNumber)) {
    return null
  }

  const styles = emptyStyles()
  const isNegative = asNumber < 0 || isNegativeString

  if (isNegative) {
    styles.classes[`z-n${Math.abs(asNumber)}`] = true
  } else {
    styles.classes[`z-${asNumber}`] = true
  }

  return styles
}
