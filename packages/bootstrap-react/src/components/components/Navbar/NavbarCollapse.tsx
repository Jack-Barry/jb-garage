import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'
import Collapse, { CollapseProps } from '../Collapse/Collapse'

export type NavbarCollapseProps<T extends ElementType> = CollapseProps<T>

export type NavbarCollapseComponent = <Component extends ElementType = 'div'>(
  props: NavbarCollapseProps<Component>
) => ReactNode | null

/**
 * [Navbar]()
 */
const NavbarCollapse: NavbarCollapseComponent = forwardRef(function NavbarCollapse<
  T extends ElementType = 'div'
>(props: NavbarCollapseProps<T>, ref?: NavbarCollapseProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <Collapse
      as={as as ElementType}
      ref={ref}
      className={classNames('navbar-collapse', className)}
      {...rest}
    />
  )
})
export default NavbarCollapse
