import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ResponsiveTableWrapperProps<T extends ElementType> = BrElementProps<T> & {
  /** Apply responsive table styling for all breakpoints or up to specified breakpoint */
  brTableResponsive?: boolean
  /** Apply responsive table styling up to sm breakpoint */
  brTableResponsiveSm?: boolean
  /** Apply responsive table styling up to md breakpoint */
  brTableResponsiveMd?: boolean
  /** Apply responsive table styling up to lg breakpoint */
  brTableResponsiveLg?: boolean
  /** Apply responsive table styling up to xl breakpoint */
  brTableResponsiveXl?: boolean
  /** Apply responsive table styling up to xxl breakpoint */
  brTableResponsiveXxl?: boolean
}

export default function ResponsiveTableWrapper<T extends ElementType = 'div'>(
  props: ResponsiveTableWrapperProps<T>
) {
  const {
    as = 'div' as ElementType,
    className,
    brTableResponsive,
    brTableResponsiveSm,
    brTableResponsiveMd,
    brTableResponsiveLg,
    brTableResponsiveXl,
    brTableResponsiveXxl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        'table',
        {
          'table-responsive': brTableResponsive,
          'table-responsive-sm': brTableResponsiveSm,
          'table-responsive-md': brTableResponsiveMd,
          'table-responsive-lg': brTableResponsiveLg,
          'table-responsive-xl': brTableResponsiveXl,
          'table-responsive-xxl': brTableResponsiveXxl
        },
        className
      )}
      {...rest}
    />
  )
}
