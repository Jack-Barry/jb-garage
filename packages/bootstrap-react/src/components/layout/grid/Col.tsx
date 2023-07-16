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

export type ColProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Number of columns to span across */
  size?: ColSpan
  /** Number of columns to span across below xs breakpoint */
  xs?: ColSpan | boolean
  /** Number of columns to span across above sm breakpoint */
  sm?: ColSpan | boolean
  /** Number of columns to span across above md breakpoint */
  md?: ColSpan | boolean
  /** Number of columns to span across above lg breakpoint */
  lg?: ColSpan | boolean
  /** Number of columns to span across above xl breakpoint */
  xl?: ColSpan | boolean
  /** Number of columns to span across above xxl breakpoint */
  xxl?: ColSpan | boolean
}

/** [Col]() */
export default function Col<T extends ElementType>(props: ColProps<T>) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    size,
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
        {
          col: !size && !xs && !sm && !md && !lg && !xl && !xxl,
          [`col-${size}`]: !!size,
          [`col-${xs}`]: typeof xs !== 'boolean' && !!xs,
          'col-xs': typeof xs === 'boolean' && !!xs,
          [`col-sm-${sm}`]: typeof sm !== 'boolean' && !!sm,
          'col-sm': typeof sm === 'boolean' && !!sm,
          [`col-md-${md}`]: typeof md !== 'boolean' && !!md,
          'col-md': typeof md === 'boolean' && !!md,
          [`col-lg-${lg}`]: typeof lg !== 'boolean' && !!lg,
          'col-lg': typeof lg === 'boolean' && !!lg,
          [`col-xl-${xl}`]: typeof xl !== 'boolean' && !!xl,
          'col-xl': typeof xl === 'boolean' && !!xl,
          [`col-xxl-${xxl}`]: typeof xxl !== 'boolean' && !!xxl,
          'col-xxl': typeof xxl === 'boolean' && !!xxl
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
}
