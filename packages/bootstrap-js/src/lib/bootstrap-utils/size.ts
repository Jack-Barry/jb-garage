import { AllBreakpointsOptions, BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

type BootstrapSize = LiteralUnion<'25' | '50' | '75' | '100' | 'auto', string | number>
type OneHundred = LiteralUnion<'100', string | number>

export type BsJsSizeOptions = {
  width?: BootstrapSize
  maxWidth?: OneHundred
  viewportWidth?: OneHundred
  minViewportWidth?: OneHundred
  height?: BootstrapSize
  maxHeight?: OneHundred
  viewportHeight?: OneHundred
  minViewportHeight?: OneHundred
}

export function bsJsSizeStyles(options: AllBreakpointsOptions['size']): BsJsStyles | null {
  if (typeof options === 'undefined') {
    return null
  }

  const styles = emptyStyles()
  const {
    width,
    maxWidth,
    viewportWidth,
    minViewportWidth,
    height,
    maxHeight,
    viewportHeight,
    minViewportHeight
  } = options

  if (width) {
    styles.classes[`w-${width}`] = true
  }

  if (maxWidth) {
    styles.classes[`mw-${maxWidth}`] = true
  }

  if (viewportWidth) {
    styles.classes[`vw-${viewportWidth}`] = true
  }

  if (minViewportWidth) {
    styles.classes[`min-vw-${minViewportWidth}`] = true
  }

  if (height) {
    styles.classes[`h-${height}`] = true
  }

  if (maxHeight) {
    styles.classes[`mh-${maxHeight}`] = true
  }

  if (viewportHeight) {
    styles.classes[`vh-${viewportHeight}`] = true
  }

  if (minViewportHeight) {
    styles.classes[`min-vh-${minViewportHeight}`] = true
  }

  return styles
}
