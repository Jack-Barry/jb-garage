import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapButtonColor, BootstrapButtonSize } from '../../_bootstrapTypes'
import { BsJsStyles } from '../../_types'

type BsJsButtonColor = LiteralUnion<BootstrapButtonColor, string>

type BsJsButtonSize = LiteralUnion<BootstrapButtonSize, string>

export type BsJsButtonOptions = {
  /** Color to apply to the button */
  color?: BsJsButtonColor
  /** Size of the button */
  size?: BsJsButtonSize
  /** Apply active styles to button */
  active?: boolean
  /** Apply disabled styles to button */
  disabled?: boolean
}

export function applyButtonStyles(result: BsJsStyles, options: BsJsButtonOptions) {
  if (options.color) {
    result.classes[`btn-${options.color}`] = true
  }

  if (options.size) {
    result.classes[`btn-${options.size}`] = true
  }
}

export type BsJsButtonGroupOptions = {
  /** Size for buttons in the group */
  size?: BsJsButtonSize
  /** Present as vertical list of buttons */
  vertical?: boolean
}

export function applyButtonGroupStyles(result: BsJsStyles, options: BsJsButtonGroupOptions) {
  if (options.vertical) {
    result.classes['btn-group-vertical'] = true
  } else {
    result.classes['btn-group'] = true
  }

  if (options.size) {
    result.classes[`btn-group-${options.size}`] = true
  }
}
