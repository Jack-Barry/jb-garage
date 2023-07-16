import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type DropdownMenuProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
}

/**
 * [Dropdown]()
 */
export default function DropdownMenu<T extends ElementType = 'ul'>(props: DropdownMenuProps<T>) {
  const { as = 'ul' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('dropdown-menu', className)} {...rest}>
      {children}
    </BrElement>
  )
}
