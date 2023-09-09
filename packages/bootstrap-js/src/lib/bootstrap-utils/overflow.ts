import { AllBreakpointsOptions, BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BootstrapOverflowType = LiteralUnion<'auto' | 'hidden' | 'visible' | 'scroll', string>

export type BsJsOverflowOptions =
  | BootstrapOverflowType
  | { x?: BootstrapOverflowType; y?: BootstrapOverflowType }

export function bsJsOverflowStyles(options: AllBreakpointsOptions['overflow']): BsJsStyles | null {
  if (!options) {
    return null
  }

  if (typeof options === 'string') {
    return { classes: { [`overflow-${options}`]: true }, inlineStyles: {} }
  }

  const styles = emptyStyles()
  styles.classes = Object.entries(options).reduce((result, [axis, overflowType]) => {
    result[`overflow-${axis}-${overflowType}`] = true
    return result
  }, {} as BsJsStyles['classes'])

  return styles
}
