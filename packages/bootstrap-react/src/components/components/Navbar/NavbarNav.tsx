import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarNavProps<T extends ElementType> = BrElementProps<T>

export type NavbarNavWithRef = <Component extends ElementType = 'ul'>(
  props: NavbarNavProps<Component>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarNav: NavbarNavWithRef = forwardRef(function NavbarNav<T extends ElementType = 'ul'>(
  props: NavbarNavProps<T>,
  ref?: NavbarNavProps<T>['ref']
) {
  const { as = 'ul' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('navbar-nav', className)} {...rest} />
})
export default NavbarNav
