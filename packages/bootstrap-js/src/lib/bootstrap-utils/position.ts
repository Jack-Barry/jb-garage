import { AllBreakpointsOptions, BsJsConfig, BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'
import { isAllBreakpointsOptions } from '../utils/isAllBreakpointsOptions'

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

export function bsJsPositionStyles(config?: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()
  if (!config || !isAllBreakpointsOptions(config[ALL_BREAKPOINTS_KEY], 'position')) {
    return styles
  }

  const positionOptions = (config[ALL_BREAKPOINTS_KEY] as Required<AllBreakpointsOptions>).position

  if (typeof positionOptions === 'string') {
    return { classes: { [`position-${positionOptions}`]: true }, inlineStyles: {} }
  }

  const { position, start, top, end, bottom, translateMiddle, translateMiddleX, translateMiddleY } =
    positionOptions
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
