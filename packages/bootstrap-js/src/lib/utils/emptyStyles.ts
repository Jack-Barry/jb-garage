import { BsJsStyles } from '../../_types'

/** Returns a `BsJsStyles` object with no defined styles */
export function emptyStyles(): BsJsStyles {
  return { classes: {}, inlineStyles: {}, dataAttributes: {} }
}
