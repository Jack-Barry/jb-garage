import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'

type BootstrapSize = LiteralUnion<'25' | '50' | '75' | '100' | 'auto', string | number>
type OneHundred = LiteralUnion<'100', string | number>

export type BrUtilsSizeOptions = {
  width?: BootstrapSize
  maxWidth?: OneHundred
  viewportWidth?: OneHundred
  minViewportWidth?: OneHundred
  height?: BootstrapSize
  maxHeight?: OneHundred
  viewportHeight?: OneHundred
  minViewportHeight?: OneHundred
}

export function brUtilsSizeStyles(options?: BrUtilsSizeOptions): BrStyles {
  if (!options) {
    return {}
  }

  const classes: BrStyles['classes'] = {}
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
    classes[`w-${width}`] = true
  }

  if (maxWidth) {
    classes[`mw-${maxWidth}`] = true
  }

  if (viewportWidth) {
    classes[`vw-${viewportWidth}`] = true
  }

  if (minViewportWidth) {
    classes[`min-vw-${minViewportWidth}`] = true
  }

  if (height) {
    classes[`h-${height}`] = true
  }

  if (maxHeight) {
    classes[`mh-${maxHeight}`] = true
  }

  if (viewportHeight) {
    classes[`vh-${viewportHeight}`] = true
  }

  if (minViewportHeight) {
    classes[`min-vh-${minViewportHeight}`] = true
  }

  return { classes }
}
