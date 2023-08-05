import classNames from 'classnames'
import { ElementType } from 'react'

import { BrElement, BrElementProps } from '../../../utils/BrElement'

export type NavProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
  /** Apply pill styles */
  brPills?: boolean
}

/** [Nav]() */
export default function Nav<T extends ElementType = 'ul'>(props: NavProps<T>) {
  const { as = 'ul' as ElementType, children, className, brPills, ...rest } = props

  return (
    <BrElement as={as} className={classNames('nav', { 'nav-pills': brPills }, className)} {...rest}>
      {children}
    </BrElement>
  )
}
