import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'
import { ColSpan } from '../columns/Col'

export type RowProps<T extends ElementType = 'div'> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Number of columns in row */
  cols?: ColSpan
  /** Number of columns in row below xs breakpoint */
  xs?: ColSpan
  /** Number of columns in row above sm breakpoint */
  sm?: ColSpan
  /** Number of columns in row above md breakpoint */
  md?: ColSpan
  /** Number of columns in row above lg breakpoint */
  lg?: ColSpan
  /** Number of columns in row above xl breakpoint */
  xl?: ColSpan
  /** Number of columns in row above xxl breakpoint */
  xxl?: ColSpan
}

/** [Row]() */
export default function Row<T extends ElementType = 'div'>(props: RowProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    cols,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        'row',
        {
          [`row-cols-${cols}`]: !!cols,
          [`row-cols-${xs}`]: !!xs,
          [`row-cols-sm-${sm}`]: !!sm,
          [`row-cols-md-${md}`]: !!md,
          [`row-cols-lg-${lg}`]: !!lg,
          [`row-cols-xl-${xl}`]: !!xl,
          [`row-cols-xxl-${xxl}`]: !!xxl
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
