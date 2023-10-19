import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsImageOptions = {
  fluid?: boolean
  thumbnail?: boolean
}
/**
 * Translates provided options into Bootstrap classes and inline styles for images
 *
 * - https://getbootstrap.com/docs/5.3/content/images/
 */
export function imageStyles(options: BsJsImageOptions = {}): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.fluid) {
    styles.classes['img-fluid'] = true
  }

  if (options.thumbnail) {
    styles.classes['img-thumbnail'] = true
  }

  return styles
}
