import {
  BsJsFadeableElementOptions,
  BsJsOptions,
  BsJsShowableElementOptions,
  BsJsStyles
} from '../../_types'
import { applyElementNameAsClass, applyShowableStyles } from '../../elements/utils'

export type BsJsPopoverOptions = BsJsShowableElementOptions &
  BsJsFadeableElementOptions & {
    /**
     * Apply `bs-popover-auto` to include an arrow on the popover
     *
     * @default true
     */
    arrow?: boolean
  }
export function applyPopoverStyles(result: BsJsStyles, options: BsJsOptions<'popover'>) {
  applyElementNameAsClass(result, options.elementType)
  applyShowableStyles(result, options)

  if (options.fade) {
    result.classes['fade'] = true
  }

  if (options.arrow !== false) {
    result.classes['bs-popover-auto'] = true
  }
}
