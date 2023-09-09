import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import Collapse, { CollapseProps } from '../Collapse/Collapse'

export type NavbarCollapseProps<T extends ElementType> = CollapseProps<T>

export type NavbarCollapseWithRef = <Component extends ElementType = 'div'>(
  props: NavbarCollapseProps<Component>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarCollapse: NavbarCollapseWithRef = forwardRef(function NavbarCollapse<
  T extends ElementType = 'div'
>(props: NavbarCollapseProps<T>, ref?: NavbarCollapseProps<T>['ref']) {
  const { as = 'div' as ElementType, className, ...rest } = props

  return (
    <Collapse as={as} ref={ref} className={classNames('navbar-collapse', className)} {...rest} />
  )
})
export default NavbarCollapse
