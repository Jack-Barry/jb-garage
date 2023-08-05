import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'
import { ColSpan } from '../columns/Col'
import { BrSpacingConfig, BrSpacingProp } from '../../utils/bootstrapClasses/spacing'

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
  brRowColsXxl?: ColSpan
  /** Size of gutter for the row */
  brRowGutter?: BrSpacingProp
  /** Size of gutter for the row above sm breakpoint */
  brRowGutterSm?: BrSpacingProp
  /** Size of gutter for the row above md breakpoint */
  brRowGutterMd?: BrSpacingProp
  /** Size of gutter for the row above lg breakpoint */
  brRowGutterLg?: BrSpacingProp
  /** Size of gutter for the row above xl breakpoint */
  brRowGutterXl?: BrSpacingProp
  /** Size of gutter for the row above xxl breakpoint */
  brRowGutterXxl?: BrSpacingProp
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
    brRowColsXxl,
    brRowGutter,
    brRowGutterSm,
    brRowGutterMd,
    brRowGutterLg,
    brRowGutterXl,
    brRowGutterXxl,
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
          [`row-cols-xxl-${brRowColsXxl}`]: !!brRowColsXxl,
          [`g-${brRowGutter}`]: typeof brRowGutter === 'number' || typeof brRowGutter === 'string',
          [`gx-${(brRowGutter as BrSpacingConfig)?.x}`]:
            typeof (brRowGutter as BrSpacingConfig)?.x !== 'undefined',
          [`gy-${(brRowGutter as BrSpacingConfig)?.y}`]:
            typeof (brRowGutter as BrSpacingConfig)?.y !== 'undefined',
          [`g-sm-${brRowGutterSm}`]:
            typeof brRowGutterSm === 'number' || typeof brRowGutterSm === 'string',
          [`gx-sm-${(brRowGutterSm as BrSpacingConfig)?.x}`]:
            typeof (brRowGutterSm as BrSpacingConfig)?.x !== 'undefined',
          [`gy-sm-${(brRowGutterSm as BrSpacingConfig)?.y}`]:
            typeof (brRowGutterSm as BrSpacingConfig)?.y !== 'undefined',
          [`g-md-${brRowGutterMd}`]:
            typeof brRowGutterMd === 'number' || typeof brRowGutterMd === 'string',
          [`gx-md-${(brRowGutterMd as BrSpacingConfig)?.x}`]:
            typeof (brRowGutterMd as BrSpacingConfig)?.x !== 'undefined',
          [`gy-md-${(brRowGutterMd as BrSpacingConfig)?.y}`]:
            typeof (brRowGutterMd as BrSpacingConfig)?.y !== 'undefined',
          [`g-lg-${brRowGutterLg}`]:
            typeof brRowGutterLg === 'number' || typeof brRowGutterLg === 'string',
          [`gx-lg-${(brRowGutterLg as BrSpacingConfig)?.x}`]:
            typeof (brRowGutterLg as BrSpacingConfig)?.x !== 'undefined',
          [`gy-lg-${(brRowGutterLg as BrSpacingConfig)?.y}`]:
            typeof (brRowGutterLg as BrSpacingConfig)?.y !== 'undefined',
          [`g-xl-${brRowGutterXl}`]:
            typeof brRowGutterXl === 'number' || typeof brRowGutterXl === 'string',
          [`gx-xl-${(brRowGutterXl as BrSpacingConfig)?.x}`]:
            typeof (brRowGutterXl as BrSpacingConfig)?.x !== 'undefined',
          [`gy-xl-${(brRowGutterXl as BrSpacingConfig)?.y}`]:
            typeof (brRowGutterXl as BrSpacingConfig)?.y !== 'undefined',
          [`g-xxl-${brRowGutterXxl}`]:
            typeof brRowGutterXxl === 'number' || typeof brRowGutterXxl === 'string',
          [`gx-xxl-${(brRowGutterXxl as BrSpacingConfig)?.x}`]:
            typeof (brRowGutterXxl as BrSpacingConfig)?.x !== 'undefined',
          [`gy-xxl-${(brRowGutterXxl as BrSpacingConfig)?.y}`]:
            typeof (brRowGutterXxl as BrSpacingConfig)?.y !== 'undefined'
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
