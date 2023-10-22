import { BsJsActivatableElementOptions, BsJsOptions, BsJsStyles } from '../../_types'
import { applyActiveStyles, applyElementNameAsClass } from '../../elements/utils'

export type BsJsCarouselOptions = {
  /** @default true */
  slide?: boolean
  /** Apply a fade transition instead of a slide */
  fade?: boolean
}
export function applyCarouselStyles(result: BsJsStyles, options: BsJsOptions<'carousel'>) {
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

export function applyCarouselControlStyles(
  result: BsJsStyles,
  options: BsJsOptions<'carousel-control'>
) {
  result.classes[`carousel-control-${options.direction}`] = true
}

export function applyCarouselControlIconStyles(
  result: BsJsStyles,
  options: BsJsOptions<'carousel-control-icon'>
) {
  result.classes[`carousel-control-${options.direction}-icon`] = true
}

export type BsJsCarouselItemOptions = BsJsActivatableElementOptions
export function applyCarouselItemStyles(result: BsJsStyles, options: BsJsOptions<'carousel-item'>) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)
}
