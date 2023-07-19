import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'auto'

type ColOrder = ColSpan | 'first' | 'last'
type ColOffset = ColSpan | 0 | '0'

export type ColProps<T extends ElementType = 'div'> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Number of columns to span across */
  brCols?: ColSpan
  /** Number of columns to span across above sm breakpoint */
  brColsSm?: ColSpan | boolean
  /** Number of columns to span across above md breakpoint */
  brColsMd?: ColSpan | boolean
  /** Number of columns to span across above lg breakpoint */
  brColsLg?: ColSpan | boolean
  /** Number of columns to span across above xl breakpoint */
  brColsXl?: ColSpan | boolean
  /** Number of columns to span across above xxl breakpoint */
  brColsXxl?: ColSpan | boolean
  /** Order number or position for the column */
  brColOrder?: ColOrder
  /** Order number or position above sm breakpoint */
  brColOrderSm?: ColOrder
  /** Order number or position above md breakpoint */
  brColOrderMd?: ColOrder
  /** Order number or position above lg breakpoint */
  brColOrderLg?: ColOrder
  /** Order number or position above xl breakpoint */
  brColOrderXl?: ColOrder
  /** Order number or position above xxl breakpoint */
  brColOrderXxl?: ColOrder
  /** Size of offset */
  brColOffset?: ColOffset
  /** Offset size above sm breakpoint */
  brColOffsetSm?: ColOffset
  /** Offset size above md breakpoint */
  brColOffsetMd?: ColOffset
  /** Offset size above lg breakpoint */
  brColOffsetLg?: ColOffset
  /** Offset size above xl breakpoint */
  brColOffsetXl?: ColOffset
  /** Offset size above xxl breakpoint */
  brColOffsetXxl?: ColOffset
}

/** [Col]() */
export default function Col<T extends ElementType = 'div'>(props: ColProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    brCols,
    brColsSm,
    brColsMd,
    brColsLg,
    brColsXl,
    brColsXxl,
    brColOrder,
    brColOrderSm,
    brColOrderMd,
    brColOrderLg,
    brColOrderXl,
    brColOrderXxl,
    brColOffset,
    brColOffsetSm,
    brColOffsetMd,
    brColOffsetLg,
    brColOffsetXl,
    brColOffsetXxl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          col: !brCols && !brColsSm && !brColsMd && !brColsLg && !brColsXl && !brColsXxl,
          [`col-${brCols}`]: !!brCols,
          [`col-sm-${brColsSm}`]: typeof brColsSm !== 'boolean' && !!brColsSm,
          'col-sm': typeof brColsSm === 'boolean' && !!brColsSm,
          [`col-md-${brColsMd}`]: typeof brColsMd !== 'boolean' && !!brColsMd,
          'col-md': typeof brColsMd === 'boolean' && !!brColsMd,
          [`col-lg-${brColsLg}`]: typeof brColsLg !== 'boolean' && !!brColsLg,
          'col-lg': typeof brColsLg === 'boolean' && !!brColsLg,
          [`col-xl-${brColsXl}`]: typeof brColsXl !== 'boolean' && !!brColsXl,
          'col-xl': typeof brColsXl === 'boolean' && !!brColsXl,
          [`col-xxl-${brColsXxl}`]: typeof brColsXxl !== 'boolean' && !!brColsXxl,
          'col-xxl': typeof brColsXxl === 'boolean' && !!brColsXxl,
          [`order-${brColOrder}`]: !!brColOrder,
          [`order-sm-${brColOrderSm}`]: !!brColOrderSm,
          [`order-md-${brColOrderMd}`]: !!brColOrderMd,
          [`order-lg-${brColOrderLg}`]: !!brColOrderLg,
          [`order-xl-${brColOrderXl}`]: !!brColOrderXl,
          [`order-xxl-${brColOrderXxl}`]: !!brColOrderXxl,
          [`offset-${brColOffset}`]: typeof brColOffset !== 'undefined',
          [`offset-sm-${brColOffsetSm}`]: typeof brColOffsetSm !== 'undefined',
          [`offset-md-${brColOffsetMd}`]: typeof brColOffsetMd !== 'undefined',
          [`offset-lg-${brColOffsetLg}`]: typeof brColOffsetLg !== 'undefined',
          [`offset-xl-${brColOffsetXl}`]: typeof brColOffsetXl !== 'undefined',
          [`offset-xxl-${brColOffsetXxl}`]: typeof brColOffsetXxl !== 'undefined'
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
}