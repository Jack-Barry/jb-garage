import { BrElementCommonProps } from '../BrElement'

/** Prop that can be accepted by `BrElement` for Bootstrap display utilities */
export type BrDisplayProp =
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
  | 'inline-flex'
  | string

export function brDisplayClasses(
  props: Pick<
    BrElementCommonProps,
    | 'brDisplay'
    | 'brDisplaySm'
    | 'brDisplayMd'
    | 'brDisplayLg'
    | 'brDisplayXl'
    | 'brDisplayXxl'
    | 'brDisplayPrint'
  >
) {
  const {
    brDisplay,
    brDisplaySm,
    brDisplayMd,
    brDisplayLg,
    brDisplayXl,
    brDisplayXxl,
    brDisplayPrint
  } = props

  return {
    [`d-${brDisplay}`]: !!brDisplay,
    [`d-sm-${brDisplaySm}`]: !!brDisplaySm,
    [`d-md-${brDisplayMd}`]: !!brDisplayMd,
    [`d-lg-${brDisplayLg}`]: !!brDisplayLg,
    [`d-xl-${brDisplayXl}`]: !!brDisplayXl,
    [`d-xxl-${brDisplayXxl}`]: !!brDisplayXxl,
    [`d-print-${brDisplayPrint}`]: !!brDisplayPrint
  }
}
