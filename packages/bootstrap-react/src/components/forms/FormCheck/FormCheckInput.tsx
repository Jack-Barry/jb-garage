import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { forwardRef } from 'react'

export type FormCheckInputProps = Omit<BrElementProps<'input'>, 'as' | 'type'> & {
  type?: 'checkbox' | 'radio'
  /** Form input value is invalid */
  brIsInvalid?: boolean
  /** Form input value is valid */
  brIsValid?: boolean
}

const FormCheckInput = forwardRef<HTMLInputElement, FormCheckInputProps>(function FormCheckInput(
  props: FormCheckInputProps,
  ref
) {
  const { type = 'checkbox', children, className, brIsInvalid, brIsValid, ...rest } = props

  return (
    <BrElement
      as="input"
      type={type}
      ref={ref}
      className={classNames(
        'form-check-input',
        { 'is-invalid': brIsInvalid, 'is-valid': brIsValid },
        className
      )}
      {...rest}
    >
      {children}
    </BrElement>
  )
})
export default FormCheckInput
