import { BsJsStyles } from '../../_types'

export function applyTextTruncationStyles(result: BsJsStyles, truncated?: boolean) {
  if (!truncated) {
    return
  }

  result.classes['text-truncate'] = true
}
