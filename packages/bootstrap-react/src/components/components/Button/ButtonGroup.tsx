import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ButtonGroupProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/** [ButtonGroup]() */
export default function ButtonGroup<T extends ElementType = 'div'>(props: ButtonGroupProps<T>) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('btn-group', className)} {...rest}>
      {children}
    </BrElement>
  )
}
