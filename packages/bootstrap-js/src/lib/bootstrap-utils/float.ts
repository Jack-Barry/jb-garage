import { BsJsConfig, BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsFloatType = LiteralUnion<'start' | 'end' | 'none', string>

export function bsJsFloatStyles(config?: BsJsConfig): BsJsStyles {
  const styles: BsJsStyles = emptyStyles()

  if (!config) {
    return styles
  }

  for (const [breakpoint, prop] of Object.entries(config)) {
    if (!prop || !prop.float) {
      continue
    }

    if (breakpoint === ALL_BREAKPOINTS_KEY) {
      styles.classes[`float-${prop.float}`] = true
    } else {
      styles.classes[`float-${breakpoint}-${prop.float}`] = true
    }
  }

  return styles
}
