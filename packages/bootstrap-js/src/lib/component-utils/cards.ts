import { isEmptyObject } from '@jb-garage/utils-generic'
import { LiteralUnion } from 'prettier'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsCardImageOptions = {
  imagePosition?: LiteralUnion<'top' | 'bottom', string>
}
export function buttonCardImageStyles(options: BsJsCardImageOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (!options.imagePosition) {
    styles.classes[`card-img-${options.imagePosition}`] = true
  } else {
    styles.classes['card-img'] = true
  }

  return styles
}
