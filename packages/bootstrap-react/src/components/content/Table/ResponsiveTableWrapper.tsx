import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ResponsiveTableWrapperProps<T extends ElementType> = BrElementProps<T> & {
  /** Apply responsive table styling for all breakpoints */
  brResponsive?: boolean
  /** Apply responsive table styling up to sm breakpoint */
  brResponsiveSm?: boolean
  /** Apply responsive table styling up to md breakpoint */
  brResponsiveMd?: boolean
  /** Apply responsive table styling up to lg breakpoint */
  brResponsiveLg?: boolean
  /** Apply responsive table styling up to xl breakpoint */
  brResponsiveXl?: boolean
  /** Apply responsive table styling up to xxl breakpoint */
  brResponsiveXxl?: boolean
}

export default function ResponsiveTableWrapper<T extends ElementType = 'div'>(
  props: ResponsiveTableWrapperProps<T>
) {
  const {
    as = 'div' as ElementType,
    className,
    brResponsive,
    brResponsiveSm,
    brResponsiveMd,
    brResponsiveLg,
    brResponsiveXl,
    brResponsiveXxl,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        'table',
        {
          'table-responsive': brResponsive,
          'table-responsive-sm': brResponsiveSm,
          'table-responsive-md': brResponsiveMd,
          'table-responsive-lg': brResponsiveLg,
          'table-responsive-xl': brResponsiveXl,
          'table-responsive-xxl': brResponsiveXxl
        },
        className
      )}
      {...rest}
    />
  )
}
