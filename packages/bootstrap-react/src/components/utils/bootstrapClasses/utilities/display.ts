import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrUtilsBreakpointBasedOptions } from '../../BrElement'
import { BrStyles } from '../brStyles'

/** Prop that can be accepted by `BrElement` for Bootstrap display utilities */
export type BrDisplayProp = LiteralUnion<
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

export type BrUtilsDisplayOptions = BrDisplayProp | BrUtilsBreakpointBasedOptions<BrDisplayProp>

export function brUtilsDisplayStyles(options?: BrUtilsDisplayOptions): BrStyles {
  if (!options) {
    return {}
  }

  if (typeof options === 'string') {
    return { classes: { [`d-${options}`]: true } }
  }

  return {
    classes: Object.entries(options).reduce<Required<BrStyles>['classes']>(
      (result, [breakpoint, display]) => {
        if (breakpoint === 'brAllBreakpoints') {
          result[`d-${display}`] = true
        } else {
          result[`d-${breakpoint}-${display}`] = true
        }

        return result
      },
      {}
    )
  }
}
