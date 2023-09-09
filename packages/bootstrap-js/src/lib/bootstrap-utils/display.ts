import { BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsDisplayOption = LiteralUnion<
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'inline-grid'
  | 'table'
  | 'table-cell'
  | 'table-row'
  | 'flex'
  | 'inline-flex',
  string
>

export function bsJsDisplayStyles(
  breakpoint: string,
  option?: BsJsDisplayOption
): BsJsStyles | null {
  if (typeof option === 'undefined') {
    return null
  }

  const styles = emptyStyles()

  if (breakpoint === ALL_BREAKPOINTS_KEY) {
    styles.classes[`d-${option}`] = true
  } else {
    styles.classes[`d-${breakpoint}-${option}`] = true
  }

  return styles
}
