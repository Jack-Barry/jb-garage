import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType, ReactNode, forwardRef } from 'react'

export type FormTextProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

type FormTextWithRef = <Component extends ElementType = 'div'>(
  props: FormTextProps<Component>
) => ReactNode

/** []() */
const FormText: FormTextWithRef = forwardRef(function FormText<T extends ElementType = 'div'>(
  props: FormTextProps<T>,
  ref?: FormTextProps<T>['ref']
) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} ref={ref} className={classNames('form-text', className)} {...rest}>
      {children}
    </BrElement>
  )
})
export default FormText
