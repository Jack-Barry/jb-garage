import { LiteralUnion } from '@jb-garage/utils-generic'

import { BootstrapSpacingValue } from '../../_bootstrapTypes'

export type BsJsSpacingConfig = {
  allSides?: LiteralUnion<BootstrapSpacingValue, string | number>
  x?: LiteralUnion<BootstrapSpacingValue, string | number>
  y?: LiteralUnion<BootstrapSpacingValue, string | number>
  top?: LiteralUnion<BootstrapSpacingValue, string | number>
  end?: LiteralUnion<BootstrapSpacingValue, string | number>
  bottom?: LiteralUnion<BootstrapSpacingValue, string | number>
  start?: LiteralUnion<BootstrapSpacingValue, string | number>
}
