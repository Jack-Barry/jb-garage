import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsBreadcrumbItemOptions = {
  active?: boolean
}
export function breadcrumbItemStyles(options: BsJsBreadcrumbItemOptions = {}): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.active) {
    styles.classes['active'] = true
  }

  return styles
}

export type BsJsBreadcrumbsOptions = {
  divider?: string
}
export function breadcrumbsStyles(
  prefix: string,
  options: BsJsBreadcrumbsOptions = {}
): BsJsStyles {
  const styles = emptyStyles()
  if (isEmptyObject(options)) {
    return styles
  }

  if (options.divider) {
    styles.inlineStyles[`--${prefix}-breadcrumb-divider`] = options.divider
  }

  return styles
}
