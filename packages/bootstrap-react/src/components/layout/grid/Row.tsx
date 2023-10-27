import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ColSpan } from '../columns/Col'

export type RowProps<T extends ElementType = 'div'> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  /** Number of columns in row */
  brRowCols?: ColSpan
  /** Number of columns in row above sm breakpoint */
  brRowColsSm?: ColSpan
  /** Number of columns in row above md breakpoint */
  brRowColsMd?: ColSpan
  /** Number of columns in row above lg breakpoint */
  brRowColsLg?: ColSpan
  /** Number of columns in row above xl breakpoint */
  brRowColsXl?: ColSpan
  /** Number of columns in row above xxl breakpoint */
  brRowCols2xl?: ColSpan
  /** Size of gutter for the row */
  brRowGutter?: BsJsSpacingConfig | BootstrapSpacingValue
  /** Size of gutter for the row above sm breakpoint */
  brRowGutterSm?: BsJsSpacingConfig | BootstrapSpacingValue
  /** Size of gutter for the row above md breakpoint */
  brRowGutterMd?: BsJsSpacingConfig | BootstrapSpacingValue
  /** Size of gutter for the row above lg breakpoint */
  brRowGutterLg?: BsJsSpacingConfig | BootstrapSpacingValue
  /** Size of gutter for the row above xl breakpoint */
  brRowGutterXl?: BsJsSpacingConfig | BootstrapSpacingValue
  /** Size of gutter for the row above xxl breakpoint */
  brRowGutter2xl?: BsJsSpacingConfig | BootstrapSpacingValue
}

type RowWithRef = <Component extends ElementType = 'div'>(props: RowProps<Component>) => ReactNode

/** [Row]() */
const Row: RowWithRef = forwardRef(function Row<T extends ElementType = 'div'>(
  props: RowProps<T>,
  ref?: RowProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    children,
    className,
    brRowCols,
    brRowColsSm,
    brRowColsMd,
    brRowColsLg,
    brRowColsXl,
    brRowCols2xl,
    brRowGutter,
    brRowGutterSm,
    brRowGutterMd,
    brRowGutterLg,
    brRowGutterXl,
    brRowGutter2xl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames(
        'row',
        {
          [`row-cols-${brRowCols}`]: !!brRowCols,
          [`row-cols-sm-${brRowColsSm}`]: !!brRowColsSm,
          [`row-cols-md-${brRowColsMd}`]: !!brRowColsMd,
          [`row-cols-lg-${brRowColsLg}`]: !!brRowColsLg,
          [`row-cols-xl-${brRowColsXl}`]: !!brRowColsXl,
          [`row-cols-xxl-${brRowCols2xl}`]: !!brRowCols2xl,
          [`g-${brRowGutter}`]: typeof brRowGutter === 'number' || typeof brRowGutter === 'string',
          [`gx-${(brRowGutter as BsJsSpacingConfig)?.x}`]:
            typeof (brRowGutter as BsJsSpacingConfig)?.x !== 'undefined',
          [`gy-${(brRowGutter as BsJsSpacingConfig)?.y}`]:
            typeof (brRowGutter as BsJsSpacingConfig)?.y !== 'undefined',
          [`g-sm-${brRowGutterSm}`]:
            typeof brRowGutterSm === 'number' || typeof brRowGutterSm === 'string',
          [`gx-sm-${(brRowGutterSm as BsJsSpacingConfig)?.x}`]:
            typeof (brRowGutterSm as BsJsSpacingConfig)?.x !== 'undefined',
          [`gy-sm-${(brRowGutterSm as BsJsSpacingConfig)?.y}`]:
            typeof (brRowGutterSm as BsJsSpacingConfig)?.y !== 'undefined',
          [`g-md-${brRowGutterMd}`]:
            typeof brRowGutterMd === 'number' || typeof brRowGutterMd === 'string',
          [`gx-md-${(brRowGutterMd as BsJsSpacingConfig)?.x}`]:
            typeof (brRowGutterMd as BsJsSpacingConfig)?.x !== 'undefined',
          [`gy-md-${(brRowGutterMd as BsJsSpacingConfig)?.y}`]:
            typeof (brRowGutterMd as BsJsSpacingConfig)?.y !== 'undefined',
          [`g-lg-${brRowGutterLg}`]:
            typeof brRowGutterLg === 'number' || typeof brRowGutterLg === 'string',
          [`gx-lg-${(brRowGutterLg as BsJsSpacingConfig)?.x}`]:
            typeof (brRowGutterLg as BsJsSpacingConfig)?.x !== 'undefined',
          [`gy-lg-${(brRowGutterLg as BsJsSpacingConfig)?.y}`]:
            typeof (brRowGutterLg as BsJsSpacingConfig)?.y !== 'undefined',
          [`g-xl-${brRowGutterXl}`]:
            typeof brRowGutterXl === 'number' || typeof brRowGutterXl === 'string',
          [`gx-xl-${(brRowGutterXl as BsJsSpacingConfig)?.x}`]:
            typeof (brRowGutterXl as BsJsSpacingConfig)?.x !== 'undefined',
          [`gy-xl-${(brRowGutterXl as BsJsSpacingConfig)?.y}`]:
            typeof (brRowGutterXl as BsJsSpacingConfig)?.y !== 'undefined',
          [`g-xxl-${brRowGutter2xl}`]:
            typeof brRowGutter2xl === 'number' || typeof brRowGutter2xl === 'string',
          [`gx-xxl-${(brRowGutter2xl as BsJsSpacingConfig)?.x}`]:
            typeof (brRowGutter2xl as BsJsSpacingConfig)?.x !== 'undefined',
          [`gy-xxl-${(brRowGutter2xl as BsJsSpacingConfig)?.y}`]:
            typeof (brRowGutter2xl as BsJsSpacingConfig)?.y !== 'undefined'
        },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Row
