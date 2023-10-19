import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsAccordionOptions = {
  /** Apply flush styling to the accordion */
  flush?: boolean
}
export function accordionStyles(options: BsJsAccordionOptions = {}): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.flush) {
    styles.classes['accordion-flush'] = true
  }

  return styles
}

export type BsJsAccordionButtonOptions = {
  collapsed?: boolean
  asBtn?: boolean
}
export function accordionButtonStyles(options: BsJsAccordionButtonOptions = {}): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.collapsed) {
    styles.classes['collapsed'] = true
  }

  if (options.asBtn) {
    styles.classes['btn'] = true
  }

  return styles
}
