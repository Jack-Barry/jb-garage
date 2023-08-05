import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarTextProps<T extends ElementType> = BrElementProps<T>

export type NavbarTextWithRef = <Component extends ElementType = 'span'>(
  props: NavbarTextProps<Component>
) => ReactNode

/**
 * [Navbar]()
 */
const NavbarText: NavbarTextWithRef = forwardRef(function NavbarText<
  T extends ElementType = 'span'
>(props: NavbarTextProps<T>, ref?: NavbarTextProps<T>['ref']) {
  const { as = 'span' as ElementType, className, ...rest } = props

  return <BrElement as={as} ref={ref} className={classNames('navbar-text', className)} {...rest} />
})
export default NavbarText
