import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsStackDirection = 'horizontal' | 'vertical'

export function bsJsStackStyles(direction?: BsJsStackDirection): BsJsStyles | null {
  if (!direction) {
    return null
  }

  const styles = emptyStyles()
  if (direction === 'horizontal') {
    styles.classes['hstack'] = true
  }

  if (direction === 'vertical') {
    styles.classes['vstack'] = true
  }

  return styles
}
