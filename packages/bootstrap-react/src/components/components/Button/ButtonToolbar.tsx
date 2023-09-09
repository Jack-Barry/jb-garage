import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonToolbarProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type ButtonToolbarWithRef = <Component extends ElementType = 'div'>(
  props: ButtonToolbarProps<Component>
) => ReactNode

/** [ButtonToolbar]() */
const ButtonToolbar: ButtonToolbarWithRef = forwardRef(function ButtonToolbar<
  T extends ElementType = 'div'
>(props: ButtonToolbarProps<T>, ref?: ButtonToolbarProps<T>['ref']) {
  const { as = 'div' as ElementType, children, className, role = 'toolbar', ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('btn-toolbar', className)}
      role={role}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default ButtonToolbar
