import classNames from 'classnames'
import { ElementType } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavItemProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "li"
   */
  as?: T
}

/** [Nav]() */
export default function NavItem<T extends ElementType = 'li'>(props: NavItemProps<T>) {
  const { as = 'li' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('nav-item', className)} {...rest}>
      {children}
    </BrElement>
  )
}
