import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type DropdownProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type DropdownWithRef = <Component extends ElementType = 'div'>(
  props: DropdownProps<Component>
) => ReactNode

/**
 * [Dropdown]()
 */
const Dropdown: DropdownWithRef = forwardRef(function Dropdown<T extends ElementType = 'div'>(
  props: DropdownProps<T>,
  ref?: DropdownProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('dropdown', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default Dropdown
