import {
  BsJsStyles,
  IndividualBreakpointOptions,
  LiteralUnion
} from '@jb-garage/bootstrap-js/_types'

import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsObjectFit = LiteralUnion<'contain' | 'cover' | 'fill' | 'scale ' | 'none', string>

export function bsJsObjectFitStyles(
  breakpoint: string,
  objectFit: IndividualBreakpointOptions['objectFit']
): BsJsStyles | null {
  if (!objectFit) {
    return null
  }

  const styles = emptyStyles()

  if (breakpoint === ALL_BREAKPOINTS_KEY) {
    styles.classes[`object-fit-${objectFit}`] = true
  } else {
    styles.classes[`object-fit-${breakpoint}-${objectFit}`] = true
  }

  return styles
}
