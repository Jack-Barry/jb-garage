import { BsJsStyles } from '@jb-garage/bootstrap-js/_types'

export function bsJsClearfixStyles(applyClearfix?: boolean): BsJsStyles | null {
  if (!applyClearfix) {
    return null
  }

  return { classes: { clearfix: true }, inlineStyles: {} }
}
