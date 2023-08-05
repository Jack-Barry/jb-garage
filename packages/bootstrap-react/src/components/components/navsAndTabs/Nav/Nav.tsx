import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
  /** Apply pill styles */
  brNavPills?: boolean
}

type NavWithRef = <Component extends ElementType = 'ul'>(props: NavProps<Component>) => ReactNode

/** [Nav]() */
const Nav: NavWithRef = forwardRef(function Nav<T extends ElementType = 'ul'>(
  props: NavProps<T>,
  ref?: NavProps<T>['ref']
) {
  const { as = 'ul' as ElementType, children, className, brNavPills, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('nav', { 'nav-pills': brNavPills }, className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default Nav
