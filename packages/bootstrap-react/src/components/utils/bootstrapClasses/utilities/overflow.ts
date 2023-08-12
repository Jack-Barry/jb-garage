import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'

export type BootstrapOverflowType = LiteralUnion<'auto' | 'hidden' | 'visible' | 'scroll', string>

export type BrUtilsOverflowOptions =
  | BootstrapOverflowType
  | { x?: BootstrapOverflowType; y?: BootstrapOverflowType }

export function brUtilsOverflowStyles(options?: BrUtilsOverflowOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (typeof options === 'string') {
    return { classes: { [`overflow-${options}`]: true } }
  }

  const classes = Object.entries(options).reduce<Required<BrStyles>['classes']>(
    (result, [axis, overflowType]) => {
      result[`overflow-${axis}-${overflowType}`] = true
      return result
    },
    {}
  )

  return { classes }
}
