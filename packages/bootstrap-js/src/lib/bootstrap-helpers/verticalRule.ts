import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export function bsJsVerticalRuleStyles(isVerticalRule?: boolean): BsJsStyles | null {
  if (!isVerticalRule) {
    return null
  }

  const styles = emptyStyles()
  styles.classes['vr'] = true

  return styles
}
