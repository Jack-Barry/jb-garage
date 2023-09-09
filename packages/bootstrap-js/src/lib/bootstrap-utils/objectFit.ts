import { BsJsConfig, BsJsStyles, LiteralUnion } from '@jb-garage/bootstrap-js/_types'
import { isEmptyObject } from '@jb-garage/utils-generic'

import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsObjectFit = LiteralUnion<'contain' | 'cover' | 'fill' | 'scale ' | 'none', string>

export function bsJsObjectFitStyles(config: BsJsConfig): BsJsStyles {
  const styles = emptyStyles()

  if (!config || isEmptyObject(config)) {
    return styles
  }

  for (const [breakpoint, value] of Object.entries(config)) {
    if (!value?.objectFit) {
      continue
    }

    if (breakpoint === ALL_BREAKPOINTS_KEY) {
      styles.classes[`object-fit-${value.objectFit}`] = true
    } else {
      styles.classes[`object-fit-${breakpoint}-${value.objectFit}`] = true
    }
  }

  return styles
}
