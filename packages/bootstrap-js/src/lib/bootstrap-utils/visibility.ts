import { BsJsStyles } from '@jb-garage/bootstrap-js/_types'

import { emptyStyles } from '../utils/emptyStyles'

export function bsJsVisibilityStyles(visibility?: boolean): BsJsStyles | null {
  if (typeof visibility === 'undefined') {
    return null
  }

  const styles = emptyStyles()

  if (visibility) {
    styles.classes['visible'] = true
  } else {
    styles.classes['invisible'] = true
  }

  return styles
}
