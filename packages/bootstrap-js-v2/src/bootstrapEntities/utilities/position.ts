import { LiteralUnion, isString, isUndefined } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'

export type BootstrapPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

type BootstrapPositionValue = '0' | '50' | '100'

export type BsJsPositionOptions =
  | LiteralUnion<BootstrapPosition, string>
  | {
      position: LiteralUnion<BootstrapPosition, string>
      top?: LiteralUnion<BootstrapPositionValue, string | number>
      start?: LiteralUnion<BootstrapPositionValue, string | number>
      bottom?: LiteralUnion<BootstrapPositionValue, string | number>
      end?: LiteralUnion<BootstrapPositionValue, string | number>
      translateMiddle?: true
      translateMiddleX?: true
      translateMiddleY?: true
    }

export function applyPositionStyles(result: BsJsStyles, options: BsJsBreakpointAgnosticOptions) {
  if (isUndefined(options.position)) {
    return
  }

  if (isString(options.position)) {
    result.classes[`position-${options.position}`] = true
    return
  }

  const { position, start, top, end, bottom, translateMiddle, translateMiddleX, translateMiddleY } =
    options.position
  result.classes = {
    [`position-${position}`]: true
  }

  if (start) {
    result.classes[`start-${start}`] = true
  }

  if (top) {
    result.classes[`top-${top}`] = true
  }

  if (end) {
    result.classes[`end-${end}`] = true
  }

  if (bottom) {
    result.classes[`bottom-${bottom}`] = true
  }

  if (translateMiddle) {
    result.classes['translate-middle'] = true
  }

  if (translateMiddleX) {
    result.classes['translate-middle-x'] = true
  }

  if (translateMiddleY) {
    result.classes['translate-middle-y'] = true
  }
}
