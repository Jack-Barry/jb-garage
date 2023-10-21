import { BsJsStyles } from '../_types'

export function applyTheme(prefix: string, result: BsJsStyles, theme?: string) {
  if (theme) {
    result.elementAttributes[`data-${prefix}-theme`] = theme
  }
}
