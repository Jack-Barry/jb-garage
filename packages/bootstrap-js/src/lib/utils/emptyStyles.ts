import { BsJsStyles } from '../../lib.types'

/** Returns a `BsJsStyles` object with no defined styles */
export function emptyStyles(): BsJsStyles {
  return { classes: {}, inlineStyles: {} }
}
