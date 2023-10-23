import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'
import { BsJsImageOptions } from '../content/image'
import { applyLinkStyles } from '../utilities/link'

export type BsJsCardImagePosition = 'top' | 'bottom'

export type BsJsCardImageOptions = BsJsImageOptions & {
  imagePosition?: LiteralUnion<BsJsCardImagePosition, string>
}

export function applyCardImageStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'card-img'>
) {
  if (options.imagePosition) {
    result.classes[`card-img-${options.imagePosition}`] = true
  } else {
    applyElementNameAsClass(result, options.elementType)
  }
}

export function applyCardLinkStyles<Breakpoints extends string>(
  prefix: string,
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'card-link'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyLinkStyles(prefix, result, options)
}
