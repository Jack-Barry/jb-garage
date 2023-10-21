import { isEmptyObject } from '@jb-garage/utils-generic'
import { LiteralUnion } from 'prettier'

import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

type BsJsButtonColor = LiteralUnion<
  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
  string
>

type BsJsButtonSize = LiteralUnion<'sm' | 'lg', string>

export type BsJsButtonOptions = {
  color?: BsJsButtonColor
  size?: BsJsButtonSize
  active?: boolean
  disabled?: boolean
}
export function buttonStyles(options: BsJsButtonOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (options.color) {
    styles.classes[`btn-${options.color}`] = true
  }

  if (options.size) {
    styles.classes[`btn-${options.size}`] = true
  }

  if (options.active) {
    styles.classes['active'] = true
  }

  if (options.disabled) {
    styles.classes['disabled'] = true
  }

  return styles
}

export type BsJsButtonGroupOptions = {
  size?: BsJsButtonSize
  vertical?: boolean
}
export function buttonGroupStyles(options: BsJsButtonGroupOptions = {}): BsJsStyles {
  const styles = emptyStyles()

  if (isEmptyObject(options)) {
    return styles
  }

  if (options.vertical) {
    styles.classes['btn-group-vertical'] = true
  } else {
    styles.classes['btn-group'] = true
  }

  if (options.size) {
    styles.classes[`btn-group-${options.size}`] = true
  }

  return styles
}
