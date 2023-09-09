import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'

import { BrElement, BrElementProps } from '../../utils/BrElement'

export type InputGroupTextProps<T extends ElementType> = BrElementProps<T> & {
  /** */
}

type InputGroupTextWithRef = <Component extends ElementType = 'span'>(
  props: InputGroupTextProps<Component>
) => ReactNode

const InputGroupText: InputGroupTextWithRef = forwardRef(function FormInput<
  T extends ElementType = 'span'
>(props: InputGroupTextProps<T>, ref?: InputGroupTextProps<T>['ref']) {
  const { as = 'span' as ElementType, className, children, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('input-group-text', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default InputGroupText
