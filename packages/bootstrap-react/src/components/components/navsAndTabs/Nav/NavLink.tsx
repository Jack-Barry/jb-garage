import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavLinkProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "a"
   */
  as?: T
  /** Nav link is currently active */
  brActive?: boolean
  /** Nav link is currently disabled */
  brDisabled?: boolean
  brDropdownToggle?: boolean
}

type NavLinkComponent = <Component extends ElementType = 'a'>(
  props: NavLinkProps<Component>
) => ReactNode | null

/** [Nav]() */
const NavLink: NavLinkComponent = forwardRef(
  <T extends ElementType = 'a'>(props: NavLinkProps<T>, ref?: NavLinkProps<T>['ref']) => {
    const {
      as = 'a' as ElementType,
      brActive,
      brDisabled,
      brDropdownToggle,
      children,
      className,
      ...rest
    } = props

    return (
      <BrElement
        as={as}
        ref={ref}
        className={classNames(
          'nav-link',
          { active: brActive, disabled: brDisabled, 'dropdown-toggle': brDropdownToggle },
          className
        )}
        {...rest}
      >
        {children}
      </BrElement>
    )
  }
)
export default NavLink
