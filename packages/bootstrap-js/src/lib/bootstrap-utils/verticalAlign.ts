import { BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BootstrapVerticalAlign = LiteralUnion<
  'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top',
  string
>

export function bsJsVerticalAlignStyles(align?: BootstrapVerticalAlign): BsJsStyles | null {
  if (!align) {
    return null
  }

  const styles = emptyStyles()

  styles.classes[`align-${align}`] = true

  return styles
}
