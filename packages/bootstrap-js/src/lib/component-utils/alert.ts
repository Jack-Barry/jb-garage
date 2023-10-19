import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsAlertOptions = {
  dismissible?: boolean
  show?: boolean
}
export function alertStyles(options: BsJsAlertOptions = {}): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.dismissible) {
    styles.classes['alert-dismissible'] = true
  }

  if (options.show) {
    styles.classes['show'] = true
  }

  return styles
}
