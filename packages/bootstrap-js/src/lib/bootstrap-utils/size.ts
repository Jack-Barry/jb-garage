import {
  AllBreakpointsOptions,
  BsJsConfig,
  BsJsStyles,
  LiteralUnion
} from '@jb-garage/bootstrap-js/_types'

import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'
import { isAllBreakpointsOptions } from '../utils/isAllBreakpointsOptions'

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

export function bsJsSizeStyles(config?: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()
  if (!config || !isAllBreakpointsOptions(config[ALL_BREAKPOINTS_KEY], 'size')) {
    return styles
  }

  const sizeOptions = (config[ALL_BREAKPOINTS_KEY] as Required<AllBreakpointsOptions>).size
  const {
    width,
    maxWidth,
    viewportWidth,
    minViewportWidth,
    height,
    maxHeight,
    viewportHeight,
    minViewportHeight
  } = sizeOptions

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
