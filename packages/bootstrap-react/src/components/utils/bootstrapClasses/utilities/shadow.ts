import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'

type BootstrapShadowSize = LiteralUnion<'sm' | 'lg' | 'none', string>
export type BrUtilsShadowOptions = true | BootstrapShadowSize

export function brUtilsShadowStyles(options?: BrUtilsShadowOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (options === true) {
    return { classes: { shadow: true } }
  }

  return { classes: { [`shadow-${options}`]: true } }
}
