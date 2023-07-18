import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { ElementType } from 'react'

export type FormTextProps<T extends ElementType> = BrElementProps<T> & {
  /**
   * Type of HTML element to render
   *
   * @default "div"
   */
  as?: T
}

/** []() */
export default function FormText<T extends ElementType = 'div'>(props: FormTextProps<T>) {
  const { as = 'div' as ElementType, children, className, ...rest } = props

  return (
    <BrElement as={as} className={classNames('form-text', className)} {...rest}>
      {children}
    </BrElement>
  )
}
