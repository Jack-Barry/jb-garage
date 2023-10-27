import { LiteralUnion, isUndefined } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapSize = '25' | '50' | '75' | '100' | 'auto'
type OneHundred = LiteralUnion<'100', string | number>

export type BsJsSizeOptions = {
  width?: LiteralUnion<BootstrapSize, string | number>
  maxWidth?: OneHundred
  viewportWidth?: OneHundred
  minViewportWidth?: OneHundred
  height?: LiteralUnion<BootstrapSize, string | number>
  maxHeight?: OneHundred
  viewportHeight?: OneHundred
  minViewportHeight?: OneHundred
}

export function applySizingStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (isUndefined(options.size)) {
    return
  }

  const {
    width,
    maxWidth,
    viewportWidth,
    minViewportWidth,
    height,
    maxHeight,
    viewportHeight,
    minViewportHeight
  } = options.size

  if (width) {
    result.classes[`w-${width}`] = true
  }

  if (maxWidth) {
    result.classes[`mw-${maxWidth}`] = true
  }

  if (viewportWidth) {
    result.classes[`vw-${viewportWidth}`] = true
  }

  if (minViewportWidth) {
    result.classes[`min-vw-${minViewportWidth}`] = true
  }

  if (height) {
    result.classes[`h-${height}`] = true
  }

  if (maxHeight) {
    result.classes[`mh-${maxHeight}`] = true
  }

  if (viewportHeight) {
    result.classes[`vh-${viewportHeight}`] = true
  }

  if (minViewportHeight) {
    result.classes[`min-vh-${minViewportHeight}`] = true
  }
}
