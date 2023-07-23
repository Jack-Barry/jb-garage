import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type ButtonToolbar<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/** [ButtonToolbar]() */
export default function ButtonToolbar<T extends ElementType = 'div'>(props: ButtonToolbar<T>) {
  const { as = 'div' as ElementType, children, className, role = 'toolbar', ...rest } = props

  return (
    <BrElement as={as} className={classNames('btn-toolbar', className)} role={role} {...rest}>
      {children}
    </BrElement>
  )
}
