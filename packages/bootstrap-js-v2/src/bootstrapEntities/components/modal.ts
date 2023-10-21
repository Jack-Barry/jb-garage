import { LiteralUnion, isString } from '@jb-garage/utils-generic'

import { BootstrapDefaultBreakpoint } from '../../_bootstrapTypes'
import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsModalOptions = {
  /**
   * Apply a fade transition to modal
   *
   * @default true
   */
  fade?: boolean
}
export function applyModalStyles(result: BsJsStyles, options: BsJsOptions<'modal'>) {
  applyElementNameAsClass(result, options.elementType)

  if (options.fade) {
    result.classes['fade'] = true
  }
}

export type BsJsModalDialogOptions = {
  /** Content of modal dialog should be scrollable */
  scrollable?: boolean
  /** Content of modal dialog should be centered */
  centered?: boolean
  /** Size of modal dialog */
  size?: LiteralUnion<'sm' | 'lg' | 'xl', string>
  /**
   * Modal should take up the full screen
   *
   * If set to `true`, the modal will be full screen at all breakpoints. Alternatively,
   *   provide a string corresponding to the smallest screen size to render the
   *   modal as full screen
   */
  fullScreen?: boolean | LiteralUnion<BootstrapDefaultBreakpoint, string>
}
export function applyModalDialogStyles(result: BsJsStyles, options: BsJsOptions<'modal-dialog'>) {
  applyElementNameAsClass(result, options.elementType)

  if (options.scrollable) {
    result.classes['modal-dialog-scrollable'] = true
  }

  if (options.centered) {
    result.classes['modal-dialog-centered'] = true
  }

  if (options.size) {
    result.classes[`modal-${options.size}`] = true
  }

  if (isString(options.fullScreen)) {
    result.classes[`modal-fullscreen-${options.fullScreen}-down`] = true
  } else if (options.fullScreen) {
    result.classes['modal-fullscreen'] = true
  }
}
