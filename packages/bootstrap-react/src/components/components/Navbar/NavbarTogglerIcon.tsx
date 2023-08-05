import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarTogglerIconProps<T extends ElementType> = BrElementProps<T>

export type NavbarTogglerIconComponent = <Component extends ElementType = 'span'>(
  props: NavbarTogglerIconProps<Component>
) => ReactNode | null

/**
 * [Navbar]()
 */
const NavbarTogglerIcon: NavbarTogglerIconComponent = forwardRef(function NavbarTogglerIcon<
  T extends ElementType = 'span'
>(props: NavbarTogglerIconProps<T>, ref?: NavbarTogglerIconProps<T>['ref']) {
  const { as = 'span' as ElementType, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('navbar-toggler-icon', className)}
      {...rest}
    />
  )
})
export default NavbarTogglerIcon
