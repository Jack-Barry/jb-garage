import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type DropdownProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/**
 * [Dropdown]()
 */
export default function Dropdown<T extends ElementType = 'div'>(props: DropdownProps<T>) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('dropdown', className)} {...rest}>
      {children}
    </BrElement>
  )
}
