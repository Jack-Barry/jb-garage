import { BsJsStyles } from '../_types'

export function bsJsTheme(prefix: string, theme?: string): Required<BsJsStyles> | null {
  if (!theme) {
    return null
  }

  return { classes: {}, inlineStyles: {}, dataAttributes: { [`data-${prefix}-theme`]: theme } }
}
