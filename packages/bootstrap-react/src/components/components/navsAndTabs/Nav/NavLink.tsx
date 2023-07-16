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
  isActive?: boolean
  /** Nav link is currently disabled */
  isDisabled?: boolean
}

type NavLinkComponent = <Component extends ElementType = 'a'>(
  props: NavLinkProps<Component>
) => ReactNode | null

/** [Nav]() */
const NavLink: NavLinkComponent = forwardRef(
  <T extends ElementType = 'a'>(props: NavLinkProps<T>, ref?: NavLinkProps<T>['ref']) => {
    const { as = 'a' as ElementType, children, className, isActive, isDisabled, ...rest } = props

    return (
      <BrElement
        as={as}
        ref={ref}
        className={classNames('nav-link', { active: isActive, disabled: isDisabled }, className)}
        {...rest}
      >
        {children}
      </BrElement>
    )
  }
)
export default NavLink
