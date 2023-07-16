import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { forwardRef } from 'react'

export type FormCheckInputProps = Omit<BrElementProps<'input'>, 'as' | 'type'> & {
  type?: 'checkbox' | 'radio'
}

const FormCheckInput = forwardRef<HTMLInputElement, FormCheckInputProps>(function FormCheckInput(
  props: FormCheckInputProps,
  ref
) {
  const { type = 'checkbox', children, className, ...rest } = props

  return (
    <BrElement
      as="input"
      type={type}
      ref={ref}
      className={classNames('form-check-input', className)}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormCheckInput
