import { BsJsStyles, LiteralUnion } from '../../_types'
import { BootstrapThemeColor } from '../bootstrap-utils/_types'

export type BsJsColorAndBackgroundOption = LiteralUnion<BootstrapThemeColor, string>

export function bsJsColorAndBackgroundStyles(
  color?: BsJsColorAndBackgroundOption
): BsJsStyles | null {
  if (!color) {
    return null
  }

  return { classes: { [`text-bg-${color}`]: true }, inlineStyles: {}, dataAttributes: {} }
}
