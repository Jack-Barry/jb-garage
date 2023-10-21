import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsCarouselOptions = {
  fade?: boolean
}
export function carouselStyles(options: BsJsCarouselOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (options.fade) {
    styles.classes['carousel-fade'] = true
  }

  return styles
}

type BsJsCarouselDirection = 'prev' | 'next'
export type BsJsCarouselControlOptions = {
  direction?: BsJsCarouselDirection
}
export function carouselControlStyles(options: BsJsCarouselControlOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (options.direction) {
    styles.classes[`carousel-control-${options.direction}`] = true
  }

  return styles
}

export function carouselControlIconStyles(options: BsJsCarouselControlOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (options.direction) {
    styles.classes[`carousel-control-${options.direction}-icon`] = true
  }

  return styles
}

export type BsJsCarouselItemOptions = {
  active?: boolean
}
export function carouselItemStyles(options: BsJsCarouselItemOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (options.active) {
    styles.classes['active'] = true
  }

  return styles
}
