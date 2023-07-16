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
  colSize?: ColSpan
  /** Number of columns to span across below xs breakpoint */
  colXs?: ColSpan | boolean
  /** Number of columns to span across above sm breakpoint */
  colSm?: ColSpan | boolean
  /** Number of columns to span across above md breakpoint */
  colMd?: ColSpan | boolean
  /** Number of columns to span across above lg breakpoint */
  colLg?: ColSpan | boolean
  /** Number of columns to span across above xl breakpoint */
  colXl?: ColSpan | boolean
  /** Number of columns to span across above xxl breakpoint */
  colXxl?: ColSpan | boolean
  /** Order number or position for the column */
  colOrder?: ColOrder
  /** Order number or position below xs breakpoint */
  colOrderXs?: ColOrder
  /** Order number or position above sm breakpoint */
  colOrderSm?: ColOrder
  /** Order number or position above md breakpoint */
  colOrderMd?: ColOrder
  /** Order number or position above lg breakpoint */
  colOrderLg?: ColOrder
  /** Order number or position above xl breakpoint */
  colOrderXl?: ColOrder
  /** Order number or position above xxl breakpoint */
  colOrderXxl?: ColOrder
  /** Size of offset */
  colOffset?: ColOffset
  /** Offset size below xs breakpoint */
  colOffsetXs?: ColOffset
  /** Offset size above sm breakpoint */
  colOffsetSm?: ColOffset
  /** Offset size above md breakpoint */
  colOffsetMd?: ColOffset
  /** Offset size above lg breakpoint */
  colOffsetLg?: ColOffset
  /** Offset size above xl breakpoint */
  colOffsetXl?: ColOffset
  /** Offset size above xxl breakpoint */
  colOffsetXxl?: ColOffset
}

/** [Col]() */
export default function Col<T extends ElementType = 'div'>(props: ColProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    colSize,
    colXs,
    colSm,
    colMd,
    colLg,
    colXl,
    colXxl,
    colOrder,
    colOrderXs,
    colOrderSm,
    colOrderMd,
    colOrderLg,
    colOrderXl,
    colOrderXxl,
    colOffset,
    colOffsetXs,
    colOffsetSm,
    colOffsetMd,
    colOffsetLg,
    colOffsetXl,
    colOffsetXxl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          col: !colSize && !colXs && !colSm && !colMd && !colLg && !colXl && !colXxl,
          [`col-${colSize}`]: !!colSize,
          [`col-${colXs}`]: typeof colXs !== 'boolean' && !!colXs,
          'col-xs': typeof colXs === 'boolean' && !!colXs,
          [`col-sm-${colSm}`]: typeof colSm !== 'boolean' && !!colSm,
          'col-sm': typeof colSm === 'boolean' && !!colSm,
          [`col-md-${colMd}`]: typeof colMd !== 'boolean' && !!colMd,
          'col-md': typeof colMd === 'boolean' && !!colMd,
          [`col-lg-${colLg}`]: typeof colLg !== 'boolean' && !!colLg,
          'col-lg': typeof colLg === 'boolean' && !!colLg,
          [`col-xl-${colXl}`]: typeof colXl !== 'boolean' && !!colXl,
          'col-xl': typeof colXl === 'boolean' && !!colXl,
          [`col-xxl-${colXxl}`]: typeof colXxl !== 'boolean' && !!colXxl,
          'col-xxl': typeof colXxl === 'boolean' && !!colXxl,
          [`order-${colOrder}`]: !!colOrder,
          [`order-${colOrderXs}`]: !!colOrderXs,
          [`order-sm-${colOrderSm}`]: !!colOrderSm,
          [`order-md-${colOrderMd}`]: !!colOrderMd,
          [`order-lg-${colOrderLg}`]: !!colOrderLg,
          [`order-xl-${colOrderXl}`]: !!colOrderXl,
          [`order-xxl-${colOrderXxl}`]: !!colOrderXxl,
          [`offset-${colOffset}`]: typeof colOffset !== 'undefined',
          [`offset-${colOffsetXs}`]: typeof colOffsetXs !== 'undefined',
          [`offset-sm-${colOffsetSm}`]: typeof colOffsetSm !== 'undefined',
          [`offset-md-${colOffsetMd}`]: typeof colOffsetMd !== 'undefined',
          [`offset-lg-${colOffsetLg}`]: typeof colOffsetLg !== 'undefined',
          [`offset-xl-${colOffsetXl}`]: typeof colOffsetXl !== 'undefined',
          [`offset-xxl-${colOffsetXxl}`]: typeof colOffsetXxl !== 'undefined'
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
