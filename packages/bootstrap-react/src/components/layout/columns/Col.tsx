import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

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
  brCols2xl?: ColSpan | boolean
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
  brColOrder2xl?: ColOrder
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
  brColOffset2xl?: ColOffset
}

type ColWithRef = <Component extends ElementType = 'div'>(props: ColProps<Component>) => ReactNode

/** [Col]() */
const Col: ColWithRef = forwardRef(function Col<T extends ElementType = 'div'>(
  props: ColProps<T>,
  ref?: ColProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    brCols,
    brColsSm,
    brColsMd,
    brColsLg,
    brColsXl,
    brCols2xl,
    brColOrder,
    brColOrderSm,
    brColOrderMd,
    brColOrderLg,
    brColOrderXl,
    brColOrder2xl,
    brColOffset,
    brColOffsetSm,
    brColOffsetMd,
    brColOffsetLg,
    brColOffsetXl,
    brColOffset2xl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        {
          col: !brCols && !brColsSm && !brColsMd && !brColsLg && !brColsXl && !brCols2xl,
          [`col-${brCols}`]: !!brCols,
          [`col-sm-${brColsSm}`]: typeof brColsSm !== 'boolean' && !!brColsSm,
          'col-sm': typeof brColsSm === 'boolean' && !!brColsSm,
          [`col-md-${brColsMd}`]: typeof brColsMd !== 'boolean' && !!brColsMd,
          'col-md': typeof brColsMd === 'boolean' && !!brColsMd,
          [`col-lg-${brColsLg}`]: typeof brColsLg !== 'boolean' && !!brColsLg,
          'col-lg': typeof brColsLg === 'boolean' && !!brColsLg,
          [`col-xl-${brColsXl}`]: typeof brColsXl !== 'boolean' && !!brColsXl,
          'col-xl': typeof brColsXl === 'boolean' && !!brColsXl,
          [`col-xxl-${brCols2xl}`]: typeof brCols2xl !== 'boolean' && !!brCols2xl,
          'col-xxl': typeof brCols2xl === 'boolean' && !!brCols2xl,
          [`order-${brColOrder}`]: !!brColOrder,
          [`order-sm-${brColOrderSm}`]: !!brColOrderSm,
          [`order-md-${brColOrderMd}`]: !!brColOrderMd,
          [`order-lg-${brColOrderLg}`]: !!brColOrderLg,
          [`order-xl-${brColOrderXl}`]: !!brColOrderXl,
          [`order-xxl-${brColOrder2xl}`]: !!brColOrder2xl,
          [`offset-${brColOffset}`]: typeof brColOffset !== 'undefined',
          [`offset-sm-${brColOffsetSm}`]: typeof brColOffsetSm !== 'undefined',
          [`offset-md-${brColOffsetMd}`]: typeof brColOffsetMd !== 'undefined',
          [`offset-lg-${brColOffsetLg}`]: typeof brColOffsetLg !== 'undefined',
          [`offset-xl-${brColOffsetXl}`]: typeof brColOffsetXl !== 'undefined',
          [`offset-xxl-${brColOffset2xl}`]: typeof brColOffset2xl !== 'undefined'
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Col
