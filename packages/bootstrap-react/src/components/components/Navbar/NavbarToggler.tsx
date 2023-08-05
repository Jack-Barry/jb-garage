import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarTogglerProps<T extends ElementType> = BrElementProps<T>

export type NavbarTogglerComponent = <Component extends ElementType = 'button'>(
  props: NavbarTogglerProps<Component>
) => ReactNode | null

/**
 * [Navbar]()
 */
const NavbarToggler: NavbarTogglerComponent = forwardRef(function NavbarToggler<
  T extends ElementType = 'button'
>(props: NavbarTogglerProps<T>, ref?: NavbarTogglerProps<T>['ref']) {
  const {
    as = 'button' as ElementType,
    type = as === 'button' ? 'button' : undefined,
    className,
    ...rest
  } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      type={type}
      className={classNames('navbar-toggler', className)}
      {...rest}
    />
  )
})
export default NavbarToggler
