import { AllBreakpointsOptions, BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

type BootstrapPosition = LiteralUnion<
  'static' | 'relative' | 'absolute' | 'fixed' | 'sticky',
  string
>
type BootstrapPositionValue = LiteralUnion<'0' | '50' | '100', string>

export type BsJsPositionOptions =
  | BootstrapPosition
  | {
      position: BootstrapPosition
      top?: BootstrapPositionValue
      start?: BootstrapPositionValue
      bottom?: BootstrapPositionValue
      end?: BootstrapPositionValue
      translateMiddle?: true
      translateMiddleX?: true
      translateMiddleY?: true
    }

export function bsJsPositionStyles(options: AllBreakpointsOptions['position']): BsJsStyles | null {
  const styles = emptyStyles()
  if (typeof options === 'undefined') {
    return null
  }

  if (typeof options === 'string') {
    return { classes: { [`position-${options}`]: true }, inlineStyles: {} }
  }

  const { position, start, top, end, bottom, translateMiddle, translateMiddleX, translateMiddleY } =
    options
  styles.classes = {
    [`position-${position}`]: true
  }

  if (start) {
    styles.classes[`start-${start}`] = true
  }

  if (top) {
    styles.classes[`top-${top}`] = true
  }

  if (end) {
    styles.classes[`end-${end}`] = true
  }

  if (bottom) {
    styles.classes[`bottom-${bottom}`] = true
  }

  if (translateMiddle) {
    styles.classes['translate-middle'] = true
  }

  if (translateMiddleX) {
    styles.classes['translate-middle-x'] = true
  }

  if (translateMiddleY) {
    styles.classes['translate-middle-y'] = true
  }

  return styles
}
