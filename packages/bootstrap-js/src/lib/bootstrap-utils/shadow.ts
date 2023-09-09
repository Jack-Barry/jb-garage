import { BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

type BootstrapShadowSize = LiteralUnion<'sm' | 'lg' | 'none', string>
export type BsJsShadowOptions = true | BootstrapShadowSize

export function bsJsShadowStyles(options?: BsJsShadowOptions): BsJsStyles | null {
  if (!options) {
    return null
  }

  const styles = emptyStyles()

  if (options === true) {
    styles.classes = { shadow: true }
  } else {
    styles.classes = { [`shadow-${options}`]: true }
  }

  return styles
}
