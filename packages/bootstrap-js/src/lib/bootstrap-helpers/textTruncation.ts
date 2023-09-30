import { BsJsStyles } from '../../_types'

export function bsJsTextTruncationStyles(truncated?: boolean): BsJsStyles | null {
  if (!truncated) {
    return null
  }

  return { classes: { 'text-truncate': true }, inlineStyles: {}, dataAttributes: {} }
}
