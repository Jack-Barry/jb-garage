import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'

type BootstrapPosition = LiteralUnion<
  'static' | 'relative' | 'absolute' | 'fixed' | 'sticky',
  string
>
type BootstrapPositionValue = LiteralUnion<'0' | '50' | '100', string>

export type BrUtilsPositionOptions =
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

export function brUtilsPositionStyles(options?: BrUtilsPositionOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (typeof options === 'string') {
    return { classes: { [`position-${options}`]: true } }
  }

  const { position, start, top, end, bottom, translateMiddle, translateMiddleX, translateMiddleY } =
    options
  const classes: BrStyles['classes'] = {
    [`position-${position}`]: true
  }

  if (start) {
    classes[`start-${start}`] = true
  }

  if (top) {
    classes[`top-${top}`] = true
  }

  if (end) {
    classes[`end-${end}`] = true
  }

  if (bottom) {
    classes[`bottom-${bottom}`] = true
  }

  if (translateMiddle) {
    classes['translate-middle'] = true
  }

  if (translateMiddleX) {
    classes['translate-middle-x'] = true
  }

  if (translateMiddleY) {
    classes['translate-middle-y'] = true
  }

  return { classes }
}
