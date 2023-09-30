import { BsJsStyles } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsResponsivePositionHelperOptions = 'sticky-top' | 'sticky-bottom'
export type BsJsPositionHelperOptions =
  | 'fixed-top'
  | 'fixed-bottom'
  | BsJsResponsivePositionHelperOptions

export function bsJsPositionHelperStyles(
  breakpoint: string,
  position?: BsJsPositionHelperOptions
): BsJsStyles | null {
  if (!position) {
    return null
  }

  const styles = emptyStyles()

  if (breakpoint === ALL_BREAKPOINTS_KEY) {
    styles.classes[position] = true
    return styles
  }

  if (position === 'sticky-top') {
    styles.classes[`sticky-${breakpoint}-top`] = true
  }

  if (position === 'sticky-bottom') {
    styles.classes[`sticky-${breakpoint}-bottom`] = true
  }

  return styles
}
