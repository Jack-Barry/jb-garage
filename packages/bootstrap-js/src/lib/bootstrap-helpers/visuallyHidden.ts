import { BsJsStyles } from '@jb-garage/bootstrap-js/_types'

export function bsJsVisuallyHiddenStyles(applyVisuallyHidden?: boolean): BsJsStyles | null {
  if (!applyVisuallyHidden) {
    return null
  }

  return { classes: { 'visually-hidden': true }, inlineStyles: {} }
}
