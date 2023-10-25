import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapThemeColor } from '../../_bootstrapTypes'
import {
  BsJsFadeableElementOptions,
  BsJsOptions,
  BsJsShowableElementOptions,
  BsJsStyles
} from '../../_types'
import { applyElementNameAsClass, applyShowableStyles } from '../../elements/utils'

export type BsJsAlertOptions = BsJsShowableElementOptions &
  BsJsFadeableElementOptions & {
    variant?: LiteralUnion<BootstrapThemeColor, string>
    dismissible?: boolean
  }

export function applyAlertStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'alert'>
) {
  applyElementNameAsClass(result, options.elementType)
  applyShowableStyles(result, options)

  if (options.variant) {
    result.classes[`alert-${options.variant}`] = true
  }

  if (options.dismissible) {
    result.classes['alert-dismissible'] = true
  }

  if (options.fade) {
    result.classes['fade'] = true
  }

  result.elementAttributes['role'] = 'alert'
}
