import { BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsFloatType = LiteralUnion<'start' | 'end' | 'none', string>

export function bsJsFloatStyles(breakpoint: string, floatType?: BsJsFloatType): BsJsStyles | null {
  if (!floatType) {
    return null
  }

  const styles = emptyStyles()

  if (breakpoint === ALL_BREAKPOINTS_KEY) {
    styles.classes[`float-${floatType}`] = true
  } else {
    styles.classes[`float-${breakpoint}-${floatType}`] = true
  }

  return styles
}
