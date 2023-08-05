import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type DropdownMenuProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "ul"
   */
  as?: T
}

type DropdownMenuWithRef = <Component extends ElementType = 'ul'>(
  props: DropdownMenuProps<Component>
) => ReactNode

/**
 * [Dropdown]()
 */
const DropdownMenu: DropdownMenuWithRef = forwardRef(function DropdownMenu<
  T extends ElementType = 'ul'
>(props: DropdownMenuProps<T>, ref?: DropdownMenuProps<T>['ref']) {
  const { as = 'ul' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('dropdown-menu', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default DropdownMenu
