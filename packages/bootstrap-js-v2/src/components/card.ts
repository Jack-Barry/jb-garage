import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../_types'
import { applyElementNameAsClass } from '../elements/utils'
import { applyLinkStyles } from '../utilities/link'

import { BsJsImageOptions } from './image'

export type BsJsCardImagePosition = 'top' | 'bottom'

export type BsJsCardImageOptions = BsJsImageOptions & {
  imagePosition?: LiteralUnion<BsJsCardImagePosition, string>
}

export function applyCardImageStyles(result: BsJsStyles, options: BsJsOptions<'card-img'>) {
  if (options.imagePosition) {
    result.classes[`card-img-${options.imagePosition}`] = true
  } else {
    applyElementNameAsClass(result, options.elementType)
  }
}

export function applyCardLinkStyles(
  prefix: string,
  result: BsJsStyles,
  options: BsJsOptions<'card-link'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyLinkStyles(prefix, result, options)
}
