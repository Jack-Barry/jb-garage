import { BsJsConfig } from '@jb-garage/bootstrap-js'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type ButtonGroupProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
  bsJs?: BsJsConfig<'button-group'>
}

type ButtonGroupWithRef = <Component extends ElementType = 'div'>(
  props: ButtonGroupProps<Component>
) => ReactNode

/** [ButtonGroup]() */
const ButtonGroup: ButtonGroupWithRef = forwardRef(function ButtonGroup<
  T extends ElementType = 'div'
>(props: ButtonGroupProps<T>, ref?: ButtonGroupProps<T>['ref']) {
  const { as = 'div' as ElementType, children, role = 'group', ...rest } = props

  return (
    <BrElement as={as} ref={ref} role={role} {...rest}>
      {children}
    </BrElement>
  )
})
export default ButtonGroup
