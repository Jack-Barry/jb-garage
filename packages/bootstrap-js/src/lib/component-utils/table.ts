import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsTableOptions = {
  striped?: boolean
  stripedCols?: boolean
  rowHover?: boolean
  bordered?: boolean
  borderless?: boolean
  small?: boolean
  captionTop?: boolean
}
export function tableStyles(options: BsJsTableOptions = {}): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.striped) {
    styles.classes['table-striped'] = true
  }

  if (options.stripedCols) {
    styles.classes['table-striped-columns'] = true
  }

  if (options.rowHover) {
    styles.classes['table-hover'] = true
  }

  if (options.bordered) {
    styles.classes['table-bordered'] = true
  }

  if (options.borderless) {
    styles.classes['table-borderless'] = true
  }

  if (options.small) {
    styles.classes['table-sm'] = true
  }

  if (options.captionTop) {
    styles.classes['caption-top'] = true
  }

  return styles
}

export type BsJsTableEntryOptions = {
  active?: boolean
}
export function tableEntryStyles(options: BsJsTableEntryOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (options.active) {
    styles.classes['table-active'] = true
  }

  return styles
}

export type BsJsTableGroupOptions = {
  groupDivider?: boolean
}
export function tableGroupStyles(options: BsJsTableGroupOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (options.groupDivider) {
    styles.classes['table-group-divider'] = true
  }

  return styles
}
