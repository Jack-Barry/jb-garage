import { isEmptyObject } from '@jb-garage/utils-generic'

import { BsJsConfig, BsJsStyles, LiteralUnion } from '../../_types'
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

export function bsJsDisplayStyles(options?: BsJsConfig): BsJsStyles {
  if (!options || isEmptyObject(options)) {
    return emptyStyles()
  }

  return Object.entries(options).reduce<BsJsStyles>((result, [breakpoint, optionSet]) => {
    if (!optionSet?.display) {
      return result
    }

    if (breakpoint === ALL_BREAKPOINTS_KEY) {
      result.classes[`d-${optionSet.display}`] = true
    } else {
      result.classes[`d-${breakpoint}-${optionSet.display}`] = true
    }

    return result
  }, emptyStyles())
}
