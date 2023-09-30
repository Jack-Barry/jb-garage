import { BsJsStyles } from '../../_types'

export function bsJsStretchedLinkStyles(stretched?: boolean): BsJsStyles | null {
  if (!stretched) {
    return null
  }

  return { classes: { 'stretched-link': true }, inlineStyles: {}, dataAttributes: {} }
}
