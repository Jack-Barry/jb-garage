import {
  BsJsActivatableElementOptions,
  BsJsFadeableElementOptions,
  BsJsOptions,
  BsJsStyles
} from '../../_types'
import { applyActiveStyles, applyElementNameAsClass } from '../../elements/utils'

export type BsJsCarouselOptions = BsJsFadeableElementOptions & {
  /** @default true */
  slide?: boolean
}
export function applyCarouselStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'carousel'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.slide !== false) {
    result.classes['slide'] = true
  }

  if (options.fade) {
    result.classes['carousel-fade'] = true
  }
}

export type BsJsCarouselControlOptions = {
  /** Direction of the carousel control */
  direction: 'prev' | 'next'
}

export function applyCarouselControlStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'carousel-control'>
) {
  result.classes[`carousel-control-${options.direction}`] = true
}

export function applyCarouselControlIconStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'carousel-control-icon'>
) {
  result.classes[`carousel-control-${options.direction}-icon`] = true
}

export type BsJsCarouselItemOptions = BsJsActivatableElementOptions
export function applyCarouselItemStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'carousel-item'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)
}
