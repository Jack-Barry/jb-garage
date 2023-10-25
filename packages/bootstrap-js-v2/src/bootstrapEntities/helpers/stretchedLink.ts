import { BsJsStyles } from '../../_types'

export function applyStretchedLinkStyles(result: BsJsStyles, stretch?: boolean) {
  if (!stretch) {
    return
  }

  result.classes['stretched-link'] = true
}
