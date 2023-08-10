import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrElementCommonProps } from '../../BrElement'
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

export function brUtilsDisplayStyles(
  props: Pick<
    BrElementCommonProps,
    | 'brUtilsDisplay'
    | 'brUtilsDisplaySm'
    | 'brUtilsDisplayMd'
    | 'brUtilsDisplayLg'
    | 'brUtilsDisplayXl'
    | 'brUtilsDisplayXxl'
    | 'brUtilsDisplayPrint'
  >
): BrStyles {
  const {
    brUtilsDisplay,
    brUtilsDisplaySm,
    brUtilsDisplayMd,
    brUtilsDisplayLg,
    brUtilsDisplayXl,
    brUtilsDisplayXxl,
    brUtilsDisplayPrint
  } = props

  return {
    classes: {
      [`d-${brUtilsDisplay}`]: !!brUtilsDisplay,
      [`d-sm-${brUtilsDisplaySm}`]: !!brUtilsDisplaySm,
      [`d-md-${brUtilsDisplayMd}`]: !!brUtilsDisplayMd,
      [`d-lg-${brUtilsDisplayLg}`]: !!brUtilsDisplayLg,
      [`d-xl-${brUtilsDisplayXl}`]: !!brUtilsDisplayXl,
      [`d-xxl-${brUtilsDisplayXxl}`]: !!brUtilsDisplayXxl,
      [`d-print-${brUtilsDisplayPrint}`]: !!brUtilsDisplayPrint
    }
  }
}
