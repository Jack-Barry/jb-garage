import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarBrandProps<T extends ElementType> = BrElementProps<T>

export type NavbarBrandWithRef = <Component extends ElementType = 'a'>(
  props: NavbarBrandProps<Component>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarBrand: NavbarBrandWithRef = forwardRef(function NavbarBrand<
  T extends ElementType = 'a'
>(props: NavbarBrandProps<T>, ref?: NavbarBrandProps<T>['ref']) {
  const { as = 'a' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('navbar-brand', className)} {...rest} />
})
export default NavbarBrand
