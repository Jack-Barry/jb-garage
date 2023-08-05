import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavItemProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "li"
   */
  as?: T
  brNavItemDropdown?: boolean
}

type NavItemWithRef = <Component extends ElementType = 'li'>(
  props: NavItemProps<Component>
) => ReactNode

/** [Nav]() */
const NavItem: NavItemWithRef = forwardRef(function NavItem<T extends ElementType = 'li'>(
  props: NavItemProps<T>,
  ref?: NavItemProps<T>['ref']
) {
  const { as = 'li' as ElementType, brNavItemDropdown, children, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('nav-item', { dropdown: brNavItemDropdown }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default NavItem
