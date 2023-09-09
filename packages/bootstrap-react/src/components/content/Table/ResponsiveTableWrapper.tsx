import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

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
  brTableResponsive2xl?: boolean
}

type ResponsiveTableWrapperWithRef = <Component extends ElementType = 'div'>(
  props: ResponsiveTableWrapperProps<Component>
) => ReactNode

const ResponsiveTableWrapper: ResponsiveTableWrapperWithRef = forwardRef(
  function ResponsiveTableWrapper<T extends ElementType = 'div'>(
    props: ResponsiveTableWrapperProps<T>,
    ref?: ResponsiveTableWrapperProps<T>['ref']
  ) {
    const {
      as = 'div' as ElementType,
      className,
      brTableResponsive,
      brTableResponsiveSm,
      brTableResponsiveMd,
      brTableResponsiveLg,
      brTableResponsiveXl,
      brTableResponsive2xl,
      ...rest
    } = props

    return (
      <BrElement
        as={as}
        ref={ref}
        className={classNames(
          'table',
          {
            'table-responsive': brTableResponsive,
            'table-responsive-sm': brTableResponsiveSm,
            'table-responsive-md': brTableResponsiveMd,
            'table-responsive-lg': brTableResponsiveLg,
            'table-responsive-xl': brTableResponsiveXl,
            'table-responsive-xxl': brTableResponsive2xl
          },
          className
        )}
        {...rest}
      />
    )
  }
)
export default ResponsiveTableWrapper
