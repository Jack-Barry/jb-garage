import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapButtonColor, BootstrapButtonSize } from '../../_bootstrapTypes'
import {
  BsJsActivatableElementOptions,
  BsJsDisableableElementOptions,
  BsJsOptions,
  BsJsStyles
} from '../../_types'
import {
  applyActiveStyles,
  applyDisabledStyles,
  applyElementNameAsClass
} from '../../elements/utils'

type BsJsButtonColor = LiteralUnion<BootstrapButtonColor, string>

type BsJsButtonSize = LiteralUnion<BootstrapButtonSize, string>

export type BsJsButtonOptions = BsJsActivatableElementOptions &
  BsJsDisableableElementOptions & {
    /** Theme color or basic style to apply to the button */
    variant?: BsJsButtonColor
    /** Size of the button */
    buttonSize?: BsJsButtonSize
  }

export function applyButtonStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'btn'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyActiveStyles(result, options)
  applyDisabledStyles(result, options)

  if (options.variant) {
    result.classes[`btn-${options.variant}`] = true
  }

  if (options.buttonSize) {
    result.classes[`btn-${options.buttonSize}`] = true
  }
}

export type BsJsButtonGroupOptions = {
  /** Size for buttons in the group */
  buttonGroupSize?: BsJsButtonSize
  /** Present as vertical list of buttons */
  vertical?: boolean
}

export function applyButtonGroupStyles(result: BsJsStyles, options: BsJsButtonGroupOptions) {
  if (options.vertical) {
    result.classes['btn-group-vertical'] = true
  } else {
    result.classes['btn-group'] = true
  }

  if (options.buttonGroupSize) {
    result.classes[`btn-group-${options.buttonGroupSize}`] = true
  }

  result.elementAttributes['role'] = 'group'
}

export function applyButtonToolbarStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'btn-toolbar'>
) {
  applyElementNameAsClass(result, options.elementType)

  result.elementAttributes['role'] = 'toolbar'
}
